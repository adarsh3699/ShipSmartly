document.addEventListener("DOMContentLoaded", function () {
  const todoForm = document.getElementById("todoForm");
  const addToDoInput = document.getElementById("addToDos");
  const todoContainer = document.getElementById("toDosElement");

  // Adding a new ToDo
  todoForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const newToDoText = addToDoInput.value.trim();

    if (newToDoText) {
      const newToDoElement = `
                    <div class="eachToDo">
                        <div class="toDoEllpsis">
                            <img src="./img/delete.svg" height="20px" class="deleteTodo" />
                        </div>
                        <div class="toDoInfo">
                            <input type="checkbox" class="todoCheckbox" />
                            <div>
                                <div>${newToDoText}</div>
                                <div class="toDoDesc">Assigned by You | Due in 7 days</div>
                            </div>
                        </div>
                    </div>
                `;

      todoContainer.insertAdjacentHTML("beforeend", newToDoElement);
      addToDoInput.value = "";
    }
  });

  // Handling ToDo check/uncheck and delete
  todoContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("todoCheckbox")) {
      const todoItem = event.target.closest(".eachToDo");
      if (event.target.checked) {
        todoItem.querySelector("div > div").style.textDecoration =
          "line-through";
      } else {
        todoItem.querySelector("div > div").style.textDecoration = "none";
      }
    }

    if (event.target.classList.contains("deleteTodo")) {
      const todoItem = event.target.closest(".eachToDo");
      todoItem.remove();
    }
  });
});

// Same MenuBar HTML code as a string
const menuBarHTML = `
 <div id="menuBar">
     <div class="menus">
         <a class="menuBox" href="index.html">
             <img src="./img/home.svg" />
             <div>Home</div>
         </a>
     </div>
     <div class="menus">
         <a class="menuBox" href="blog.html">
             <img src="./img/workspace.svg" />
             <div>Blog</div>
         </a>
     </div>
     <div class="menus">
         <a class="menuBox" href="issues.html">
             <img src="./img/Heart.svg" />
             <div>Issues</div>
         </a>
     </div>
     <div class="menus">
         <a class="menuBox" href="solutions.html">
             <img src="./img/marpol.svg" />
             <div>Solutions</div>
         </a>
     </div>
     <div class="menus">
         <a class="menuBox" href="testimonials.html">
             <img src="./img/insights.svg" />
             <div>TESTIMONIALS</div>
         </a>
     </div>
     <div class="menus">
         <a class="menuBox" href="aboutMe.html">
             <img src="./img/apps.svg" />
             <div>About Us</div>
         </a>
     </div>
     <div class="menus">
         <a class="menuBox" href="contact.html">
              <img src="./img/history.svg" />
             <div>Contact</div>
         </a>
     </div>
 </div>
`;

// Function to inject MenuBar
function loadMenuBar() {
  document.getElementById("menuBarContainer").innerHTML = menuBarHTML;
}

// Load the MenuBar when the page is loaded
window.onload = loadMenuBar;
