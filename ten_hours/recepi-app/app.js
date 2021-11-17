const random_container = document.getElementById("random-container");
const search_term = document.getElementById("search_term");
const search_btn = document.getElementById("search_button");

search_btn.addEventListener("click", () => {
    const term = search_term.value
    searchMeals(term)

})




getRandomMeal();
console.log('dads')


async function getRandomMeal() {

    const response_random = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    const mealData = await response_random.json()
    const sortedMealData = mealData.meals[0]
    random_container.innerHTML = `<header>${sortedMealData.strMeal}</header>
    <div class="random-img">
        <img src="${sortedMealData.strMealThumb}" alt="">
    </div>
    <div class="random-ender"><h3>${sortedMealData.strMeal}</h3><button><i class="bi bi-heart"></i></button></div>`
}

async function searchMeals(term) {
    const response_search = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
    const mealsData = await response_search.json();
    mealsArray = mealsData.meals
    if (mealsArray === null) {
        random_container.innerHTML = `no meals found by the name "${term}"`
    } else {
        random_container.innerHTML = ""

        mealsArray.forEach(meal => {
            const div_for_meals = document.createElement("div");

            div_for_meals.innerHTML = `<header>${meal.strMeal}</header>
        <div class="random-img">
            <img src="${meal.strMealThumb}" alt="">
        </div>
        <div class="random-ender"><h3>${meal.strMeal}</h3><button class=${meal.strMeal}><i class="bi bi-heart"></i></button></div>`

            

            random_container.appendChild(div_for_meals)
            let fav_btn = document.querySelector('.random-ender button');
            let fav_icon = document.querySelector(`.random-ender button i`);
            console.log(fav_icon)

            fav_btn.addEventListener('click', () => {
                fav_icon.classList = "bi bi-heart-fill"
            })
        })
    }


}

