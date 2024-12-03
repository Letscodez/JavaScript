// Primitive Data Types:
// These are the most basic data types available in JavaScript.
// They are stored directly in the location the variable accesses.

console.log("Primitive Data Types:");

console.log(`
1. Number: Any numerical value (e.g., integers, floats).
2. String: Sequence of characters enclosed in quotes.
3. Boolean: Logical true or false.
4. Undefined: A variable that has been declared but not initialized.
5. Null: An intentional absence of any value.
6. Symbol: A unique and immutable value, primarily used as object keys.
7. BigInt: A large integer type for representing values greater than 2^53-1.
`);

// Non-primitive (Reference) Data Types:
// These are not defined by JavaScript itself but are created by the programmer.
// They are accessed by reference, meaning the variable holds a reference to the value in memory.

console.log("\nNon-primitive (Reference) Data Types:");
/*
1. Array: A collection of ordered elements.
2. Object: A collection of key-value pairs.
3. Function: A block of reusable code.
*/

// JavaScript: Loosely Typed or Statically Typed? 🤔
// JavaScript is a loosely typed or dynamic language.
// In a loosely typed language, variables can hold values of any data type, and the type can change dynamically.

console.log("\nDynamic Typing in JavaScript:");

// Example:
let x = 10; // x is a number
console.log(`x is initially a number: ${x}`);

x = "Hello"; // x is now a string
console.log(`x is now a string: ${x}`);

x = true; // x is now a boolean
console.log(`x is now a boolean: ${x}`);

const score = 100;
const extendedScore = 100.3;
const isPassed = true;
const name = "John Doe";
let userEmail;
let userAddress = null;
const uniqueId = Symbol();
const bigNumber = 1234567890123456789012345678901234567890n; // n is used to denote BigInt and it is important to use it to avoid any confusion.

const array = ["Shaktimaan", "Naagraaj", "Doga"]; // Array

const object = {
  name: "Pookiee Baba",
  age: "It's just a numbar",
  email: "jai_baba_di@baba.kom",
};

function tillu_naache() {
  console.log("te ne ne nenne nenennenen dhoooommmm machaleeee");
}

console.log(typeof tillu_naache);
