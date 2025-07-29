const addMoviewBtn = document.getElementById('add-movie-btn');
const addMovieInputs = document.getElementById('user-input').querySelectorAll('input');
const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('filter-title');
let movieId = 100;
const movies = [];

const renderMovies = (filter = '') => {
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = '';

    if (movies.length === 0) {
        movieList.classList.remove('visible');
        return;
    } else {
        movieList.classList.add('visible');
    }

    const filteredMovies = !filter
        ? movies
        : movies.filter(movie => movie.info.title.includes(filter));

    filteredMovies.forEach(movie => {
        const movieItem = document.createElement('li');
        const { info } = movie;
        let title;
        let extraInfo;
        for (const infoKey in info) {
            if (infoKey === 'title') {
                title = movie.getFormattedTitle();
            } else {
                extraInfo = `${infoKey}: ${info[infoKey]}`;
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
        movieId,
        info: {
            title,
            [extraName]: extraValue
        },
        getFormattedTitle() {
            return this.info.title.charAt(0).toUpperCase() + this.info.title.slice(1);
        }
    };

    movies.push(newMovie);
    movieId++;

    renderMovies();
};

const searchMovieHandler = () => {
    renderMovies(searchInput.value);
};

const keyEvents = {
    addMovie: e => {
        if (e.keyCode === 13) {
            addMovieHandler();
        }
    },
    searchMovie: e => {
        if (e.keyCode === 13) {
            searchMovieHandler();
        }
    }
};

addMoviewBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);

addMovieInputs.forEach(input => input.addEventListener('keyup', keyEvents.addMovie));
searchInput.addEventListener('keyup', keyEvents.searchMovie);