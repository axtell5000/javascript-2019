const getDataPromise = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided');
    }, 3000);
  });
};



const processData = async () => {
  let data = await getDataPromise(2);
  data = await getDataPromise(data);
  return data;
};

// An Async function always returns a Promise, so we must do something like below

processData().then((data) => {
  console.log('Data ', data);
}).catch((err) => {
  console.log('Error', err);
});
