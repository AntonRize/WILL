/*
This script contains all the Chart.js logic for the WILL Geometry interactive page.
It is designed to be loaded at the end of a Jekyll-generated page (like interactive.md)
after the Chart.js library has been loaded.
It finds canvas elements by their IDs and initializes the interactive charts.
*/

document.addEventListener('DOMContentLoaded', () => {

    // --- Helper Functions ---
    const radToDeg = rad => rad * (180 / Math.PI);
    const getUnitCircle = (points = 100) => {
        const circle = [];
        for (let i = 0; i <= points; i++) {
            const angle = (i / points) * 2 * Math.PI;
            circle.push({ x: Math.cos(angle), y: Math.sin(angle) });
        }
        return circle;
    };

    // --- Chart.js Global Configuration ---
    // Note: Chart.js must be loaded globally by the Jekyll layout for this to work.
    if (typeof Chart === 'undefined') {
        console.error('Chart.js is not loaded. Please ensure it is included in your site layout.');
        return;
    }
    Chart.defaults.color = '#9ca3af';
    Chart.defaults.borderColor = '#374151';

    // --- Graph 1: Interactive SR Projection (Beta Circle) ---
    const betaSlider = document.getElementById('beta-slider');
    const betaValueSpan = document.getElementById('beta-value');
    const thetaSValueSpan = document.getElementById('theta-s-value');
    const lcValueSpan = document.getElementById('lc-value');
    const betaCosValueSpan = document.getElementById('beta-cos-value');
    const betaCircleCtx = document.getElementById('betaCircleChart');

    if (betaSlider && betaCircleCtx) {
        const betaCircleChart = new Chart(betaCircleCtx.getContext('2d'), {
            type: 'scatter',
            data: {
                datasets: [
                    {
                        label: 'Unit Circle',
                        data: getUnitCircle(),
                        borderColor: '#4b5563',
                        borderWidth: 1,
                        pointRadius: 0,
                        showLine: true,
                        order: 4
                    },
                    {
                        label: 'Radial Vector',
                        data: [],
                        borderColor: '#a78bfa', // Purple
                        backgroundColor: '#a78bfa',
                        showLine: true,
                        order: 3
                    },
                    {
                        label: 'Lc Projection',
                        data: [],
                        borderColor: '#6ee7b7', // Green
                        borderDash: [5, 5],
                        showLine: true,
                        order: 2
                    },
                    {
                        label: 'Beta Projection',
                        data: [],
                        borderColor: '#60a5fa', // Blue
                        borderDash: [5, 5],
                        showLine: true,
                        order: 1
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                aspectRatio: 1,
                plugins: {
                    legend: { display: false },
                    tooltip: { enabled: false }
                },
                scales: {
                    x: { min: -1.1, max: 1.1, grid: { color: '#374151' }, ticks: { color: '#9ca3af' } },
                    y: { min: -1.1, max: 1.1, grid: { color: '#374151' }, ticks: { color: '#9ca3af' } }
                }
            }
        });

        const updateBetaChart = () => {
            const beta = parseFloat(betaSlider.value);
            if (isNaN(beta)) return;

            const theta_s = Math.acos(beta);
            const lc = Math.sin(theta_s);
            const x = beta; // cos(theta_s)
            const y = lc;   // sin(theta_s)

            betaValueSpan.textContent = beta.toFixed(2);
            thetaSValueSpan.textContent = `${radToDeg(theta_s).toFixed(1)}°`;
            lcValueSpan.textContent = lc.toFixed(3);
            betaCosValueSpan.textContent = beta.toFixed(3);

            betaCircleChart.data.datasets[1].data = [{x: 0, y: 0}, {x: x, y: y}];
            betaCircleChart.data.datasets[2].data = [{x: x, y: y}, {x: 0, y: y}];
            betaCircleChart.data.datasets[3].data = [{x: x, y: y}, {x: x, y: 0}];
            betaCircleChart.update('none');
        };

        betaSlider.addEventListener('input', updateBetaChart);
        updateBetaChart();
    }

    // --- Graph 2: Energy-Momentum Triangle ---
    const emcSlider = document.getElementById('emc2-beta-slider');
    const emcBetaValue = document.getElementById('emc2-beta-value');
    const emcPcValue = document.getElementById('emc2-pc-value');
    const emcEnergyValue = document.getElementById('emc2-energy-value');
    const emcCanvas = document.getElementById('emc2-canvas');

    if (emcSlider && emcCanvas) {
        const emcChart = new Chart(emcCanvas.getContext('2d'), {
            type: 'scatter',
            data: {
                datasets: [
                    {
                        label: 'Rest Energy (E₀)',
                        data: [{ x: 0, y: 0 }, { x: 0, y: 1 }],
                        borderColor: '#6ee7b7',
                        backgroundColor: '#6ee7b7',
                        showLine: true,
                        pointRadius: 4,
                        order: 3
                    },
                    {
                        label: 'Momentum (pc)',
                        data: [],
                        borderColor: '#60a5fa',
                        backgroundColor: '#60a5fa',
                        showLine: true,
                        pointRadius: 4,
                        order: 2
                    },
                    {
                        label: 'Total Energy (E)',
                        data: [],
                        borderColor: '#f87171',
                        backgroundColor: '#f87171',
                        showLine: true,
                        pointRadius: 4,
                        order: 1
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                aspectRatio: 1,
                plugins: {
                    legend: { display: false },
                    tooltip: { enabled: false }
                },
                scales: {
                    x: { title: { display: true, text: 'Momentum (pc)' }, min: -0.1, max: 3 },
                    y: { title: { display: true, text: 'Rest Energy (E₀)' }, min: -0.1, max: 1.5 }
                }
            }
        });

        const updateEmcChart = () => {
            const beta = parseFloat(emcSlider.value);
            if (isNaN(beta) || beta >= 1) return;

            const gamma = 1 / Math.sqrt(1 - beta * beta);
            const pc = gamma * beta;
            const E = gamma;

            emcBetaValue.textContent = beta.toFixed(3);
            emcPcValue.textContent = pc.toFixed(3);
            emcEnergyValue.textContent = E.toFixed(3);

            emcChart.data.datasets[1].data = [{x: 0, y: 0}, {x: pc, y: 0}];
            emcChart.data.datasets[2].data = [{x: 0, y: 1}, {x: pc, y: 0}];
            emcChart.options.scales.x.max = Math.max(3, pc + 0.5);
            emcChart.update('none');
        };

        emcSlider.addEventListener('input', updateEmcChart);
        updateEmcChart();
    }

    // --- Graph 3: Interactive GR Projection (Kappa Circle) ---
    // ... (logic for kappa chart)
    
    // --- Graph 4: Unified Beta-Kappa Plane ---
    // ... (logic for unified chart)

});
