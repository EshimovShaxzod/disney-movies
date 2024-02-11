let elMovieResult = document.querySelector('.movie-result'),
    elMovieTemplate = document.querySelector('.movie-template').content,
    elMovieFragment = new DocumentFragment();

function renderMovie(movie) {

    elMovieResult.innerHTML = null;

    movie.forEach((movie) => {
        
        let cloneMovies = elMovieTemplate.cloneNode(true);
        
        cloneMovies.querySelector('.movie-img').src = movie.imageUrl;
        cloneMovies.querySelector('.movie-name').textContent = movie.name;
        cloneMovies.querySelector('.movie-company').textContent = String(movie.films).slice(0,20);
        cloneMovies.querySelector('.movie-link').textContent ='Video Source';
        cloneMovies.querySelector('.movie-link').href = movie.sourceUrl;
        elMovieFragment.appendChild(cloneMovies);
        
    })

    elMovieResult.appendChild(elMovieFragment);
}