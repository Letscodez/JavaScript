// 1. Array Creation
const bahubali = ["Bahubali", "Sivagami", "Bhallaldev"];
const kalki = ["Bhairava", "Sum-80", "Bujji"];
console.log("Bahubali Heroes:", bahubali);
console.log("Kalki Heroes:", kalki);

// 2. Adding and Removing Elements
bahubali.push("Devsena"); // Adds to the end
kalki.unshift("yaskin"); // Adds to the start
console.log("Bahubali after push:", bahubali);
console.log("Kalki after unshift:", kalki);

bahubali.pop(); // Removes the last element
kalki.shift(); // Removes the first element
console.log("Bahubali after pop:", bahubali);
console.log("Kalki after shift:", kalki);

// 3. Concatenation and Spread Operator
const cinematicUniverse = bahubali.concat(kalki); // Using concat
const spreadUniverse = [...bahubali, ...kalki]; // Using spread operator
console.log("Cinematic Universe (concat):", cinematicUniverse);
console.log("Cinematic Universe (spread):", spreadUniverse);

// 4. Flattening Nested Arrays
const nestedArray = ["Mahishmati", ["Baahubali Cast", ["Bhairava", "Sum-80"]]];
console.log("Nested Array:", nestedArray);

const flattenedArray = nestedArray.flat(Infinity); // Flatten all levels
console.log("Flattened Array:", flattenedArray);

// 5. Array Slicing and Splicing
const heroes = [...bahubali, ...kalki]; // Combined heroes array
const slicedHeroes = heroes.slice(1, 4); // Extract from index 1 to 3
console.log("Sliced Heroes (index 1 to 4):", slicedHeroes);

const splicedHeroes = [...heroes]; // Copy for splicing
splicedHeroes.splice(2, 2, "Avantika", "Kattappa"); // Replace two heroes
console.log("Spliced Heroes (after replacement):", splicedHeroes);

// 6. Iteration
heroes.forEach((hero, index) => {
  console.log(`Hero ${index + 1}: ${hero}`);
});

// 7. Advanced Operations
// Filtering heroes with names starting with 'B'
const filteredHeroes = heroes.filter((hero) => hero.startsWith("B"));
console.log("Filtered Heroes (start with B):", filteredHeroes);

// Mapping to add 'the Great' to each hero
const greatHeroes = heroes.map((hero) => `${hero} the Great`);
console.log("Mapped Heroes (with 'the Great'):", greatHeroes);

// Reducing to a single string
const heroList = heroes.reduce((acc, hero) => `${acc}, ${hero}`);
console.log("Reduced Hero List:", heroList);

// 8. Sorting and Reversing
const sortedHeroes = [...heroes].sort(); // Sort alphabetically
console.log("Sorted Heroes:", sortedHeroes);

const reversedHeroes = [...heroes].reverse(); // Reverse the order
console.log("Reversed Heroes:", reversedHeroes);

// Final Output
console.log("Original Bahubali Heroes:", bahubali);
console.log("Original Kalki Heroes:", kalki);
console.log("Final Cinematic Universe:", heroes);
