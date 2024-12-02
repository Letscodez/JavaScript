// Example demonstrating type conversions and their effects in JavaScript

// Initial string representation of a numeric score
let stringScore = "33";
console.log("Type of stringScore:", typeof stringScore); // Output: string

// Convert stringScore to a number using Number()
let numericScore = Number(stringScore);
console.log("Type of numericScore:", typeof numericScore); // Output: number
console.log("Value of numericScore:", numericScore); // Output: 33

// Null conversion
let nullValue = null;
console.log(
  "Type after converting nullValue to a number:",
  typeof Number(nullValue)
); // Output: number
console.log("Converted value of nullValue:", Number(nullValue)); // Output: 0

// Invalid string conversion
let invalidString = "A";
console.log(
  "Type after converting invalidString to a number:",
  typeof Number(invalidString)
); // Output: number
console.log("Converted value of invalidString:", Number(invalidString)); // Output: NaN

// Boolean true conversion
let booleanTrue = true;
console.log(
  "Type after converting booleanTrue to a number:",
  typeof Number(booleanTrue)
); // Output: number
console.log("Converted value of booleanTrue:", Number(booleanTrue)); // Output: 1

// Boolean false conversion
let booleanFalse = false;
console.log(
  "Type after converting booleanFalse to a number:",
  typeof Number(booleanFalse)
); // Output: number
console.log("Converted value of booleanFalse:", Number(booleanFalse)); // Output: 0

// Commentary:
// - "33" (string) -> 33 (number)
// - null -> 0 (number)
// - "A" (string) -> NaN (not a number)
// - true -> 1 (number)
// - false -> 0 (number)

// Boolean conversions for truthiness
let userLoginStatus = 1;
console.log(
  "Type of Boolean(userLoginStatus):",
  typeof Boolean(userLoginStatus)
); // Output: boolean
console.log("Value of Boolean(userLoginStatus):", Boolean(userLoginStatus)); // Output: true

userLoginStatus = ""; // Empty string
console.log(
  "Type of Boolean(userLoginStatus):",
  typeof Boolean(userLoginStatus)
); // Output: boolean
console.log("Value of Boolean(userLoginStatus):", Boolean(userLoginStatus)); // Output: false

userLoginStatus = "Logged in"; // Non-empty string
console.log(
  "Type of Boolean(userLoginStatus):",
  typeof Boolean(userLoginStatus)
); // Output: boolean
console.log("Value of Boolean(userLoginStatus):", Boolean(userLoginStatus)); // Output: true

// Additional examples:
// Converting undefined to a number
let undefinedValue;
console.log("Type of Number(undefined):", typeof Number(undefinedValue)); // Output: number
console.log("Converted value of undefined:", Number(undefinedValue)); // Output: NaN

// Boolean conversions:
// - 0 -> false
// - 1 -> true
// - "" (empty string) -> false
// - "Some text" (non-empty string) -> true

// Summary of type conversions:
// String "33" -> Number 33
// String "A" -> NaN
// null -> 0
// undefined -> NaN
// true -> 1
// false -> 0
// Numeric 0 -> Boolean false
// Numeric 1 -> Boolean true
// Empty string "" -> Boolean false
// Non-empty string -> Boolean true
