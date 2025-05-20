// Your favorite colors

colors = ['red', 'blue', 'black', 'pink', 'brown'];

for(i=0; i< colors.length; i++){
    console.log("My #1 is ",colors[i]);
}

switch (colors[i]) {
    case 'red':
        console.log("My 1st is red");
        break;
    case 'blue':
        console.log("My 2nd is blue");
        break;
case 'black':
        console.log("My 3nd is black");
        break;
        case 'pink':
        console.log("My 4nd is pink");
        break;
    case 'brown':
        console.log("My 5nd is brown");
        break;
    default:
        break;
}

//Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
//Hint : create an array of suffixes to do the Bonus

 const suffixes = ["st", "nd", "rd", "th", "th"];
 for (let i = 0; i < colors.length; i++) {            
     console.log("My " + (i + 1) + suffixes[i] + " choice is " + colors[i]);
 } 

