const Hangman = function (word, triesAllowed) {
  this.word = word.toLowerCase().split(''); //split takes string and solits into array
  this.triesAllowed = triesAllowed;
  this.guessedLetters = ['c', 't']; // this is for the user guesses, right or wrong
};

Hangman.prototype.getPuzzle = function () {
  let puzzle = '';

  this.word.forEach((letter) => {
    // also could use indexOf
    if (this.guessedLetters.includes(letter) || letter === ' ') {
      puzzle += letter;
    } else {
      puzzle += '*'
    }
  });

  return puzzle;
};

const game1 = new Hangman('cat', 3);
console.log(game1.getPuzzle());

const game2 = new Hangman('Cape Town', 10);
console.log(game2.getPuzzle());
