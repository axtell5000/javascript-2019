// type coercion - a number, a string and a boolean

console.log('5' + 5); //55 - converts to string
console.log('5' - 5); //0 - converts to number

console.log(typeof 123); //number

const value = true + 12; // true = 1 , false = 0
const type = typeof value;
console.log(value);
console.log(type);
