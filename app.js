const addList = document.getElementById("task-list");
const addTask = document.getElementById("add-task-button");
let input = document.getElementById("input-task");
let itemsArray = localStorage.getItem('items')
  ? JSON.parse(localStorage.getItem('items'))
  : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

const createTask = (task) => {
  let newTask = document.createElement("li");
  let type = document.createElement("input");
  type.setAttribute("type", "checkbox");
  let text = document.createElement("span");
  text.className = "task";
  text.textContent = task;
  document.getElementById("input-task").value = "";
  addList.appendChild(newTask);
  let close = document.createElement("button");
  close.className = "delete-btn";
  let x = document.createTextNode("x");
  close.appendChild(x);
  newTask.append(type, text, close);
}

addTask.addEventListener("click", function (e) {
  e.preventDefault()

  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  createTask(input.value);
});

data.forEach((item) => {
  createTask(item);
})

const del = document.getElementsByClassName("delete-btn");
for (let j = 0; j < del.length; j++) {
  del[j].onclick = function () {
  let div = this.parentElement;
  div.remove();
  itemsArray.splice(del[j], 1);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  }
}



