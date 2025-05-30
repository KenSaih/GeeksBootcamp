
//  arrays
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

// Display the colors with the correct ordinal suffix
colors.forEach((color, index) => {
    let suffix = (index + 1) <= 3 ? ordinal[index] : ordinal[0];
    console.log(`${index + 1}${suffix} choice is ${color}.`);
});