
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
Promise.resolve(3)
    .then(value => console.log("Resolved value:", value))
    .catch(error => console.error("Error:", error));

// Use Promise.reject(error) to create a promise that will reject itself with the string "Boo!"
Promise.reject("Boo!")
    .then(value => console.log("This will not run"))
    .catch(error => console.error("Caught error:", error));

    