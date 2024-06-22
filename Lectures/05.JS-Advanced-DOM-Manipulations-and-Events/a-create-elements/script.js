const moviesUlElement = document.getElementById('movie-list');

// Create first movie element
const firstMovieElement = document.createElement('li');
firstMovieElement.textContent = 'Man of Steel';
console.log(firstMovieElement);

// Append movie to dom
moviesUlElement.appendChild(firstMovieElement);

// Create movie element with link
const theMatrixAElement = document.createElement('a');
theMatrixAElement.href = 'https://www.imdb.com/title/tt0133093/?ref_=nv_sr_srsg_0_tt_7_nm_1_q_the%2520matrix';
theMatrixAElement.textContent = 'The Matrix';
theMatrixAElement.target = '_blank';

const theMatrixLiElement = document.createElement('li');
theMatrixLiElement.appendChild(theMatrixAElement);

moviesUlElement.appendChild(theMatrixLiElement);

// Create shallow copy of element
const theMatrixShallowCopy = theMatrixLiElement.cloneNode();
console.log(theMatrixShallowCopy);

// Create deep copy of element
const theMatrixDeepCopy = theMatrixLiElement.cloneNode(true);
console.log(theMatrixDeepCopy);
theMatrixDeepCopy.querySelector('a').textContent += ' - Copy';
moviesUlElement.appendChild(theMatrixDeepCopy);

// Delete element with delay
// theMatrixLiElement.parentElement.removeChild(theMatrixLiElement) // The old way
setTimeout(() => {
    theMatrixLiElement.remove();
}, 5000);
    
