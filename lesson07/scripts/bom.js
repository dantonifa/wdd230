// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("❌​");
  span.className = "close";
  span.appendChild(txt);

  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("favchap").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("favchap").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("❌​");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
const input = document.querySelector("#favchap");
const button = document.querySelector("#add");
const ul = document.querySelector("ul");

//Declare an array named chaptersArray and assign it to the results of a defined function named getChapterList.
//Add a compound OR condition to assign it an empty array in case this is the user's first visit or if the localStorage item is missing.
var chaptersArray = getChapterList() || [];

//let's populate the displayed list of chapters. Use a forEach on the chaptersArray to process each entry named chapter.
//Use an arrow function within the loop to call a new defined function named displayList and pass it the argument of chapter.
//That way each entry will be processed, i.e., appended to the list.
chaptersArray.forEach((chapter) => {
  displayList(chapter);
});
//Change the button click event listener to only do the following tasks:
//check if the input is empty, if not, then
//call displayList with the input.value argument,
//push the input.value to the chaptersArray,
//update the localStorage with the new array by calling a function named setChapterList,
//set the input.value to nothing, and
//set the focus back to the input.
button.addEventListener("click", () => {
  if (input.value !== "") {
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList(chaptersArray);
    input.value = "";
    input.focus();
  }
});
//(the other tasks in that original function will be used in a separate function named displayList):
//Put all the code that builds a list item from the previous button click event listener into this new displayList function
//and use the item parameter as the input.
//A deleteChapter function will need to be called within the delete button click event to remove the chapter from the array and localStorage.
function displayList(item) {
  const li = document.createElement("li");
  const delButton = document.createElement("button");
  li.textContent = item;
  delButton.textContent = "❌";
  li.appendChild(delButton);
  ul.appendChild(li);
  delButton.addEventListener("click", deleteChapter);
}
//Define the getChapterList function to get the localStorage item.
//No parameter is needed. Since this function returns to an awaiting array,
//we will need to use JSON.parse on the string.
function getChapterList() {
  return JSON.parse(localStorage.getItem("chapters"));
}
//Finally, define the deleteChapter function with a parameter named chapter that does three things:
//1. Reformat the chapter parameter to get rid of the ❌ that is passed on the end of the chapter string
//when we called the deleteChapter function. Use string.slice() method to extract the last character.
//2. Redefine the chaptersArray array using the array.filter method to return everything
//except the chapter to be removed.
//3. Call the setChapterList function to update the localStorage item.
function deleteChapter(e) {
  const chapter = e.target.parentNode.textContent.slice(0, -1);
  chaptersArray = chaptersArray.filter((item) => item !== chapter);
  setChapterList(chaptersArray);
  e.target.parentNode.remove();
}
