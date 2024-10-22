function message() {
  console.log("Hello, Node.js!");
}
function inblur(evt) {
  if (evt.target.value === "") {
    return;
  }
  console.log("Hello, blur!");
}
const btn = document.getElementById("btn");
const username = document.getElementById("username");

btn.addEventListener("click", message);
