
// Working with http
// HTTP - HyperText Transfer Protocol
// Request - What do we want to do
// Response - What was actually done
// We are doing it like this to allow for more versatility - allowing extra parameters

// Just a note for reference: new XMLHttpRequest() does not have Promises built in like fetch(). Thats why we created
// our own and used resolve and reject

const getPuzzle = (wordCount) => new Promise((resolve, reject) => {

  const request = new XMLHttpRequest();
  request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText);
      resolve(data.puzzle);
    } else if (e.target.readyState === 4) {
      reject('An error has taken place.');
    }
  });

  request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
  request.send();
});

// Challenge
const getCountry = (countryCode) => new Promise((resolve, reject) => {
  const countryRequest = new XMLHttpRequest();

  countryRequest.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const data = JSON.parse(e.target.responseText);
      const country = data.find(country => country.alpha2Code === countryCode);
      resolve(country);
    } else if (e.target.readyState === 4) {
      reject('An error has taken place');
    }
  });

  countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all');
  countryRequest.send();
});


