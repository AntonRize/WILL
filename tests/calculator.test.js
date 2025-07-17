const fs = require('fs');
const {JSDOM} = require('jsdom');

const html = fs.readFileSync('calculator.md', 'utf8');
const dom = new JSDOM(html, {runScripts: "dangerously"});
const window = dom.window;

const mockTable1 = "GALAXY1     3 10 0.5 2 60.0 5.0 1.0 0.1 1.2 2.0 1.5 20.0 2.0 5.0 80 5 1 REF\n";
const mockTable2 = [
  "GALAXY1 1 0 50 0 10 20 5",
  "GALAXY1 1 1 60 0 10 20 5",
  "GALAXY1 1 2 70 0 10 20 5"
].join('\n');
window.fetch = (url) => Promise.resolve({ok: true, text: () => Promise.resolve(url.includes('table1') ? mockTable1 : mockTable2)});
window.Plotly = {react: () => { window.__react_called = true; }};

function wait(ms){ return new Promise(r => setTimeout(r, ms)); }

(async () => {
  await wait(10); // allow scripts to run
  const infoText = window.document.getElementById('galaxy-info').textContent;
  if (!infoText.includes('3 (Sb)')) {
    console.error('Test failed: galaxy info not populated');
    process.exit(1);
  }
  const lambdaSlider = window.document.getElementById('lambda-slider');
  lambdaSlider.value = '2.5';
  lambdaSlider.dispatchEvent(new window.Event('input', {bubbles: true}));

  if (!window.__react_called) {
    console.error('Test failed: Plotly.react not called');
    process.exit(1);
  }
  window.__react_called = false;
  const resetBtn = window.document.getElementById('reset-defaults-btn');
  resetBtn.click();

  const ystarSlider = window.document.getElementById('ystar-slider');
  if (parseFloat(lambdaSlider.value) !== 4 || parseFloat(ystarSlider.value) !== 0.25) {
    console.error('Test failed: defaults not reset');
    process.exit(1);
  }
  if (!window.__react_called) {
    console.error('Test failed: Plotly.react not called after reset');
    process.exit(1);
  }
  console.log('Test passed');
})();