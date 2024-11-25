/* declare three const variables that hold references to the input, addbutton, 
and .list elements.*/
const input = document.querySelector("#favchap");
const addbutton = document.querySelector(".addbutton");
const list = document.querySelector("#list");
/*Create a click event listener for the Add Chapter button using addEventListener
 and an anonymous function or arrow function.*/
addbutton.addEventListener("click", function () {
  /*Inside the event listener, create a conditional statement that checks if the 
  input value is not empty.*/
  if (input.value.trim() !== "") {
    /*Inside the conditional statement, create a new li element and a new button 
    element.*/
    const li = document.createElement("li");
    const deleteButton = document.createElement("delete");
    /*Set the text content of the li element to the input value 
    and the text content of the delete element to "❌".*/
    li.textContent = input.value;
    deleteButton.textContent = "❌";
    /*Append the delete element to the li element and the li element 
    to the list element.*/
    li.appendChild(deleteButton);
    list.appendChild(li);
    /*Clear the input value and set the focus back to the input element.*/
    input.value = "";
    input.focus();
    /*add an event listener to the delete button that 
    removes the li element when clicked'*/
    deleteButton.addEventListener("click", function () {
      list.removeChild(li);
      input.focus();
    });
  }
});
