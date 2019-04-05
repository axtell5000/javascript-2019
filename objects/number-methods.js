const num = 169.345;

console.log(num.toFixed(2));

// Math object

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

const min = 10;
const max = 20;
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomNum);

// Challenge

const guessNumber = function (guess) {
  const min = 1;
  const max = 5;
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

  if (guess === randomNum) {
    return `You guessed right - ${guess}`
  } else {
    return `You guessed wrong - ${guess} it was ${randomNum}`
  }
};

console.log(guessNumber(4));
