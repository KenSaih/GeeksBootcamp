const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});

const promises = [promise1, promise2, promise3];
Promise.all(promises)
  .then(values => {
    console.log(values); // [3, 42, "foo"]
  })
  .catch(error => {
    console.error("Error in promises:", error);
  });