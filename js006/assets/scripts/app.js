const backDrop = document.getElementById('backdrop');

const addMovieModal = document.getElementById('add-modal');
const addModalOpenButton = document.querySelector('header button');
const cancelAddButton = addMovieModal.querySelector('.btn--passive');
const confirmAddButton = cancelAddButton.nextElementSibling;

const deleteMovieModal = document.getElementById('delete-modal');
const deleteTargetId = deleteMovieModal.querySelector('input');
const cancelDeleteButton = deleteMovieModal.querySelector('.btn--passive');
const confirmDeleteButton = cancelDeleteButton.nextElementSibling;

const movieInputs = addMovieModal.getElementsByTagName('input');
const entryText = document.getElementById('entry-text');
const movieList = document.getElementById('movie-list');

const movies = [];

const toggleBackDrop = () => {
    backDrop.classList.toggle('visible');
};

const clickBackDrop = () => {
    if (addMovieModal.classList.contains('visible')) {
        toggleAddModal();
    } else if (deleteMovieModal.classList.contains('visible')) {
        toggleDeleteModal();
    }
};

const toggleAddModal = () => {
    if (addMovieModal.classList.contains('visible')) {
        clearMovieInputs();
    }
    toggleBackDrop();
    addMovieModal.classList.toggle('visible');
};

const clearMovieInputs = () => {
    for (const movieInput of movieInputs) {
        movieInput.value = '';
    }
};

const confirmAddMovie = () => {
    const newMovie = {};

    for (const movieInput of movieInputs) {
        const inputValue = movieInput.value;

        if (inputValue.trim() === '') {
            alert('Please enter valid values.');
            return;
        } else if (movieInput.name === 'rating' && (+inputValue < 1 || +inputValue > 5)) {
            alert('Rating should be between 1 and 5.');
            return;
        }

        newMovie[movieInput.name] = inputValue;
    }

    newMovie.id = new Date().getTime();

    movies.unshift(newMovie);
    console.log(movies);

    toggleAddModal();
    addMovieElement(newMovie);
    updateUI();
};

const updateUI = () => {
    if (movies.length !== 0) {
        entryText.style.display = 'none';
    } else {
        entryText.style.display = 'block';
    }
};

const addMovieElement = (movie) => {
    const movieElement = document.createElement('li');
    movieElement.className = 'movie-element';
    movieElement.innerHTML = `
        <div class="movie-element__image">
            <img src="${movie['image-url']}" alt="${movie['image-url']}"/>
        </div>
        <div class="movie-element__info">
            <h2>${movie.title}</h2>
            <p>${movie.rating}/5 stars</p>
        </div>
    `;
    movieElement.addEventListener('click', toggleDeleteModal.bind(this, movie.id));

    movieList.prepend(movieElement);
};

const toggleDeleteModal = (id) => {
    toggleBackDrop();

    if (!deleteMovieModal.classList.contains('visible')) {
        deleteMovieModal.classList.add('visible');
        deleteTargetId.value = id;
        confirmDeleteButton.addEventListener('click', confirmDeleteMovie);
    } else {
        deleteMovieModal.classList.remove('visible');
        deleteTargetId.value = '';
        confirmDeleteButton.removeEventListener('click', confirmDeleteMovie);
    }
};

const confirmDeleteMovie = () => {
    const deleteIndex = movies.findIndex(movie => movie.id === parseInt(deleteTargetId.value));

    movies.splice(deleteIndex, 1);
    console.log(movies);

    movieList.children[deleteIndex].remove();
    updateUI();
    toggleDeleteModal();
};

backDrop.addEventListener('click', clickBackDrop);
addModalOpenButton.addEventListener('click', toggleAddModal);
cancelAddButton.addEventListener('click', toggleAddModal);
confirmAddButton.addEventListener('click', confirmAddMovie);
cancelDeleteButton.addEventListener('click', toggleDeleteModal);