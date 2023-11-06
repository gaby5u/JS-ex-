let todoList = JSON.parse(localStorage.getItem("todoList")) || [
  {
    name: "make dinner",
    dueDate: "2023-12-22",
  },
  { name: "wash dishes", dueDate: "2023-06-22" },
];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  todoList.forEach((todoObject, index) => {
    // const name = todoObject.name;
    const { name, dueDate } = todoObject; //destructoring; takes the todoObject.name and puts the value inside the name variable
    // const dueDate = todoObject.dueDate;
    const html = `
    <div>${name}</div>
    <div> ${dueDate} </div>
    <button class="delete-todo-button js-delete-todo-button" >Delete</button>`;
    todoListHTML += html;
  });
  localStorage.setItem("todoList", JSON.stringify(todoList));

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;

  document
    .querySelectorAll(".js-delete-todo-button")
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener("click", () => {
        todoList.splice(index, 1);
        renderTodoList();
      });
    });
}

document.querySelector(".js-add-todo-button").addEventListener("click", () => {
  addTodo();
});
function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;
  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;
  todoList.push({
    // name: name,
    name,
    // dueDate: dueDate,
    dueDate, //shorthand property sintax
  });

  localStorage.setItem("todoList", JSON.stringify(todoList));

  dateInputElement.value = "";
  inputElement.value = "";

  renderTodoList();
}
