// Prototype chain for Object: myObject ==> Object.prototype ==> null
// Prototype chain for Array: myArray ==> Array.prototype ==> Object.prototype ==> null
// Prototype chain for Function: myFunction ==> Function.prototype ==> Object.prototype ==> null
// Prototype chain for Sting: myString ==> String.prototype ==> Object.prototype ==> null
// Prototype chain for Number: myNumber ==> Number.prototype ==> Object.prototype ==> null
// Prototype chain for Boolean: myBoolean ==> Boolean.prototype ==> Object.prototype ==> null

const product = {
  name: 'Influence'
};

console.log(product.hasOwnProperty('name'));
console.log(product.hasOwnProperty('hasOwnProperty')); // this will be false - hasOwnProperty is on Object.prototype
// not product

const team = ['Stephen', 'Ian'];
console.log(team);

const item = 'Computer';
console.log(item);

// We do need to really do below, when we use all methods / props on primitives, JavaScript automatically wraps it in
// an object wrapper, depending which primitive it is
const otherItem = new String('Moniter');
console.log(otherItem);
