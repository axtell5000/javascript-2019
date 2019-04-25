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

getPuzzle('2').then((puzzle) => {
  console.log(puzzle);
}, (err) => {
  console.log(`Error: ${err}`);
});

getCountry('ZA').then((country) => {
  console.log(country.name);
}, (err) => {
  console.log(`Error: ${err}`);
});

// Using fetch, uses Promises automatically
fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
  if (response.status === 200) {
    return response.json(); // also part of promise, so unsure when we get this back, so we return it so we can chain
  } else {
    throw new Error('Unable to fetch the puzzle'); // THis will run the catch block below
  }
}).then((data) => {
  console.log(data.puzzle);
})
.catch((error) => {
  console.log(error);
});





