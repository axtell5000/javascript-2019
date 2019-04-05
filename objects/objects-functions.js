const myBook = {
  title: 'Blood Song',
  author: 'Anthony Ryan',
  pages: 750
};

const secondBook = {
  title: 'Hobbit',
  author: 'J.R.R Tolkien',
  pages: 300
};

const getSummary = function (book) {
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pages} pages long`,
  };
};

const bookSummary = getSummary(myBook);
const otherBookSummary = getSummary(secondBook);

console.log(bookSummary.pageCountSummary);

// challenge

const multiTemp = function (tempF) {
  const celsius = (tempF - 32) * (5/9);
  const kelvin = (tempF + 459.67) * (5/9);

  return {
    tempF: tempF,
    tempC: celsius,
    tempK: kelvin
  }

};

const tempResult = multiTemp(32);

console.log(`The temperatures are ${tempResult.tempF} Farenheit, ${tempResult.tempC} Celsius and ${tempResult.tempK} Kelvin`)
