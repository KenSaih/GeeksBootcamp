 const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// Using reduce() 
const epicString = epic.reduce((accumulator, currentValue) => accumulator + " " + currentValue);
console.log(epicString);