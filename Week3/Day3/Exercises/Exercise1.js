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
