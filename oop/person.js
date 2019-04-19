const Person = function (firstName, lastName, age, likes) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.likes = likes;
};

// Using prototypes is more efficient, if we put all the functions in the constructor instead and then create 100
// instances of it the functions would appear 100 times in memory. When its in the prototype it appears just once
Person.prototype.getBio = function () {
  let bio = `${this.firstName} is ${this.age} years old. `;

  this.likes.forEach((like) => {
    bio = bio + ` ${this.firstName} likes ${like}.`
  });

  return bio;
};

Person.prototype.setName = function (fullName) {
  const names = fullName.split(' ');
  this.firstName = names[0];
  this.lastName = names[1];
};

const me = new Person('Stephen', 'Axtell', 44, ['Breakdancing', 'Moonwalking']);
me.setName('Alexis Texas');
console.log(me.getBio());

const person2 = new Person('John', 'Do', 22, []);
console.log(person2.getBio());

