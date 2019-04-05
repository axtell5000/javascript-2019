const add = function (a, b) {
  return a + b;
};

console.log(add(2, 5));

// default arguments

const getScoreTest = function (name = 'Anonymous', score = 0) {
  console.log(name);
  console.log(score);
};

getScoreTest(undefined, 99);

// Exercises
const tipCalculator = function (total, tipPercentage = 0.1) {
  const percentage = tipPercentage * 100;
  const tipAmount = total * tipPercentage;
  return `A ${percentage}% tip on $${total} would be $${tipAmount}`;
};

const tipMessage = tipCalculator(400, 0.2);
console.log(tipMessage);
