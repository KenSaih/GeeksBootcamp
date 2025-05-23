const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}


console.log(building.numberOfFloors); // 4

sum = building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor ;
console.log(sum); // 12

console.log(building.nameOfTenants[1], building.numberOfRoomsAndRent.dan[0]); // Dan 4



// Calculate the sum of Sarah's and David's rent
let sarahRent = building.numberOfRoomsAndRent.sarah[1];
let davidRent = building.numberOfRoomsAndRent.david[1];
let danRent = building.numberOfRoomsAndRent.dan[1];

let sumRent = sarahRent + davidRent;

if (sumRent > danRent) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
    console.log("Sarah and David pay more rent than Dan. Dan's rent is now increased to:", building.numberOfRoomsAndRent.dan[1]);
} else if (sumRent < danRent) {
    console.log("Sarah and David pay less rent than Dan");
} else {
    console.log("Sarah and David pay the same rent as Dan");
}




