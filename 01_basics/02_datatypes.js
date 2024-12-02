"use strict"; // This is new in ES5 this is used to make sure that the code is written in a strict way. It helps in debugging and preventing errors.

// alert("Hello World"); // This is used to show a message to the user. It is a blocking function. It will stop the execution of the code until the user clicks on the OK button.

console.log("Hello World"); // This is used to print the message to the console. It is a non-blocking function. It will not stop the execution of the code.

// console.log("Hi") console.log("Hello") // This is used to print multiple messages in the same line. It is not recommended to use this. It is better to use semicolon to separate the statements.

console.log("Hi"); console.log("Hello"); // This is used to print multiple messages in the same line. It is recommended to use this. It is better to use semicolon to separate the statements.

let name = "John"; // This is used to declare a variable. The variable name is used to store the value "John". The value can be changed later.
let age = 25; // This is used to declare a variable. The variable age is used to store the value 25. The value can be changed later.
let isMarried = false; // This is used to declare a variable. The variable isMarried is used to store the value false. The value can be changed later.

console.log(typeof name); // This is used to print the type of the variable. It will print string.
console.log(typeof age); // This is used to print the type of the variable. It will print number.
console.log(typeof isMarried); // This is used to print the type of the variable. It will print boolean.

console.log(typeof null); // This is used to print the type of the variable. It will print object. This is a bug in JavaScript. The type of null is actually null.

console.log(typeof undefined); // This is used to print the type of the variable. It will print undefined.