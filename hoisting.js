// using test before declaring
console.log(test);   // undefined
var test;

// program to display value
a = 5;
console.log(a);
var a; // 5

// in JavaScript, initializations are not hoisted
console.log(b);
var b = 5; // undefined

// hoisting if variable inside function
var c = 4;

function greet() {
    d = 'hello';
    console.log(d); // hello
    var d;
}

greet(); // hello
console.log(d); // ReferenceError: d is not defined

// hoisting of let variable
x = 5;
console.log(x);
let x; // error Uncaught ReferenceError: Cannot access 'x' before initialization

// Function hoisting
greet();

function greet() {
    console.log('Hi, there.'); 
} 
// output - Hi, there

// hoisting when funct is used as expression
greet();

let greet = function() {
    console.log('Hi, there.');
}
//Output 
// Uncaught ReferenceError: greet is not defined
// If var was used in the above program, the error would be:
// Uncaught TypeError: greet is not a function