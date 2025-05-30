weight = ( kg, gr ) => {
         return kg * gr ;
    }
    
   console.log(weight(5, 1000)); // 5000
   
//Declaration function to add two numbers
function weight(a, b) {
  return a + b;
}
console.log(weight(2, 3)); // 5

//Expression function to add two numbers

let weight = function(a, b) {
  return a + b;
};
console.log(weight(2, 3)); // 5

// the difference between function declaration and function expression
// Function Declaration : Uses the function keyword & Is hoisted (you can call it before it’s defined).
// Function Expression : Assigned to a variable (can use const, let, or var)& Not hoisted (you must define it before calling).