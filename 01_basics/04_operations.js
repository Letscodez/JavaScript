let value = 3;
let negValue = -value;
console.log(value);
console.log(negValue);

console.log(2 + 2); // 2 + 2 = 4
console.log(2 - 2); // 2 - 2 = 0
console.log(2 * 2); // 2 * 2 = 4
console.log(2 / 2); // 2 / 2 = 1
console.log(2 % 2); // 2 % 2 = 0 // % is the remainder operator
console.log(2 ** 2); // 2 ** 2 = 4 // 2^2

let str1 = "Hello";
let str2 = "World";
let str3 = str1 + " " + str2;
console.log(str3); // Hello World

console.log("1" + 2); // 12

console.log(1 + 2 + "3"); // 33
console.log("3" + 2 + 1); // 321
//? Why is the output different in the above two cases?
//? The + operator is used for both addition and concatenation. When the first operand is a string, the second operand is converted to a string and concatenated.

console.log(3 + 4 * 5 % 3);
//? Operator precedence
//? 4 * 5 = 20
//? 20 % 3 = 2
//? 3 + 2 = 5

console.log(true + 10); // 11

let gameScore = 0;
gameScore++; // gameScore = gameScore + 1;
console.log(gameScore); 

gameScore--; // gameScore = gameScore - 1;
console.log(gameScore);

let increment = 2;

++increment; // gameScore = gameScore + 1; This is pre-increment
increment++; // gameScore = gameScore + 1; This is post-increment

console.log(increment); 