const loremElement = document.querySelector('#lorem');

// Add event handling with property
loremElement.onclick = function (event) {
    console.log('Lorem clicked');
}

// Event handling with html attribute
function showLessHandler(event) {
    console.log(event);
    console.log('execute');
    const loremElement = document.getElementById('lorem');
    loremElement.textContent = loremElement.textContent.substring(0, 20) + '...';
}

// Add DOM event handler
const newMovieInput = document.getElementById('new-movie');
const addMovieButton = document.getElementById('add-movie');
const movieListElement = document.getElementById('movie-list');

addMovieButton.addEventListener('click', newMovieClickHandler);

function newMovieClickHandler() {
    const movieTitle = newMovieInput.value;

    const liElement = document.createElement('li');
    liElement.textContent = movieTitle;

    movieListElement.prepend(liElement);

    newMovieInput.value = '';
}

// Remove event listener after 10 second
setTimeout(() => {
    addMovieButton.removeEventListener('click', newMovieClickHandler);
}, 10000);

// Using this
addMovieButton.addEventListener('click', function (event) {
    console.log(event.currentTarget);
    console.log(addMovieButton);
    console.log(this); // Only when function expression/declaration is used
});

// print on every keystroke
newMovieInput.addEventListener('input', (event) => {
    console.log('oninput: ' + event.currentTarget.value);
});

// Print on change
newMovieInput.addEventListener('change', (event) => {
    console.log('onchange: ' + event.currentTarget.value);
});
