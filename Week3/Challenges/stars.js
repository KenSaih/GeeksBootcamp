
  console.log("*");
  console.log("**");
  console.log("***");
  console.log("****");
  console.log("*****");
  console.log("******");

  console.log("-----");


// Solution 1: Using one loop
for (let i = 1; i <= 6; i++) {
  console.log("*".repeat(i));
}

console.log("-----");

// Solution 2: Using two nested for loops
for (let i = 1; i <= 6; i++) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars += "*";
  }
  console.log(stars);
}
