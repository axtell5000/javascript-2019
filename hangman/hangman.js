const Hangman = function (word, triesAllowed) {
  this.word = word.toLowerCase().split(''); //split takes string and splits into array
  this.triesAllowed = triesAllowed;
  this.guessedLetters = []; // this is for the user guesses, right or wrong
  this.status = '';
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

Hangman.prototype.makeGuess = function (guess) {
  guess = guess.toLowerCase();
  const isUnique = !this.guessedLetters.includes(guess);
  const isBadGuess = !this.word.includes(guess);

  // to stop tesing keystrokes for hangman
  if (this.status !== 'playing') {
    return;
  }

  if (isUnique) {
    this.guessedLetters.push(guess);
  }

  if (isUnique && isBadGuess) {
    this.triesAllowed--;

  }

  this.calcStatus()
};

Hangman.prototype.calcStatus = function () {
  
  // The every() method tests whether all elements in the array pass the test implemented by the provided function.
  const finished = this.word.every((letter) => {
    return this.guessedLetters.includes(letter)
  });

  // let finished = true;
  //
  // this.word.forEach((letter) => {
  //   if (this.guessedLetters.includes(letter)) {
  //
  //   } else {
  //     finished = false;
  //   }
  // });

  if (this.triesAllowed === 0) {
    this.status = 'failed';
  } else if (finished) {
    this.status = 'finished';
  } else {
    this.status = 'playing';
  }
};

Hangman.prototype.getStatusMessage = function () {
  if (this.status === 'playing') {
    return `Guesses left: ${this.triesAllowed}`;
  } else if (this.status === 'failed') {
    return `Nice try! The word was "${this.word.join('')}"`;
  } else {
    return 'Great work! You guessed the word';
  }
};
