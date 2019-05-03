// Some misc code
// Rest parameter

const calculateAverage = (thing, ...numbers) => {
  let sum = 0;
  numbers.forEach((num) => sum += num);
  const average = sum / numbers.length;
  return `The avearge ${thing} is ${average}`;
};

console.log(calculateAverage('grade', 24, 45, 123, 67));

// Challenge
const printTeam = (team, coach, ...players) => {
  console.log(`Team: ${team}`);
  console.log(`Coach: ${coach}`);
  console.log(`Players: ${players.join(', ')}`);
};

printTeam('Proteas', 'Otis Gibson', 'Faf', 'Hash', 'JP', 'KG', 'Lucky');

// Misc code - spread operator opposite to rest

const team = {
  team: 'Proteas',
  coach: 'Otis Gibson',
  players: ['Faf', 'Miller', 'JP', 'KG', 'Lucky']
};
printTeam(team.name, team.coach,...team.players);

// Another usage - easier copying
const cities = ['Paris', 'Cape Town', 'London', 'New York'];
const cityCopy = [...cities];
console.log(cities);
console.log(cityCopy);

// With objects - Just a note - older versions of Babel you will need a plugin to work with objects and spreading
let house = {
  bedrooms: 3,
  bathrooms: 1.5,
  yearBuilt: 2000
};

let newHouse = {...house};
newHouse.yearBuilt = 2010;

console.log(newHouse); // will be different after change
console.log(house);

//challenge
const person = {
  name: 'Stephen',
  age: 33,
  hobbies: ['breakdancing', 'reading', 'gaming']
};

const location = {
  city: 'Cape Town',
  country: 'South Africa'
};

const overview = {
  ...person,
  ...location
};

// just remember spread is a full copy only 1 level down
// What I mean by full copy, - it is completely detached from original object - not referencing original at all
// If we copy an object with an array say. Copy it and then add an element to the array in the copy. The original
// objects array will be changed, see below for example
overview.hobbies.push('running');

console.log(person, 'person');
console.log(overview, 'over');

