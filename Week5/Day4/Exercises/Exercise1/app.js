import { people } from './data.mjs';

function getAverageAge(personArray) {
  const totalAge = personArray.reduce((sum, person) => sum + person.age, 0);
  return totalAge / personArray.length;
}

const averageAge = getAverageAge(people);
console.log(`Average age: ${averageAge.toFixed(2)}`);