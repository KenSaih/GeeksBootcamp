const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// Get the first letter of each name, sort them, and join to form the society name
const societyName = names.map(name => name[0]).sort().join('');
console.log("The society name is: " + societyName); // "ABJKPS"