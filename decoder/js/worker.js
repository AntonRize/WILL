// ==========================================================================
// ROM Holographic Decoder — Pyodide Web Worker
// All Python execution happens here, off the UI thread.
// ==========================================================================

importScripts("https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js");

let pyodideReady = null;
let pythonFilesLoaded = false;

async function init() {
    if (pyodideReady) return pyodideReady;
    pyodideReady = (async () => {
        postMessage({ type: "engine", state: "loading-pyodide" });
        self.pyodide = await loadPyodide({
            indexURL: "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/"
        });
        postMessage({ type: "engine", state: "loading-packages" });
        await self.pyodide.loadPackage(["numpy", "pandas", "scipy"]);
        postMessage({ type: "engine", state: "loading-micropip" });
        await self.pyodide.loadPackage("micropip");
        postMessage({ type: "engine", state: "installing-emcee" });
        try {
            await self.pyodide.runPythonAsync(`
import micropip
await micropip.install("emcee")
import emcee
print("emcee OK:", emcee.__version__)
            `);
        } catch (e) {
            postMessage({ type: "engine", state: "emcee-failed", error: String(e) });
            // non-fatal — Act I and Act II do not need emcee
        }
        postMessage({ type: "engine", state: "ready" });
        return self.pyodide;
    })();
    return pyodideReady;
}

async function loadPythonFiles() {
    if (pythonFilesLoaded) return;
    const pyo = await init();
    const files = ["generator.py", "scout.py", "sniper.py"]; // Acts I + II + III
    for (const f of files) {
        // Cache-buster so edits to the .py files are never served stale
        const resp = await fetch("../py/" + f + "?v=" + Date.now());
        const src  = await resp.text();
        pyo.FS.writeFile("/home/pyodide/" + f, src);
    }
    await pyo.runPythonAsync(`
import sys
if "/home/pyodide" not in sys.path:
    sys.path.insert(0, "/home/pyodide")
from generator import run_generator
from scout import run_scout
from sniper import run_sniper, mcmc_init, mcmc_run_chunk, mcmc_finalize
    `);
    pythonFilesLoaded = true;
}

self.onmessage = async (ev) => {
    const msg = ev.data || {};
    try {
        if (msg.type === "init") {
            await init();
            await loadPythonFiles();
            postMessage({ type: "init-done" });
            return;
        }
        if (msg.type === "generate") {
            await loadPythonFiles();
            const pyo = await init();
            const seed = Number(msg.seed);
            postMessage({ type: "engine", state: "generating", progress: "" });
            const result = await pyo.runPythonAsync(
                `run_generator(${Number.isFinite(seed) ? seed : 0})`
            );
            postMessage({ type: "generator-result", payload: JSON.parse(result) });
            postMessage({ type: "engine", state: "ready", progress: "" });
            return;
        }
        if (msg.type === "scout") {
            await loadPythonFiles();
            const pyo = await init();
            postMessage({ type: "engine", state: "scouting", progress: "" });
            // Stash the dataset JSON on the Python side, then run the scout
            pyo.globals.set("_dataset_json", msg.dataset_json);
            const result = await pyo.runPythonAsync(`run_scout(_dataset_json)`);
            postMessage({ type: "scout-result", payload: JSON.parse(result) });
            postMessage({ type: "engine", state: "ready", progress: "" });
            return;
        }
        if (msg.type === "sniper") {
            await loadPythonFiles();
            const pyo = await init();
            postMessage({ type: "engine", state: "sniping", progress: "" });
            pyo.globals.set("_dataset_json", msg.dataset_json);
            pyo.globals.set("_scout_json",   msg.scout_json);
            const result = await pyo.runPythonAsync(`run_sniper(_dataset_json, _scout_json)`);
            postMessage({ type: "sniper-result", payload: JSON.parse(result) });
            postMessage({ type: "engine", state: "ready", progress: "" });
            return;
        }
        if (msg.type === "mcmc-init") {
            const pyo = await init();
            const total = Number(msg.total_steps) || 1000;
            const result = await pyo.runPythonAsync(`mcmc_init(${total})`);
            postMessage({ type: "mcmc-init-done", payload: JSON.parse(result) });
            return;
        }
        if (msg.type === "mcmc-chunk") {
            const pyo = await init();
            const n = Number(msg.n_steps) || 50;
            const result = await pyo.runPythonAsync(`mcmc_run_chunk(${n})`);
            postMessage({ type: "mcmc-chunk-done", payload: JSON.parse(result) });
            return;
        }
        if (msg.type === "mcmc-finalize") {
            const pyo = await init();
            const result = await pyo.runPythonAsync(`mcmc_finalize()`);
            postMessage({ type: "mcmc-final", payload: JSON.parse(result) });
            postMessage({ type: "engine", state: "ready", progress: "" });
            return;
        }
    } catch (err) {
        postMessage({ type: "error", error: String(err && err.stack || err) });
    }
};
