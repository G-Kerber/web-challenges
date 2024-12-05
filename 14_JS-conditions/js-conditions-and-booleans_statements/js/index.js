console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";
const receivedPassword = "password1234";
let check = SUPER_SECRET_PASSWORD === receivedPassword;

if (check) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 6;
let result = number % 2;

if (result === 0) {
  console.log(number + " is a even number");
} else {
  console.log(number + " is a odd number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 42;

if (numberOfHotdogs < 6) {
  console.log(
    "your price: " +
      numberOfHotdogs * 2 +
      " € for " +
      numberOfHotdogs +
      " Hotdogs"
  );
} else if (5 < numberOfHotdogs < 100) {
  console.log("your price: " + numberOfHotdogs * 1.5 + " €");
} else if (100 < numberOfHotdogs < 1000000) {
  console.log("your price: " + numberOfHotdogs * 1 + " €");
} else {
  console.log("your price: " + numberOfHotdogs * 0.1 + " €");
}

// Part 4: Daytime
const currentHour = 12;
let statement = "";
statement = currentHour >= 17 ? "Partytime!!!" : "Still need to learn...";
console.log(statement);

// Part 5: Greeting
const userName = "Archibald";
const greeting = "Hello " + (userName === "Archibald" ? userName : "Coach");
console.log(greeting);
