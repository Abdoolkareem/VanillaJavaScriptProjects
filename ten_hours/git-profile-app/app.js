const main = document.getElementById("main");
const form = document.getElementById("form");

API_URL = "https://api.github.com/users/"

async function getUser(url) {
    const resp = await fetch(url);
    const respData = await resp.json()
    makeCard(respData)
}
function makeCard(data) {
    main.innerHTML = `<div class="card-container">
    <div class="img-container">
        <img src="${data.avatar_url}" alt="${data.login}">

    </div>

    <div class="card-contents">
        <h2>${data.login}</h2>
        <p>${data.bio}</p>
        <ul class="stats">
            <li>${data.followers}<strong>followers</strong></li>
            <li>${data.following}<strong>following</strong></li>
            <li>${data.public_repos}<strong>repos</strong></li>
        </ul>
        <div class="repos">
            <ul id="repoUl">
            </ul>
        </div>
    </div>
</div>`
    getRepoData(data)

}
async function getRepoData(data) {
    const res = await fetch(data.repos_url)
    const resdata = await res.json()
    const repoUl = document.getElementById("repoUl");
    resdata.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 9).forEach(repo => {
        const list = document.createElement("li");
        list.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`
        repoUl.appendChild(list)
    })
}

form.addEventListener("submit", e => {
    e.preventDefault();
    const searchTerm = form.children[0].value;
    if(searchTerm){
        getUser(url = API_URL + searchTerm)
    }
})