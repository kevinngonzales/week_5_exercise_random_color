// Start with an HTML file and a linked JS file 
// Create a button element and add it to the HTML page using JS DOM methods
// Connect an event listener to the button using addEventListener
// In the click handler function change the background color of the HTML page to a random color 
// You could make an array of color values and use Math.random to pick a random one 
// Or research another solution 

let button = document.createElement("button");
document.body.appendChild(button);
button.innerText = "Random Color";

let html = document.getElementById("html"); 

button.addEventListener("click", randomColor);

function randomColor() {
  var backgroundColor = Math.random();
  if (backgroundColor < 0.25) {
      backgroundColor = "blue";
  } else if (backgroundColor < 0.50) {
      backgroundColor = "orange";
  } else if (backgroundColor < 0.75) {
      backgroundColor = "purple";
  } else {
      backgroundColor = "pink";
  }
  html.style.backgroundColor = backgroundColor;
}




