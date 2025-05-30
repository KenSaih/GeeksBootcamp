const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number);  // 4
console.log(object3.number);  // 4
console.log(object4.number);  // 5
/*Explication: 
- `object2` et `object3` pointent vers le même objet que `object1`, donc lorsque `object1.number` est modifié, cela affecte `object2` et `object3`.
- `object4` est un objet distinct, donc sa valeur reste inchangée.
*/
// Classe Animal
class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

// Classe Mammal qui étend Animal
class Mammal extends Animal {
  constructor(name, type, color) {
    super(name, type, color);  // Appel du constructeur parent
  }

  sound(sound) {
    return `${sound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
  }
}

// Instance de la classe Mammal
const farmerCow = new Mammal('Lily', 'cow', 'brown and white');
console.log(farmerCow.sound('Moooo'));  // "Moooo I'm a cow, named Lily and I'm brown and white"
 