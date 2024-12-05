// Creating Arrays
let array = [0, 1, 2, 3, 4, 5, 6];
const heroes = ["Shaktimaan", "Naagraaj", "Doga"]; // Array of strings
const food = new Array("jay", "baba", "ji", "ki"); // Using `new Array` syntax

// Printing arrays
console.log("Initial Array:", array);
console.log("Heroes Array:", heroes);
console.log("Food Array:", food);

// Array Methods
// Adding elements to the end of an array
array.push(7); // Adds 7 at the end
console.log("After push(7):", array);

// Removing the last element
array.pop(); // Removes the last element (7)
console.log("After pop():", array);

// Adding elements to the beginning of an array
array.unshift(9); // Adds 9 to the start
console.log("After unshift(9):", array);

// Removing the first element
array.shift(); // Removes the first element (9)
console.log("After shift():", array);

// Checking if an element exists in the array
console.log("Does the array include 4?", array.includes(4)); // true
console.log("Does the array include 40?", array.includes(40)); // false

// Finding the index of an element
console.log("Index of 4:", array.indexOf(4)); // 4
console.log("Index of 40:", array.indexOf(40)); // -1 (not found)

// Using `slice` - Extracting a portion of the array without modifying the original
let slicedArray = array.slice(2, 5); // Extract elements from index 2 to 4 (end index not included)
console.log("Sliced Array (index 2 to 5):", slicedArray);
console.log("Original Array after slice:", array); // Unchanged

// Using `splice` - Removing or replacing elements (modifies the original array)
// Removing elements
let splicedArray = array.splice(2, 2); // Remove 2 elements starting from index 2
console.log("Spliced Array (Removed Elements):", splicedArray);
console.log("Original Array after splice (removal):", array);

// Adding elements using splice
array.splice(2, 0, 99, 100); // Add 99 and 100 at index 2
console.log("Original Array after splice (addition):", array);

// Replacing elements using splice
array.splice(2, 2, 42, 43); // Replace 2 elements starting from index 2 with 42 and 43
console.log("Original Array after splice (replacement):", array);

// Additional Array Methods

// 1. Joining elements into a string
let joinedString = heroes.join(", ");
console.log("Joined Heroes String:", joinedString);

// 2. Splitting a string into an array
let splitArray = "Hello World".split(" ");
console.log("Split String into Array:", splitArray);

// 3. Reversing an array
let reversedArray = [...array].reverse(); // Use spread operator to avoid modifying the original
console.log("Reversed Array:", reversedArray);

// 4. Sorting an array
let unsortedArray = [3, 1, 4, 2, 5];
let sortedArray = [...unsortedArray].sort((a, b) => a - b); // Numeric sort
console.log("Unsorted Array:", unsortedArray);
console.log("Sorted Array (Ascending):", sortedArray);

// 5. Mapping over an array
let mappedArray = array.map((num) => num * 2);
console.log("Mapped Array (Elements Doubled):", mappedArray);

// 6. Filtering an array
let filteredArray = array.filter((num) => num > 3);
console.log("Filtered Array (Elements > 3):", filteredArray);

// 7. Reducing an array to a single value
let sum = array.reduce((acc, num) => acc + num, 0);
console.log("Sum of Array Elements:", sum);

// 8. Iterating with `forEach`
console.log("Iterating with forEach:");
array.forEach((num, index) => console.log(`Index ${index}: ${num}`));

// Array Summary
console.log("Final State of Original Array:", array);
