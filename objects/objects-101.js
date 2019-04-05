const myBook = {
  title: 'Blood Song',
  author: 'Anthony Ryan',
  pages: 750
};

console.log(myBook.title);


// Exercise

const Person = {
  name: 'Stephen',
  age: 47,
  city: 'Cape Town'
};

console.log(`${Person.name} is ${Person.age} and lives in ${Person.city}`);
Person.age = Person.age + 1;
console.log(`${Person.name} is ${Person.age} and lives in ${Person.city}`);
