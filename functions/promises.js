// Promises better alternative to using callbacks when dealing with asynchronous code

// Callback - here below illustrating callback hell when we start doing multiple calls
const getDataCallback = (num, callback) => {
  setTimeout(() => {
    if (typeof  num === 'number') {
      callback(undefined, num * 2);
    } else {
      callback('Number must be provided');
    }
  }, 3000);

};

getDataCallback(5, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    getDataCallback(data, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    })
  }
});

// Promises, resolve - do something when successful, reject - do something if failed
const getDataPromise = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided');
    }, 3000);
  });
};

getDataPromise(2).then((data) => {
  return getDataPromise(data); // the return is allowing us to chain like we do
}).then((data) => {
  return getDataPromise(data);
}). then((data) => {
  console.log(data);
}).catch((err) => {
  console.log(err);
});
