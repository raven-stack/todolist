import { toggleOffcanvas } from "./toggle-offcanvas.js";
import { checkHour } from "./check-hour.js";
import { getDateInfo } from "./clock.js";
import { themeToggle } from "./theme-toggler.js";

// Odpowiada za wysuwanie i ukrywanie naszego offcanvas menu
toggleOffcanvas();
// WYŚWIETLENIE POWITANIA NA PODSTAWIE AKTUALNEJ GODZINY
checkHour();
// wyświetlanie daty i godziny
getDateInfo();

// przełącznik zmiany dark/light
themeToggle();

// funkcja która tworzy element---------------------------------------------------------------------------------------------------
// POBIERAMY ELEMENT
const todoList = document.getElementById("TodoList");
const todoCount = document.getElementById("TodoCount");

function countTodo() {
  const items = document.querySelectorAll(".list__item");
  // console.log(items);
  todoCount.textContent = items.length + " items left";
}

function createTodoItem(task) {

  //TWORZYMY li
  const todoItem = document.createElement("li");
  // do utworzonego li dodajemy klasę
  todoItem.classList.add("list__item");

  // tworzymy spana dla li ^
  const itemCircle = document.createElement("span");
  itemCircle.classList.add("item__circle");
  // przyłączamy spana do li ^
  todoItem.appendChild(itemCircle);

  // tworzymy p dla li ^
  const itemText = document.createElement("p");
  itemText.classList.add("item__text");
  itemText.textContent = task;
  // przyłączamy p do li ^
  todoItem.appendChild(itemText);

  // DO POBRANEGO ul DODAJEMY UTWORZONY li
  todoList.appendChild(todoItem);

  
  countTodo();
}

const tasks = [
  "Zrobić zakupy na śniadanie", 
  "Przygotować się na zajęcia", 
  "Krótka drzemka", 
  "Pójść na siłownie", 
  "Obejrzeć film"
];

tasks.forEach(function (task) {
  createTodoItem(task);
});
// ------------------------------------------------------------------------------------

// DODAWANIE ELEMENTU I SPRAWDZANIE CZY WPISALISMY POPRAWNE DANE-----------------------------
const addTodoField = document.getElementById("AddTodo");
function addTodo() {
  const msg = addTodoField.value;

  if (msg.trim().length >= 5) {
    createTodoItem(msg);
    addTodoField.value = "";
  } else {
    // console.log("Nazwa jest za króka");
  }
}
addTodoField.addEventListener("change", addTodo);
// -------------------------------------------------------------------------------------------

// const listItems = document.querySelectorAll(".list__item");
//   console.log(listItems);

// event delegation
// listItems.forEach(function (x) {
//   x.addEventListener("click", function (e) {
//     x.classList.toggle("list__item--is-active");
//   });
// });

function checkCompleted () {
  todoList.addEventListener("click", function (e) {
    if (e.target.tagName === "SPAN") {
      e.target.parentNode.classList.toggle("list__item--is-active");
    } 
    else {
      return;
    }
  });
}
checkCompleted();


// usuń zadania oznaczone jako zakończone
const clearBtn = document.getElementById("TodoClear");

function deleteCompleted () {
  const items = document.querySelectorAll(".list__item");

  items.forEach(function (item) {
    // console.log(item);
    if(item.classList.contains("list__item--is-active")) {
      todoList.removeChild(item);
    }
  });
  countTodo();
}

clearBtn.addEventListener("click", deleteCompleted);

// --------

