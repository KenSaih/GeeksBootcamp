//EX1

function displayNumbersDivisible() {
for (let i = 0; i <= 500; i++) {

 console.log(i);
}}

displayNumbersDivisible();


function displayNumbersDivisible1() {
    for (let i = 0; i <= 500; i++) {
        if (i % 23 === 0) {
            console.log(i);
        }
    }
}


displayNumbersDivisible1();



function displayNumbersDivisible2() {
     sum =0;
    for (let i = 0; i <= 500; i++) {
        if (i % 23 === 0 ) {
            console.log(i);
            sum += i;
        }
        
        console.log("The sum is:", sum);

    }
}

displayNumbersDivisible2(); 

//EX2

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
}

shoppingList = ["“banana”", "“orange”","“apple”"];

function myBill(){

    let total = 0;
    for (let i = 0; i < shoppingList.length; i++){
        let item = shoppingList[i].replace(/"/g, "").trim();
        if (stock[item] > 0){
            total += prices[item];
            stock[item] -= 1;
            console.log("Total price is: " + total);
        }
    }
    return total;
}
console.log(myBill());


    
//EX3

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

//EX4

//Vacations Costs

function hotelCost(nights) {
    let nights = prompt("how many nignhts do you want book?");
    let costs = 140;
    let totalCosts = nights * costs;
    return totalCosts;
}


function planeRideCost(destination) {
    if (destination.toLowerCase() === "london") return 183; 
    if (destination.toLowerCase() === "paris") return 220;
    return 300;
}

function rentalCarCost(days) {
    let cost = days * 40;
    if (days > 10) cost *= 0.95; // 5% discount
    return cost;
}

function totalVacationCost() {
    let nights = NaN;
    let days = NaN;
    let destination = "";
    
    while (isNaN(nights)) {
        nights = Number(prompt("How many nights in the hotel?")); 
    }
    
    while (!destination || typeof destination !== "string") {
        destination = prompt("What's your destination?"); 
    }
    
    while (isNaN(days)) {
        days = Number(prompt("How many days for car rental?")); 
    }
    
    const hotel = hotelCost(nights);
    const plane = planeRideCost(destination);
    const car = rentalCarCost(days);
    
    return `The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}. 
    Total: $${hotel + plane + car}`;
}

console.log(totalVacationCost()); 

//EX5

const container = document.getElementById("container");
console.log(container);

const lists = document.getElementsByClassName("list");

lists[0].children[1].textContent = "Richard";

lists[1].children[1].remove();
for (let list of lists) {
    list.firstElementChild.textContent = "Kenza";
}

for (let list of lists) {
    list.classList.add("student_list");
}
lists[0].classList.add("university", "attendance");

container.style.backgroundColor = "lightblue";
container.style.padding = "10px";

lists[1].lastElementChild.style.display = "none";

lists[0].children[1].style.border = "1px solid black";

document.body.style.fontSize = "16px";
    if (container.style.backgroundColor === "lightblue") {
    alert("Hello YourName and Richard");
}

//EX6

const nav = document.getElementById("navBar");
nav.setAttribute("id", "socialNetworkNavigation"); 

const newLi = document.createElement("li");
const logoutText = document.createTextNode("Logout");
newLi.appendChild(logoutText);
nav.firstElementChild.appendChild(newLi);

const firstLi = nav.firstElementChild.firstElementChild;
const lastLi = nav.firstElementChild.lastElementChild;
console.log(firstLi.textContent);
console.log(lastLi.textContent);

//EX7

const allBooks = [
    {
        title: "Harry Potter",
        author: "JK Rowling",
        image: "harrypotter.jpg",
        alreadyRead: true
    },
    {
        title: "Lord of the Rings",
        author: "JRR Tolkien",
        image: "lotr.jpg",
        alreadyRead: false
    }
];

const section = document.querySelector(".listBooks"); //select the section with class 

allBooks.forEach(book => {
    const div = document.createElement("div");//create div 
    const text = document.createTextNode(`${book.title} written by ${book.author}`); //text node
    const img = document.createElement("img"); //create img
    
    img.src = book.image; 
    img.style.width = "100px";
    
    if (book.alreadyRead) {
        div.style.color = "red";
    }
    
    div.appendChild(text);
    div.appendChild(img);
    section.appendChild(div);
});
