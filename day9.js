// task 1: dom manipulation by id
const title = document.getElementById("title");
title.innerText = "Changed by Id";

// task 2: dom manipulation by class
const para = document.getElementsByClassName("para")[0];
para.style.backgroundColor = "purple";

// task 3: create new div element and add to body
const newDiv = document.createElement("div");
const newContent = document.createTextNode("This is the new div");
newDiv.appendChild(newContent);
document.body.appendChild(newDiv);

// task 4: add a li element in a ul element
const ul = document.getElementById("list");
const li = document.createElement("li");
const liText = document.createTextNode("3. This was added by JS");
li.appendChild(liText);
ul.appendChild(li);

// task 5: select an html element and remove it from DOM
document.getElementById("p1").remove();

// task 6: remove last child of a html element
document.getElementById("list").lastChild.remove();

// task 7: select html element and change one of its attributes
document
  .getElementById("img")
  .setAttribute(
    "src",
    "https://fastly.picsum.photos/id/610/200/200.jpg?hmac=6qOvp5zik0MBH2bc7jzgth7yzkY8IlZXay0WCNF20DM"
  );

// task 8: add/ remove a css class
document.getElementById("img").classList.add("cssClass");
document.getElementById("img").classList.remove("cssClass");

// task 9: click event listener to change text of a paragraph
document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("p2").innerText = "This was changed by JS";
});

// task 10: mouseover event to change an element's border color
document.getElementById("hover").addEventListener("mouseover", () => {
  document.getElementById("hover").style.border = "2px solid yellow";
});

document.getElementById("hover").addEventListener("mouseout", () => {
  document.getElementById("hover").style.border = "2px solid white";
});
