// task1: change paragraph text on click
document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("p1").innerText = "This was changed by JS";
});

// task2: double click on image to toggle visibility
document.getElementById("imgdiv").addEventListener("dblclick", () => {
  const para = document.getElementById("img").style;
  if (para.visibility == "visible") para.visibility = "hidden";
  else para.visibility = "visible";
});

// task3: change background color on mouseover
document.getElementById("hoverdiv").addEventListener("mouseover", () => {
  document.getElementById("hoverdiv").style.backgroundColor = "yellow";
});

// task4: reset background color on mouseout
document.getElementById("hoverdiv").addEventListener("mouseout", () => {
  document.getElementById("hoverdiv").style.backgroundColor = null;
});

// task5: keydown event logs every key pressed to console
document.getElementById("input").addEventListener("keydown", (e) => {
  console.log(e.key);
});

// task6: keyup event prints the key released in a paragraph
document.getElementById("input").addEventListener("keyup", (e) => {
  document.getElementById("p2").innerText = e.target.value;
});

// task7: submit event listener that prevents default submission and logs form data to console
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Name: " + e.target.name.value + ", Age: " + e.target.age.value);
});

// task8: change event listener that displays selected option in a paragraph
document.getElementById("dropdown").addEventListener("change", (e) => {
  document.getElementById(
    "p3"
  ).innerHTML = `Selected option: ${e.target.value}`;
});

// task9: add click event listener to list and log the list item text to console using event delegation
document.getElementById("list").addEventListener("click", (e) => {
  console.log(e.target.innerText);
});

// task9: add listener to parent such that each added child also gets the listner
document.getElementById("btn2").addEventListener("click", (e) => {
  const li = document.createElement("li");
  const liText = document.createTextNode(
    `${document.getElementById("list").children.length + 1}. Item ${
      document.getElementById("list").children.length + 1
    }`
  );
  li.appendChild(liText);
  document.getElementById("list").appendChild(li);
});
