// EX1

//  Part I - Review about arrays
 
 const people = ["Greg", "Mary", "Devon", "James"];

delete people[0]; // Remove "Greg"
console.log(people)

people[3] = "jason";
console.log(people) // ["Mary", "Devon", "James", "jason"]

people.push("kanza");
console.log(people) // ["Mary", "Devon", "James", "jason", "kanza"]

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
console.log(people.indexOf("Mary")) // 1

console.log(people.slice(1, 4)) // ["Devon", "James", "jason"]
console.log(people) // ["Mary", "Devon", "James", "jason", "kanza"];

// Write code that gives the index of "foo". Why does it return -1?
console.log(people.indexOf("foo")) // -1

let last = people.length - 1;
console.log(people[last]) // "kanza"

// Part II - Loops
// Using a loop, iterate through the people array and console.log each person.
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}
// Using a loop, iterate through the people array and exit the loop after you console.log "Jason"
for (let i = 0; i < people.length; i++) {
    if (people[i] === "jason") {
        break;
    }
    console.log(people[i]);
}

// EX2

// Your favorite colors

colors = ['red', 'blue', 'black', 'pink', 'brown'];

for(i=0; i< colors.length; i++){
    console.log("My #1 is ",colors[i]);
}

switch (colors[i]) {
    case 'red':
        console.log("My 1st is red");
        break;
    case 'blue':
        console.log("My 2nd is blue");
        break;
case 'black':
        console.log("My 3nd is black");
        break;
        case 'pink':
        console.log("My 4nd is pink");
        break;
    case 'brown':
        console.log("My 5nd is brown");
        break;
    default:
        break;
}

//Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
//Hint : create an array of suffixes to do the Bonus

 const suffixes = ["st", "nd", "rd", "th", "th"];
 for (let i = 0; i < colors.length; i++) {            
     console.log("My " + (i + 1) + suffixes[i] + " choice is " + colors[i]);
 } 


// EX3

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

// EX4

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}


console.log(building.numberOfFloors); // 4

sum = building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor ;
console.log(sum); // 12

console.log(building.nameOfTenants[1], building.numberOfRoomsAndRent.dan[0]); // Dan 4



// Calculate the sum of Sarah's and David's rent
let sarahRent = building.numberOfRoomsAndRent.sarah[1];
let davidRent = building.numberOfRoomsAndRent.david[1];
let danRent = building.numberOfRoomsAndRent.dan[1];

let sumRent = sarahRent + davidRent;

if (sumRent > danRent) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
    console.log("Sarah and David pay more rent than Dan. Dan's rent is now increased to:", building.numberOfRoomsAndRent.dan[1]);
} else if (sumRent < danRent) {
    console.log("Sarah and David pay less rent than Dan");
} else {
    console.log("Sarah and David pay the same rent as Dan");
}




// EX5

const family = {
    FatherName: 'Hamza',
    MotherName: 'Sarah',
    child : 'ahmed'
};


console.log("Keys:");
for (let key in family) {
        console.log(key);
    }

console.log("Values:");
for (let key in family) {
        console.log(family[key]);
    }

console.log("Keys and Values:");
for (let key in family) {
        console.log(key + ": " + family[key]);
    }

// EX6

const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}


let sentence = "";
for (let key in details) {
  sentence += key + " " + details[key] + " ";
}
console.log(sentence); // "my name is Rudolf the reindeer"

// EX7

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// Get the first letter of each name, sort them, and join to form the society name
const societyName = names.map(name => name[0]).sort().join('');
console.log("The society name is: " + societyName); // "ABJKPS"