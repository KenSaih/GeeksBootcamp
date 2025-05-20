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