


add_btn.addEventListener("click", () => {
    addNote()



  

   


    })
// const text_cont = document.querySelectorAll(".text_cont");
// const textarea = document.querySelectorAll(".textarea");

// let i = 0
// edit_btns.forEach(edit_btn => {

//     edit_btn.addEventListener("click", () => {
//         if (textarea[i].style.visibility == "hidden") {
//             textarea[i].style.visibility = "visible"
//             text_cont[i].style.visibility = "hidden"
//             console.log(textarea[i].style.visibility)
//         } else {
//             let note_text = textarea[i].value
//             textarea[i].style.visibility = "hidden"
//             text_cont[i].style.visibility = "visible"
//             text_cont[i].innerText = note_text
//         }

//     });
//     })



// });

function addNote() {
    new_note = document.createElement("div");
    new_note.classList.add("notes-container")
    new_note.innerHTML = `<div class="icon-container">
        <button class="delete"><i class="bi bi-trash-fill"></i></button>
        <button class="edit"><i class="bi bi-pencil-fill"></i></button>
    </div>
    <div class="text-container" id="">
        <div class="text_cont" id="text_cont"></div>
        <textarea name="textarea" id="textarea" class="textarea" cols="30" rows="18"></textarea>
    </div>`
    const edit_btn = new_note.querySelector(".edit")
    edit_btn.addEventListener("click", (e) => {
        let note = e.target.parentElement.parentElement.parentElement
        let textarea = note.querySelector(".textarea")
        let text_cont = note.querySelector(".text_cont")

        if (textarea.style.visibility == "hidden") {
            textarea.style.visibility = "visible"
            text_cont.style.visibility = "hidden"

        } else {
            note_text = textarea.value
            textarea.style.visibility = "hidden"
            text_cont.style.visibility = "visible"
            text_cont.innerText = note_text
        }

    })
    const delete_btn = new_note.querySelector(".delete");
    delete_btn.addEventListener("click", (e) => {
        e.currentTarget.parentElement.parentElement.remove()
    })

    document.body.appendChild(new_note);
}
