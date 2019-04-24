// Promises better alternative to using callbacks when dealing with asynchronous code

// Callback
const getDataCallback = (callback) => {
  setTimeout(() => {
    callback('This si an error', undefined)
  }, 3000);

};

getDataCallback((err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data);
  }
});

// Promises, resolve - do something when successful, reject - do something if failed
const getDataPromise = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`This is the promised data: ${data}`);
      // reject('This is my promise error');
    }, 3000);
  });
};

const myPromise = getDataPromise(123);


myPromise.then((data) => {
  console.log(data);
}, (err) => {
  console.log(err);
});
