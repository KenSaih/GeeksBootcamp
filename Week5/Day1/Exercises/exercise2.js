return new promise ((resolve) => {
    setTimeout(() => {
        resolve("success");
    }, 4000);
}).then(resolve => console.log(resolve))

