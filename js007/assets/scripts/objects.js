const addMoviewBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');
let id = 1;
const movies = [];

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
};

addMoviewBtn.addEventListener('click', addMovieHandler);