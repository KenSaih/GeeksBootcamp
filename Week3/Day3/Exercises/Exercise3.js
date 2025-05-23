function changeEnough(itemPrice, amountOfChange) {
    // Coin values: quarters, dimes, nickels, pennies
    let coinsValues = [0.25, 0.10, 0.05, 0.01];
    let totalChange = 0;
    for (let i = 0; i < coinsValues.length; i++) {
        totalChange += coinsValues[i] * amountOfChange[i];
    }
    return totalChange >= itemPrice;
}

console.log(changeEnough(4.25, [0, 0, 0, 0])); 
console.log(changeEnough(14.11, [2, 100, 0, 0])); 
console.log(changeEnough(0.75, [0, 0, 20, 5])); 