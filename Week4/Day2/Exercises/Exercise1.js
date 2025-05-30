// Given array
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// Display the colors in the specified order
colors.forEach((color, index) => {
    console.log(`${index + 1}# choice is ${color}.`);
});

// Check if "Violet" is in the array
if (colors.includes("Violet")) {
    console.log("Yeah");
} else {
    console.log("No...");
}