const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector(".list"); // ul
button.addEventListener("click", function () {
  let favchap = input.value;
  input.value = "";
  constListItem = document.createElement("li");
  constListItem.textContent = favchap;
  list.appendChild(constListItem);
  constListItem.addEventListener("click", function () {
    constListItem.remove(); // remove the list item
  });
});
button.addEventListener("click", () => {
  input.value = "";
  input.focus();
});
if (input.value != "") {
  button.disabled = false;
} else {
  button.disabled = true;
}
const li = document.createElement("li");
const deleteButton = document.createElement("button");
li.textContent = input.value;
deleteButton.textContent = "❌​";
li.appendChild(deleteButton);
list.append(li);
deleteButton.addEventListener("click", function () {
  list.removeChild(li);
  input.focus();
});
input.focus();
input.value = "";
