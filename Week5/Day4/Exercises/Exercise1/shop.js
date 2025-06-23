const products = require("./products");

function findProductByName(name) {
  const product = products.find((p) => p.name.toLowerCase() === name.toLowerCase());
  if (product) {
    console.log("Product found:", product);
  } else {
    console.log(`Product "${name}" not found.`);
  }
}

// Test
findProductByName("Laptop");
findProductByName("Book");
findProductByName("Phone"); // Non existant