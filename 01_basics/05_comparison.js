// Comparison Operators Examples
console.log(2 > 1); // true: 2 is greater than 1
console.log(2 >= 1); // true: 2 is greater than or equal to 1
console.log(2 < 3); // true: 2 is less than 3
console.log(2 <= 3); // true: 2 is less than or equal to 3
console.log(2 === 2); // true: strict equality, both value and type are the same
console.log(2 !== 3); // true: strict inequality, values are not equal
console.log(2 == "2"); // true: loose equality, checks value only

// Edge Cases with null and undefined
console.log(null > 0); // false: null is not greater than 0
console.log(null == 0); // false: null is loosely not equal to 0
console.log(null >= 0); // true: null is coerced to 0, and 0 >= 0

console.log(undefined == null); // true: loose equality between undefined and null
console.log(undefined === null); // false: strict equality checks value and type

// Strict vs Loose Equality
console.log(2 === "2"); // false: strict equality checks both value and type
