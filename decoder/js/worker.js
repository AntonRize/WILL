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
    const files = ["generator.py"]; // decoder.py and extractor.py follow in later passes
    for (const f of files) {
        const resp = await fetch("../py/" + f);
        const src  = await resp.text();
        pyo.FS.writeFile("/home/pyodide/" + f, src);
    }
    await pyo.runPythonAsync(`
import sys
if "/home/pyodide" not in sys.path:
    sys.path.insert(0, "/home/pyodide")
from generator import run_generator
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
            postMessage({ type: "engine", state: "generating", progress: "running 1PN generator…" });
            const result = await pyo.runPythonAsync(
                `run_generator(${Number.isFinite(seed) ? seed : 0})`
            );
            postMessage({ type: "generator-result", payload: JSON.parse(result) });
            postMessage({ type: "engine", state: "ready", progress: "" });
            return;
        }
    } catch (err) {
        postMessage({ type: "error", error: String(err && err.stack || err) });
    }
};
