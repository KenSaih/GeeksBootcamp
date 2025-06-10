//Comparaison Operators
function compareToTen(num) {
    return new Promise((resolve, reject) => {
        if (num <= 10) {
            resolve("The number is less than or equal to 10");
        } else {
            reject("The number is greater than 10");
        }
    });
}
// Example usage
compareToTen(15)
    .then(result => console.log(result)) // "The number is greater than 10"
    .catch(error => console.error(error));