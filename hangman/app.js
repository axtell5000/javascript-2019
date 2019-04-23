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
    console.log(game1.status);
    renderGameArea(game1, puzzleProgress, statusMsg)

  });
};

const renderGameArea = (game1, puzzleProgress, statusMsg) => {

  puzzleProgress.textContent = game1.puzzle;
  statusMsg.textContent = game1.statusMessage;

};


// Working with http
// HTTP - HyperText Transfer Protocol
// Request - What do we want to do
// Response - What was actually done

// Making a HTTP request
const request = new XMLHttpRequest();
request.addEventListener('readystatechange', (e) => {
  if (e.target.readyState === 4) {
    const data = JSON.parse(e.target.responseText);
    console.log(data);
  }
});

request.open('GET', 'http://puzzle.mead.io/puzzle');
request.send()
