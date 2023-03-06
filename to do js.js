//Creating variables
const input = document.getElementById("input");
const submit = document.getElementById("submit");
const list = document.getElementById("list");
list.style.border = "none";

//Entering new item in list by clicking Submit button
submit.addEventListener("click", function () {
  if (input.value.length > 0) {
    var item = document.createElement("li");
    item.appendChild(document.createTextNode(input.value));
    list.appendChild(item);
    input.value = "";
    item.classList.add("list");
    list.classList.add("list");

    //Adding the delete button next to the new item made in the list
    var deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("delete"));
    item.appendChild(deleteBtn);
    deleteBtn.classList.add("deletebtn");

    //Deleting the item that was added in the list
    deleteBtn.addEventListener("click", function () {
      list.removeChild(item);
    });

    //Striking through the item
    item.addEventListener("click", function () {
      item.classList.toggle("done");
    });
  }
});

//Entering new item in the list by pressing enter on the keyboard
input.addEventListener("keydown", function (press) {
  if (input.value.length > 0 && press.key === "Enter") {
    var item = document.createElement("li");
    item.appendChild(document.createTextNode(input.value));
    list.appendChild(item);
    input.value = "";
    item.classList.add("list");
    list.classList.add("list");

    //Adding the delete button next to the new item made in the list
    var deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("delete"));
    item.appendChild(deleteBtn);
    deleteBtn.classList.add("deletebtn");

    //Deleting the item that was added in the list
    deleteBtn.addEventListener("click", function () {
      list.removeChild(item);
    });

    //Striking through the item
    item.addEventListener("click", function () {
      item.classList.toggle("done");
    });
  }
  return item;
});
