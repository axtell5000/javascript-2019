// Dom elements
const startBtn = document.querySelector('#start-game');
const gameWrapper = document.querySelector('#game-wrapper')
const gameArea = document.querySelector('#game-area');

console.log(gameArea);


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

  const game1 = new Hangman('cat', 3);
  game1.status = 'playing';

  const puzzleProgress = document.querySelector('#puzzle-progress');
  const guessesLeft = document.querySelector('#guess');

  puzzleProgress.textContent = game1.getPuzzle();
  guessesLeft.textContent = game1.triesAllowed;

  window.addEventListener('keydown', (e) => {
    const guess = e.key;

    // Here we exclude keys like enter, shift, ctr etc
    if (guess.match(/^[a-z0-9 ]$/i)) {
      game1.makeGuess(guess);
    }
    console.log(game1.status);
    renderGameArea(game1, guessesLeft, puzzleProgress)

  });
};

const renderGameArea = (game1, guessesLeft, puzzleProgress) => {

  guessesLeft.textContent = game1.triesAllowed;
  puzzleProgress.textContent = game1.getPuzzle();

};
