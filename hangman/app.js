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

const startGame = () => {

  const game1 = new Hangman('cat treat', 5);
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

const renderGameArea = (game1, puzzleProgress, statusMsg) => {

  puzzleProgress.textContent = game1.puzzle;
  statusMsg.textContent = game1.statusMessage;

};

// We receive a Promise back when calling getPuzzle
getPuzzle('2').then((puzzle) => {
  console.log(puzzle);
}).catch( (err) => {
  console.log(`Error: ${err}`);
});

// getCountry('ZA').then((country) => {
//   console.log(country.name);
// }).catch((err) => {
//   console.log(`Error: ${err}`);
// });

getLocation().then((location) => {
  return getCountry(location.country)
  // console.log(`You are currently in ${location.city} ${location.region} ${location.country}`);
}).then((country) => {
    console.log(country.name)
}).catch((err) => {
    console.log(`Error: ${err}`);
});





