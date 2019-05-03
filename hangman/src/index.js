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



getLocation().then((location) => {
  return getCountry(location.country)
  // console.log(`You are currently in ${location.city} ${location.region} ${location.country}`);
}).then((country) => {
  console.log(country.name)
}).catch((err) => {
  console.log(`Error: ${err}`);
});






