


function makeJuice(size) {
    ingrediats = [];
    function addIngredients(Ingredient1, Ingredient2, Ingredient3) {
        const sentence = `The client wants a ${size} juice, containing ${Ingredient1}, ${Ingredient2}, ${Ingredient3}.`;
        document.body.innerHTML += `<p>${sentence}</p>`;
    }
    addIngredients("apple", "banana", "orange");    
}

console.log (makeJuice("large")); 

//part2

function makeJuice(size) {
    let ingredients = [];

    function addIngredients(Ingredient1, Ingredient2, Ingredient3) {
        ingredients.push(Ingredient1, Ingredient2, Ingredient3);
    }

    function displayJuice() {
        const sentence = `The client wants a ${size} juice, containing ${ingredients.join(", ")}.`;
        document.body.innerHTML += `<p>${sentence}</p>`;
    }

    // Add 6 ingredients by calling addIngredients twice
    addIngredients("apple", "banana", "orange");
    addIngredients("kiwi", "pineapple", "mango");

    // Display the juice order
    displayJuice();
}

makeJuice("large");
