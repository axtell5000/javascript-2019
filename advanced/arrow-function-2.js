const add = function (a, b) {
  // arguments - doesnt work when using arrow functions
  console.log(arguments);
};

add(10, 20, 30, 40);

// Arrow functions dont bind 'this' - below wont work
// const car = {
//   color: 'yellow',
//   getSummary: () => {
//     console.log(`My car is ${this.color}`);
//   }
// };
//
// console.log(car.getSummary());
