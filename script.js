export function message() {
  console.log("Hello, Node.js!");
}
export function inblur(evt) {
  if (evt.target.value === "") {
    return;
  }
  console.log("Hello, blur!");
}
