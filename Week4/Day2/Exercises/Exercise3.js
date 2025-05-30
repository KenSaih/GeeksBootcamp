// Code 1
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
 // Code 2
const country = "USA";
console.log([...country]);
 
// Bonus Code
let newArray = [...[,,]];
console.log(newArray);
 