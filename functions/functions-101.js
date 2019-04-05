const greetUser = function () {
  console.log('Hello');
};

greetUser();


const square = function (n) {
  return n * n;
};

console.log(square(3));

const fareheitToCelciusConversion = function (tempF) {
  const result = (tempF - 32) * (5/9);
  return result;
};

console.log(fareheitToCelciusConversion(32));
console.log(fareheitToCelciusConversion(68));
