// The Promise Lifecycle

const promise = fetch("books.json");

// 1.
promise
  .then((response) => {
    // 1. Pending promise

    if (response.ok) {
      console.log("Request succeeded.");
    } else {
      console.error("Request failed.");
    }
  })
  .then((data) => {
    // 2. Fulfillment
  })
  .catch(() => {
    // 3. Rejection
  });

// 2.
promise.then(callback, callback);

// 3

promise.then(() => {});
promise.catch(() => {});
promise.finally(() => {});
