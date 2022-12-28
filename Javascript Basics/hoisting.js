// Hoisting : moves the function, variable and class value to 
// the top of their scope
console.log(x);
var x;
console.log(x);
var x = 7;
console.log(x);


// func declarations
// this works even if we call the function even before declaring it
y()
function y() {
    console.log("hi");
}


// func expressions
// cannot call func exp. before declaring them
var z = function () {
    console.log("hey");
}
z()


// var: can reinitilized and redeclared
// var is in global memory space(scope)
console.log(a);
var a = 10;
console.log(a);
a = 20;
console.log(a);
var a = 30;
console.log(a);

// let: can re-initialize but not re-declare
// let is in another memory space(scope)
// in script memory space you cannot access a variable until it's initialized a value

// Temporal Dead Zone(TDZ): the period between a let and const variable
// being hoisted till it's initialized
// console.log(b); // hoisting
let b = 20; // initialization
console.log(b);
b = 30;
console.log(b);
// let b = 40;
// console.log(b);

//const: cannot re-initialize and re-declare too
// console.log(PI);
const PI = 3.14;
console.log(PI);
// PI = 3.15;
// console.log(PI);
// const PI = 3.16;
// console.log(PI);

// window: global object which is created when your execution starts