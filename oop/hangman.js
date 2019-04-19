const Hangman = function (word, triesAllowed) {
  this.word = word;
  this.triesAllowed = triesAllowed
};

const game1 = new Hangman('cat', 3);
console.log(game1);

const game2 = new Hangman('smorgesboard', 10);
console.log(game2);
