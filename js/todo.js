const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todo";
let toDos = [];
const savedTodos = localStorage.getItem(TODOS_KEY);

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

if (savedTodos) {
    const parsedTodos = JSON.parse(savedTodos);
    toDos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}
function handleForm(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text : newToDo,
        id : Date.now()
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}


function paintTodo(newToDoObj) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    span.innerText = newToDoObj.text;
    delBtn.innerText = "X";
    delBtn.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newToDoObj.id;
    toDoList.appendChild(li);
}

function deleteTodo(event) {
    event.target.parentElement.remove();
    const li = event.target.parentElement;
    toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
    saveTodos();
}


toDoForm.addEventListener("submit", handleForm);