const questions = [
    {
        "question_text": "How old is Abdulkarim?",
        "a": "19",
        "b": "21",
        "c": "25",
        "d": "23",
        "correct": "d"
    },
    {
        "question_text": "Who is the highest rated chess player in the world?",
        "a": "Magnus Carlsen",
        "b": "Fabiano Caruana",
        "c": "Sergey Karjakin",
        "d": "Ian Nepomnitschi",
        "correct": "a"
    },
    {
        "question_text": "Who started the the third world war?",
        "a": "Adolph Hitler",
        "b": "Joseph Stalin",
        "c": "George Bush",
        "d": "There is no third World War",
        "correct": "d"
    },
    {
        "question_text": "Which Text Editor is the best to use to code javascript?",
        "a": "Web Storm",
        "b": "Intellij idea",
        "c": "Visual Studio Mode",
        "d": "Visual Studio Code",
        "correct": "d"
    },
    {
        "question_text": "What Year was the Bicycle created?",
        "a": "1923",
        "b": "2234",
        "c": "2000",
        "d": "1679",
        "correct": "d"
    }
]

const options = document.querySelectorAll("input") // for getting selected option value
const question_text = document.getElementById("question_text"); // for setting question text 
// setting option text
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const quiz_div = document.getElementById("quiz"); // get quiz div so that u can use it when the quiz ends ends

const btn = document.getElementById("btn");

let current_question = 0
let selected_answer = undefined
let score = 0

function set_question() {
    question_text.innerText = questions[current_question].question_text
    a_text.innerText = questions[current_question].a
    b_text.innerText = questions[current_question].b
    c_text.innerText = questions[current_question].c
    d_text.innerText = questions[current_question].d

    options.forEach(option => {
        option.checked = false
    })
}
function get_selected() {

    options.forEach(option => {
        if (option.checked) {
            selected_answer = option.id

        }
    })
}

set_question()
btn.addEventListener("click", () => {

    get_selected()
    if (selected_answer) {
        if (selected_answer == questions[current_question].correct) {
            score++
        }
        current_question++
        if (current_question > questions.length - 1) {
            quiz_div.innerHTML = `<h2>This Quiz is over!! you scored ${score} out of ${questions.length}</h2>`
        } else {
            set_question()

            selected_answer = undefined
        }
    }
})

