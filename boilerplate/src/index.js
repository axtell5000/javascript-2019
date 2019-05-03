// Some misc code
// Spread operator

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
