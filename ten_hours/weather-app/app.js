const main = document.getElementById("main");
const search = document.getElementById("searchTerm");
const form = document.getElementById("form");


const API_KEY = '2affa1c2649dee21bdcb79988940081e'

const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&q=`



function getData(method, url) {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json'
        xhr.open(method, url);
        xhr.addEventListener("load", () => {
            if (xhr.status >= 400){
                reject("There was an error on the server side")
            }
            resolve(xhr.response)
            
        })
        xhr.send()    
    })
    return promise
}
// console.log(getData("GET", BASE_URL + searchTerm).then( data => console.log(data)));


function makeElements(data, location){
    main.innerHTML = ''
    main.innerHTML = `<h2>${location}</h2>
    <p>${data.weather[0].description}</p>
    <h1>${Math.floor(data.main.temp - 273)} C</h1>`
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchTerm = search.value
    getData("GET", BASE_URL + searchTerm).then(data => {
        makeElements(data, searchTerm);
        
    })
});