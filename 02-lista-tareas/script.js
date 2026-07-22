console.log("Holaaaaaa juanda")

const button = document.getElementById("add-task-button")

const form = document.getElementById("add-task-container")

const todoList = document.getElementById("todo-list")

const addTaskInput = document.getElementById("add-task-input")

form.onsubmit = createTask

// button.onclick = createTask

function sayHi() {
    console.log("Soy un boton")
}

function createTask(event) {
    event.preventDefault()
    console.log(event)
    console.log("Default prevented:",event.defaultPrevented)
    
    const li = document.createElement("li")
    const label = document.createElement("label")
    const input = document.createElement("input")
    const span = document.createElement("span")

    const taskName = addTaskInput.value

    input.type = "checkbox"
    
    span.textContent = taskName

    label.append(input, span)

    li.append(label)

    todoList.append(li)

    addTaskInput.value = ""

    console.log("New task created:",taskName)
}