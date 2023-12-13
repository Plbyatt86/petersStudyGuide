// Let's go over the different ways to write function

// Standard Function Declaration
// write definition name and function declaration
function myFunction() {
  console.log("hello world");
}
myFunction(); // argument actual value

// Anonymous Functions
(function () {
  console.log("Hello World from the anonymous");
})()
// Assignment
let assignment = function () {
  console.log("Hello World from the anonymous assignment");
}
assignment();

// Arrow Syntax
(() => { console.log("Hello from the  arrow syntax") })()
let arrowFunction = () =>  console.log("Hello from the  arrow syntax")

// -----------------
function myFunction(parameter, students) { // parameter placeholder
  console.log("hello world " + parameter);
}

