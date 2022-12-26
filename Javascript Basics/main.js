// Declaring a variable in JS
// Syntax: var(keyword) variable_name


// var: reinitialize and redeclare
var fname;
fname = "suman";
fname = "aman";

var fname = 10;
console.log(fname);
var fname = 'Suman';
var age = 21;
var place = 'Delhi';

// local and global variables
var b = 20; // global variable : accessible from anywhere in the code
{
    var a = 10; // local variable: accessible only inside a clock or a function
}


// NUmber Datta Type
var val = 1 / 0; // Infinity
console.log("datatype of 1 / 0:", typeof val);
var val2 = "number" *  3; // NaN
console.log("datatype of 'number' *  3: ", typeof val2);
console.log("datatype of 2: ", typeof 2);
console.log("datatype of 2.4: ", typeof 2.4);

// BigInt Data Type : greater that 2^53-1 and lesser than -(2^53-1)


// String data type

var last_name = "Ghosh";
var lName = 'Ghosh';
var lname = `Ghosh`;
var first_name = "Suman"

// String interpolation
console.log(first_name + " " + last_name);
console.log(`${first_name} ${last_name}`);

// Boolean data type
var age = 18 > 12;
console.log(age);
var age1 = 17 >  20;
console.log(age1);

// Null values
var empty_container = null;
console.log(typeof empty_container);

empty_container = 12;
console.log(empty_container);


// Undefined value: a variable to which no value is assigned

var suman;
console.log(typeof suman);

//Alert
alert("Hello")

//Prompt
// prompt(title, [default])
var age = prompt("Enter the age")
var result = age > 18;
console.log(age);

//confirm
var isTestGiven = confirm("Did you complete the test")
console.log(isTestGiven);

var name = prompt("Enter the name")
alert("name is: " + name)