const name = 'Stephen Axtell';

// length prop
console.log(name.length);

// Convert string to uppercase
console.log(name.toUpperCase());

// Convert string to lowercase
console.log(name.toLowerCase());

// includes method
const password = '1234shizzle!de';
console.log(password.includes('shizzle'));


// Challenge
const isPasswordValid = function (password) {
  return password.length > 8 && password.includes('password');
};

console.log('dongo');
