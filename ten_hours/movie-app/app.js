const main = document.getElementById("main");
const form = document.getElementById("form");
const error_msg = document.getElementById("error_msg");


API_KEY = 'da11b77366426ebc43cf6352452c601e'
SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=`
POPULAR_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`

async function getMovies(url, searchTerm = "") {
    if (searchTerm) {
        url = url + searchTerm
    }
    const resp = await fetch(url)
    const respData = await resp.json()

    if (respData.results.length >= 1) {
        respData.results.forEach(movie => {
            error_msg.innerText = ""
            const movieEl = document.createElement('div');
            movieEl.classList.add("movie-container");
            let rating = ""
            if (movie.vote_average >= 8) {
                rating = 'green'
            } else if (movie.vote_average >= 5) {
                rating = 'orange'
            } else {
                rating = 'red'
            }
            movieEl.innerHTML += `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            <div class="detail">
                <h3>${movie.title}</h3>
                <span class="${rating}">${movie.vote_average}</span>
            </div>`
            if (movie.poster_path) {
                main.appendChild(movieEl);
                const overview = document.createElement('div');
                movieEl.appendChild(overview)
                overview.classList.add("overview")
                overview.innerHTML = `<h3>Overview</h3>${movie.overview}`

                movieEl.addEventListener("mouseover", () => {
                    overview.classList.add("move")
                });
                movieEl.addEventListener("mouseleave", () => {
                    overview.classList.remove("move");
                });
            }
        });
    }else{
        error_msg.innerText = 'Sorry no results found'
        // getMovies(POPULAR_URL)
    }

}


form.addEventListener("submit", (e) => {
    e.preventDefault()
    const input = form.children[0]
    const searchTerm = input.value
    input.value = ""
    main.innerHTML = ""
    getMovies(SEARCH_URL, searchTerm)
});
getMovies(POPULAR_URL)

















