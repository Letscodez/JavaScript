const accountId = 12345; // Preferred
let email = "letscodez17@gmail.com"; // Preferred
var password = "123456"; // Deprecated but works
accountCity = "Delhi"; // Deprecated but works
let address; // Undefined

// accountId = 54321; // Error: Assignment to constant variable.
email = "letscodez@github.com"; // No Error
password = "654321"; // No Error, but Deprecated
accountCity = "Bangalore"; // No Error but not recommended

console.log(accountId, email, password, accountCity, address); 
console.table({accountId, email, password, accountCity, address});