const users = { user1: 18273, user2: 92833, user3: 90315 };

let userArray = Object.entries(users);  // Transforme l'objet en tableau
console.log(userArray);  // [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]

// Multiplier les IDs par 2
let updatedUserArray = userArray.map(([user, id]) => [user, id * 2]);
console.log(updatedUserArray);  // [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]