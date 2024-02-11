
const API = 'https://api.disneyapi.dev/character'

let getMovies = async(API) => {
    let result = await fetch(API)
    let data = await result.json();
    
    renderMovie(data.data)
    filterMovie(data)
}

getMovies(API)



