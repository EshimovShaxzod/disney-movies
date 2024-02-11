let elMovieForm = document.querySelector('.movie-form');
let movieInput =  elMovieForm.movieName;

let filterMovie = (data) => {
    movieInput.addEventListener('input', () => {
        let inputVal = movieInput.value.trim();
        
        let SEARCH_QUERY = new RegExp(inputVal, 'gi');
        console.log(SEARCH_QUERY);
        
        let filterMovie = data.data.filter((movie) => {
            return movie.name.match(SEARCH_QUERY)
        })
        
        renderMovie(filterMovie);
    })
}