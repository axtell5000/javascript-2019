// functions also create scope like if statements. Here fareheitToCelciusConversion is in the Global.
// function arguments are local to the function and any other variable inside function are local

const fareheitToCelciusConversion = function (tempF) {
  const result = (tempF - 32) * (5/9);
  return result;
};

console.log(fareheitToCelciusConversion(32));
console.log(fareheitToCelciusConversion(68));
