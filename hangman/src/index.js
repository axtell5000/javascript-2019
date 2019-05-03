import Hangman from './hangman';
import { getPuzzle } from './requests';

// Dom elements
const startBtn = document.querySelector('#start-game');
const gameWrapper = document.querySelector('#game-wrapper')
const gameArea = document.querySelector('#game-area');


//
// console.log(game1.getPuzzle());
// console.log(game1.triesAllowed);

startBtn.addEventListener('click', (e) => {
  e.preventDefault();
  startBtn.style.display = 'none';
  gameWrapper.style.display = 'block';
  gameArea.style.display = 'block';
  startGame();
});

const startGame = async () => {
  const puzzle = await getPuzzle('2');
  let game1;
  game1 = new Hangman(puzzle, 5);

  game1.status = 'playing';

  const puzzleProgress = document.querySelector('#puzzle-progress');
  const statusMsg = document.querySelector('#statusMessage');

  puzzleProgress.textContent = game1.puzzle;
  statusMsg.textContent = game1.statusMessage;

  window.addEventListener('keydown', (e) => {
    const guess = e.key;

    // Here we exclude keys like enter, shift, ctr etc
    if (guess.match(/^[a-z0-9 ]$/i)) {
      game1.makeGuess(guess);
    }
    renderGameArea(game1, puzzleProgress, statusMsg)

  });
};

document.querySelector('#reset').addEventListener('click', startGame);

const renderGameArea = (game1, puzzleProgress, statusMsg) => {

  puzzleProgress.textContent = game1.puzzle;
  statusMsg.textContent = game1.statusMessage;

};

// Misc code - destructuring

const todo = {
  id: 'dsfsfsggsgsdg',
  text: 'Hello hello',
  completed: true
};

const printTodo = ({id, text}) => {
  console.log(`Id: ${id}, Text: ${text}`);
};

printTodo(todo);

//old way
// const text = todo.text;
// const completed = todo.completed;

// using destructuring
const { text:todoText, completed, details= 'No details provided', ...others} = todo;

console.log(todoText);
console.log(completed);
console.log(details);
console.log(others);

// Destructuring with arrays
const age = [33, 38, 4, 88, 66];
const [firstAge, secondAge] = age;
console.log(firstAge); //33
console.log(secondAge); //38


getLocation().then((location) => {
  return getCountry(location.country)
  // console.log(`You are currently in ${location.city} ${location.region} ${location.country}`);
}).then((country) => {
  console.log(country.name)
}).catch((err) => {
  console.log(`Error: ${err}`);
});






