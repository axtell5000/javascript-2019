
// Working with http
// HTTP - HyperText Transfer Protocol
// Request - What do we want to do
// Response - What was actually done
// We are doing it like this to allow for more versatility - allowing extra parameters

// Just a note for reference: new XMLHttpRequest() does not have Promises built in like fetch(). Thats why we created
// our own and used resolve and reject

const getPuzzle = async (wordCount) => {
  const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
  if (response.status === 200) {
    const data = await response.json();
    return data.puzzle;
  } else {
    throw new Error('Unable to fetch new puzzle');
  }
};

const getPuzzleOld = (wordCount) => {
  return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
    if (response.status === 200) {
      return response.json()
    } else {
      throw new Error('Unable to fetch new puzzle');
    }
  }).then((data) => { // little extra step so we can just use puzzle not data.puzzle in our app file
    return data.puzzle;
  });
};

// Challenge
const getCountry = (countryCode) => {

  return fetch('http://restcountries.eu/rest/v2/all').then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error('An error has taken place');
    }
  }).then((data) => {
    const country = data.find(country => country.alpha2Code === countryCode);
    return country;
  })
};

// Challenge 2
const getLocation = () => {
  return fetch('http://ipinfo.io/json?token={need+token}').then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error('An error has taken place');
    }
  })
};
