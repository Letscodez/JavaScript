// Strings
const name = "John";
const githubRepo = 50;
console.log(name + " has " + githubRepo + " repos on GitHub"); // This is not a good way to concatenate strings!

// Template literals
console.log(`${name} has ${githubRepo} repos on GitHub`);

const anotherWay = new String("jay-baba-tillu-ki "); // This is not recommended
console.log(anotherWay[0]);
console.log(anotherWay.__proto__);
console.log(anotherWay.length);
console.log(anotherWay.toUpperCase());
console.log(anotherWay.charAt(3));
console.log(anotherWay.indexOf("k"));

// String methods
console.log(anotherWay.substring(5, 7)); // start, end
console.log(anotherWay.slice(-5, 15)); // start, end but can take negative values

console.log(anotherWay.trim()); // Removes white spaces from both ends
console.log(anotherWay.replace("jay", "hoye")); // Replaces the first argument with the second argument

console.log(anotherWay.split("-")); // Splits the string into an array based on the argument passed