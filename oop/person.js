const Person = function (firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
};

const me = new Person('Stephen', 'Axtell', 44);
console.log(me);

const person2 = new Person('John', 'Do', 22);
console.log(person2);

