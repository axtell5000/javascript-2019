// Automatically returns, only for one line types
const squareShort = num => num * num;

// same as below

const squareLong = (num) => {
  return num * num;
};

console.log(squareShort(10));

const people = [
  {
    name: 'Stephen Axtell',
    age: 40
  },
  {
    name: 'John Adams',
    age: 30
  },
  {
    name: 'Adam',
    age: 35
  }
];

const under40 = people.filter(person => person.age < 40 );
console.log(under40);

const is30 = people.filter(person => person.age === 30 );
console.log(is30.name);
