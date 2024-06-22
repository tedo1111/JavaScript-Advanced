function attachGradientEvents() {

    const gradient = document.getElementById('gradient');
    const result = document.getElementById('result');

    gradient.addEventListener('mousemove', (event) => {
        const gradientWidth = gradient.clientWidth;
        const offsetX = event.offsetX;
        const percentage = Math.floor((offsetX / gradientWidth) * 100);
        result.textContent = `${percentage}%`;
    });

}
/*
function attachGradientEvents() {
    document.getElementById('gradient').addEventListener('mousemove', (event) => {
        const percentage = Math.floor((event.offsetX / event.target.clientWidth) * 100);
        document.getElementById('result').textContent = `${percentage}%`;
    });
}
*/