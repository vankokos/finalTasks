let btn = document.getElementById("AddToDo")
let newToDo = document.getElementById("newToDo")
let toDoList = document.getElementById("toDoList")

btn.addEventListener("click", () => {
    if(newToDo.value == "") {
        alert("your to-do list is empty, fill it out and try again")
    } else {
        let listItem = document.createElement("div")
        listItem.classList.add("listItem")
        let toDoText = document.createElement("toDoText")
        toDoText.classList.add("TodoText")
        toDoText.innerHTML = newToDo.value
        let remove = document.createElement("button")
        remove.innerHTML = "remove"
        remove.addEventListener("click", (e) => {
            let div = e.target.closest("div")
            toDoList.removeChild(div)
        })
    
        toDoList.appendChild(listItem)
        listItem.appendChild(toDoText)
        listItem.appendChild(remove)
        newToDo.value = ""
    }
})