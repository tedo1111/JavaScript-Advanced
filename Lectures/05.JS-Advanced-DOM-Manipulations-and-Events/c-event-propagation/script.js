const orangeElement = document.querySelector('.orange');
const greenElement = document.querySelector('.green');
const yellowElement = document.querySelector('.yellow');

// Add capture for orange insted of bubbling
orangeElement.addEventListener('click', () => {
    console.log('Click on orangeElement');
}, {
    capture: true,
});

// Bubbling by default
greenElement.addEventListener('click', () => {
    console.log('Click on greenElement');
});

// Stop propagation
yellowElement.addEventListener('click', (event) => {
    event.stopPropagation();
    console.log('Click on yellowElement');
});

// Stop default behaviour
const linkElement = document.getElementById('link');
linkElement.addEventListener('click', (event) => {
    console.log('clicked');
    event.preventDefault();
})
