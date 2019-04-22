class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
  }

  getBio() {
    let bio = `${this.firstName} is ${this.age} years old. `;

    this.likes.forEach((like) => {
      bio = bio + ` ${this.firstName} likes ${like}.`
    });

    return bio;
  }

  setName(fullName) {
    const names = fullName.split(' ');
    this.firstName = names[0];
    this.lastName = names[1];
  }
}

const myPerson = new Person('Stephen', 'Axtell', 44, ['Break dancing', 'keeping it real']);
console.log(myPerson.getBio());




