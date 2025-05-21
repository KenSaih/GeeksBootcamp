const family = {
    FatherName: 'Hamza',
    MotherName: 'Sarah',
    child : 'ahmed'
};


console.log("Keys:");
for (let key in family) {
        console.log(key);
    }

console.log("Values:");
for (let key in family) {
        console.log(family[key]);
    }

console.log("Keys and Values:");
for (let key in family) {
        console.log(key + ": " + family[key]);
    }