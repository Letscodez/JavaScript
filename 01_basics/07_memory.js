// Stack & Heap Memory 
// Stack Memory => Primitive Data Types
// Heap Memory => Reference(Non-Primitive) Data Types

let x = 10; 
let y = x; // This will instead send a copy of the value of x to y
y = 1 // And this will change the value of y only not x
console.log(x, y); 

let a = { value: 10 };
let b = a; // This will send the reference of a to b
b.value = 1; // And this will change the value of a also
console.log(a.value, b.value); 