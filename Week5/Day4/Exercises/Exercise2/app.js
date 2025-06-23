import { people } from './data.js';

function calculateAverageAge(persons) {
  const totalAge = persons.reduce((sum, person) => sum + person.age, 0);
  const average = totalAge / persons.length;
  return average.toFixed(2);
}

console.log(`Average age: ${calculateAverageAge(people)} years`);