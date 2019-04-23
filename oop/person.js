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

class Employee extends Person {
  constructor(firstName, lastName, age, position, likes = []) {
    super(firstName, lastName, age, likes);
    this.position = position;
  }

  // Creating unique getBio() for Emoloyee
  getBio() {
    return `${this.firstName} ${this.lastName} is a ${this.position}.`
  }

  getYearsLeft() {
    return 65 - this.age;
  }

}

class Student extends Person {
  constructor(firstName, lastName, age, grade) {
    super(firstName, lastName, age);
    this.grade = grade;
  }

  getBio() {
    if (this.grade < 70) {
      return `${this.firstName} scored ${this.grade} and is a Fail`
    } else {
      return `${this.firstName} scored ${this.grade} and is a Pass`
    }
  }

  updateGrade(adjustment) {
    this.grade = this.grade + adjustment;
  }
}

// const myPerson = new Person('Stephen', 'Axtell', 44, ['Break dancing', 'keeping it real']);
// console.log(myPerson.getBio());

const myPerson = new Employee('Stephen', 'Axtell', 44, 'Rocket mechanic', ['Break dancing', 'keeping it real']);
console.log(myPerson.getBio());
console.log(myPerson.getYearsLeft());

const myStudent = new Student('Stephen', 'Axtell', 44, 70);
console.log(myStudent.getBio());
myStudent.updateGrade(-10);
console.log(myStudent.getBio());




