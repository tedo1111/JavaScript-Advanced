function attachGradientEvents() {
    const resultElement = document.getElementById('result');
    const gradientElement = document.getElementById('gradient');

    gradientElement.addEventListener('mousemove', (event) => {
        const currentMousePosition = event.offsetX;
        const elementWidth = event.currentTarget.offsetWidth;
        const percent = Math.floor((currentMousePosition / elementWidth) * 100)
        resultElement.textContent = `${percent}%`;
    });
}
