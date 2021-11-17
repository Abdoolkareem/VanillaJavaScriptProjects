//show todos that are already in local storage here

const todoUl = document.getElementById("todoUl");
const form = document.getElementById("form");
const input = document.getElementById("input");


showItemsinLS()


form.addEventListener("submit", (e) => {
    e.preventDefault()
    addTodo()
});


function addTodo() {
    const todoEl = document.createElement('div');
    todoEl.classList.add("li-container")
    todoEl.innerHTML = '<li></li><i class="bi bi-x" id="to_display"></i>'
    todoEl.children[0].innerText = input.value
    todoUl.appendChild(todoEl)
    input.value = ""

    // add to local storage here
    updateLS()
    

    todoEl.addEventListener("click", () => {
        todoEl.children[0].classList.toggle("completed")
        // update local storage here
        console.log(todoEl.children[0].classList.contains("completed"))
        updateLS()
        

    });
    todoEl.addEventListener("mouseover", () => {
        todoEl.children[1].classList.add("show")
    });
    todoEl.addEventListener("mouseleave", () => {
        todoEl.children[1].classList.remove("show")
    });
    
    let delete_btn = todoEl.children[1]
    delete_btn.addEventListener("click", (e) => {
        e.currentTarget.parentElement.remove()
        // remove from local storage here
        updateLS()
    });
    
    
    
};

function updateLS() {
    let todos = document.querySelectorAll(".li-container");
    let list_of_dicts = []
    todos.forEach(todo => {
        let dict = {
            todo_text: todo.children[0].innerText,
            completed: todo.children[0].classList.contains("completed")
        };
        list_of_dicts.push(dict)
    });
    localStorage.setItem("todos", JSON.stringify(list_of_dicts))

};


function showItemsinLS(){
    const current_list_of_dicts = JSON.parse(localStorage.getItem("todos"))
    if (current_list_of_dicts){

        current_list_of_dicts.forEach(dict => {
            let li = document.createElement("div");
            todoUl.appendChild(li)
            li.classList.add("li-container");
            li.innerHTML = '<li></li><i class="bi bi-x" id="to_display"></i>'
            li.children[0].innerText = dict.todo_text
            if (dict.completed){
                li.children[0].classList.add("completed")
            }
            li.addEventListener("click", () => {
                li.children[0].classList.toggle("completed")
                // update local storage here
                console.log(li.children[0].classList.contains("completed"))
                updateLS()
                
        
            });
            li.addEventListener("mouseover", () => {
                li.children[1].classList.add("show")
            });
            li.addEventListener("mouseleave", () => {
                li.children[1].classList.remove("show")
            });
            
            let delete_btn = li.children[1]
            delete_btn.addEventListener("click", (e) => {
                e.currentTarget.parentElement.remove()
                // remove from local storage here
                updateLS()
            });
        });

        
    };
};




















