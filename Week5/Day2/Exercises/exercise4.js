function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

//Ce code montre comment utiliser une promesse et async/await pour gérer une opération asynchrone avec un délai.
// Il affiche "calling", attend 2 secondes, puis affiche "resolved".
// Il est utile pour comprendre comment les fonctions asynchrones fonctionnent en JavaScript.