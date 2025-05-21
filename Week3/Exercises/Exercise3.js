const prompt = require('prompt-sync')();

let user = prompt("Please enter a number: ");
console.log("Type of user input:", typeof user); // Always string

let number = parseInt(user);

while (number < 10) {
    console.log("Number is less than 10, please enter a new number.");
    user = prompt("Please enter a number: ");
    console.log("Type of user input:", typeof user); // Always string
    number = parseInt(user);
}

console.log("Thank you! The number you entered is:", number);