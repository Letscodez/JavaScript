// Creating a new Date object representing the current date and time
let myDate = new Date();

console.log("Default Date Object:", myDate); // Logs the full date and time object
console.log("UTC String Format:", myDate.toUTCString()); // Converts the date to a string in UTC format
console.log("ISO String Format:", myDate.toISOString()); // Converts to ISO 8601 format

// Getting the current timestamp in milliseconds since January 1, 1970
console.log("Current Timestamp (ms):", Date.now()); // This is a number representing the Unix Epoch time

// Formatting the date with `toLocaleString`
console.log("Locale String (Default):", myDate.toLocaleString()); // Converts date to a localized string

// Using `toLocaleString` with options for date formatting
console.log(
  "Locale String with Options:",
  myDate.toLocaleString("default", {
    dateStyle: "full", // Options: full, long, medium, short
    timeStyle: "long", // Options: full, long, medium, short
   })
);

// Creating a new Date object from a timestamp
let myNewDate = new Date(Date.now());
console.log("New Date from Timestamp:", myNewDate);

// Attempting to format `Date.now()` directly (invalid example as `Date.now()` is a number)
// To use `toLocaleString`, we need to create a Date object from the timestamp
let timestamp = Date.now();
let formattedDate = new Date(timestamp).toLocaleString("default", {
  dateStyle: "full",
});
console.log("Formatted Date from Timestamp:", formattedDate);

// Additional Examples

// 1. Getting individual components of the date
console.log("Year:", myDate.getFullYear()); // Get the year
console.log("Month (0-based):", myDate.getMonth()); // Get the month (0-based index)
console.log("Date:", myDate.getDate()); // Get the day of the month
console.log("Day of the Week:", myDate.getDay()); // Get the day of the week (0 = Sunday)

// 2. Modifying date components
myDate.setFullYear(2025); // Set the year to 2025
console.log("Modified Year:", myDate);

myDate.setMonth(11); // Set the month to December (11 since it's 0-based)
console.log("Modified Month:", myDate);

myDate.setDate(25); // Set the date to 25th
console.log("Modified Date:", myDate);

// 3. Time operations
console.log("Hours:", myDate.getHours()); // Get the current hour
console.log("Minutes:", myDate.getMinutes()); // Get the current minute
console.log("Seconds:", myDate.getSeconds()); // Get the current second

myDate.setHours(15); // Set the hour to 3 PM
console.log("Modified Time (15:00):", myDate);

// 4. Parsing a date string
let parsedDate = new Date("2024-12-31T23:59:59Z");
console.log("Parsed Date:", parsedDate);

// 5. Comparing dates
let date1 = new Date("2024-12-01");
let date2 = new Date("2024-12-05");

console.log("Is date1 before date2?", date1 < date2); // true
console.log("Is date1 after date2?", date1 > date2); // false
console.log("Difference in days:", (date2 - date1) / (1000 * 60 * 60 * 24)); // Calculate the difference in days

// 6. Adding/Subtracting time
let futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 7); // Add 7 days
console.log("Future Date (+7 days):", futureDate);

let pastDate = new Date();
pastDate.setDate(pastDate.getDate() - 7); // Subtract 7 days
console.log("Past Date (-7 days):", pastDate);

// 7. Working with time zones
console.log("Time Zone Offset (minutes):", myDate.getTimezoneOffset()); // Offset in minutes from UTC

// 8. Formatting using `Intl.DateTimeFormat`
let formatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
});
console.log("Formatted Date with Intl:", formatter.format(myDate));

// Summary of different date outputs
console.log("toDateString:", myDate.toDateString()); // Simplified date string
console.log("toTimeString:", myDate.toTimeString()); // Simplified time string
console.log("toLocaleDateString:", myDate.toLocaleDateString()); // Locale date string
console.log("toLocaleTimeString:", myDate.toLocaleTimeString()); // Locale time string
