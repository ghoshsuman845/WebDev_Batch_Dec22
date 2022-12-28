// Function Declaration
function x() {
    console.log('Hello World');
}
// Call a function: Function invocation
x()

// Function with parameters and arguments:
// Parameters are the values which provide to a function on declaration
// Args are the values that we provide to a function on invocation
var from = "Suman";
function showMessage(name, text = "hey") {
    console.log(name + " " + text);
}
showMessage(from)

// Return values from a function
function sum(a, b) {
    return (a + b)
}
var result = sum(1, 2);
console.log(result);


// Function Expression
var showMessage = function(){
  console.log("hi")
}
console.log(showMessage);
showMessage()

// func declaration
function sayHi() {
    console.log("saying hi");
}
console.log(sayHi);

// func expression
var func = sayHi; // copy
func()
sayHi()



