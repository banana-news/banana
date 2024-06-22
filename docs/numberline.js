document.addEventListener("DOMContentLoaded", function() {
    const numberLine = document.getElementById('number-line');

    const min = -10;
    const max = 10;
    const step = 1;
    const totalTicks = (max - min) / step;

    for (let i = 0; i <= totalTicks; i++) {
        const value = min + (i * step);
        const tick = document.createElement('div');
        tick.className = 'tick';
        tick.style.left = `${(i / totalTicks) * 100}%`;
        
        const label = document.createElement('div');
        label.className = 'label';
        label.style.left = `${(i / totalTicks) * 100}%`;
        label.textContent = value;

        numberLine.appendChild(tick);
        numberLine.appendChild(label);
    }
});
