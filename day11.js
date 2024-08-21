// task1 & task2: create a promise that resolves with a message after 2 seconds or rejects with error message and handle using catch
const myPromise = new Promise((resolve, reject) => {
  const success = false;

  setTimeout(() => {
    if (success) resolve("Promised resolved successfully!");
    else reject("Promised failed!!!!");
  }, 2000);
});

myPromise
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
