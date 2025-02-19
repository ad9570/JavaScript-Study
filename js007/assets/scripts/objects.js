const addMoviewBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');
const addMovieInputs = document.getElementById('user-input').querySelectorAll('input');
let id = 1;
const movies = [];

const renderMovies = () => {
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = '';

    if (movies.length === 0) {
        movieList.classList.remove('visible');
        return;
    } else {
        movieList.classList.add('visible');
    }

    movies.forEach(movie => {
        const movieItem = document.createElement('li');
        let title;
        let extraInfo;
        for (const infoKey in movie.info) {
            if (infoKey === 'title') {
                title = movie.info[infoKey];
            } else {
                extraInfo = `${infoKey}: ${movie.info[infoKey]}`;
            }
        }
        movieItem.textContent = `${title} | ${extraInfo}`;
        movieList.append(movieItem);
    });

    addMovieInputs.forEach(input => input.value = '');
};

const addMovieHandler = () => {
    const title = document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;

    if (title.trim() === '' || extraName.trim() === '' || extraValue.trim() === '') {
        alert('All fields are required.');
        return;
    }

    const newMovie = {
        id,
        info: {
            title,
            [extraName]: extraValue
        }
    };

    movies.push(newMovie);
    id++;

    renderMovies();
};

const keyEvents = {
    addMovie: e => {
        if (e.keyCode === 13) {
            addMovieHandler();
        }
    }
};

addMoviewBtn.addEventListener('click', addMovieHandler);

addMovieInputs.forEach(input => input.addEventListener('keyup', keyEvents.addMovie));