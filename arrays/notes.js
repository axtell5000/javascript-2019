const notes = ['Note 1', 'Note 2', 'Note 3'];

// console.log(notes.pop()); // does return the item being removed from array - from the end
// console.log(notes.shift()); // does return the item being removed from array - from the beginning
//
// notes.push('New note'); // add at the end
// notes.unshift('My first note'); // add at the beginning


//notes.splice(1,1); // remove item from index 1, second argument is how many
notes.splice(2,0, 'New third Item'); // This will insert a new item at index 2 position
notes.splice(1,1, 'This is new item at index 1'); // this replaces item at index 1

notes.forEach(function (item , index) {
  console.log(index, item);
});

console.log(notes);
console.log(notes.length);

// Good old for loop, good for if we have no existing array data and we what to add some
for (let count = 0; count < notes.length; count++) {
  console.log(notes[count]);
}

// reversing it
for (let count = notes.length - 1; count >= 0; count--) {
  console.log(notes[count]);
}

/* SEARCHING ARRAYS */

// indexOf - to search the position of a particular text/number in an array. Returns -1 if not found
console.log(notes.indexOf('Note 1'));
console.log(notes.indexOf('Note 6'));

const moreNotes =[{
  title: 'My next trip.',
  body: 'I would like to go to Iceland. I find the country fascinating'
}, {
  title: 'Habits to work on',
  body: 'Exercise more. Less sitting dow. Eat more healthily'
}, {
  title: 'Movies looking forward to',
  body: 'Avengers: Endgame, Joker and Wonder Woman 84'
}
];

// NB - below will be false (-1), indexOf uses === in the background, so {} == {} will return false  because
// different memory locations. What makes them equal is if they are at the same place in memory
console.log(moreNotes.indexOf({}));

a = {
  num: 1
};

b = {
  num: 1
};

console.log(a === b); //false

//Two ways to search for objects in arrays, findIndex - returns the index number of searched item or -1 if not found
// then there is find - retuns the actual object or undefined if not found

const findNote = function (notes, noteTitle) {
  return moreNotes.find(function (note, index) {
    return note.title.toLowerCase() === noteTitle.toLowerCase();
  });
};

// const findNote = function (notes, noteTitle) {
//   const index = moreNotes.findIndex(function (note, index) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase();
//   });
//   return moreNotes[index];
// };

const note = findNote(notes, 'Movies looking forward to');
console.log(note);

// // use findIndex when working with objects. It finds the first occurrence then stops
// const index = moreNotes.findIndex((note, index) => {
//   console.log(note);
//   return note.title === 'My next trip.'
// });
//
// console.log(index);


/* FILTERING ARRAYS */

const filterNotes = function (notes, query) {
  return notes.filter((note, index) => {
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
    return isTitleMatch || isBodyMatch;
  });
};



console.log(filterNotes(moreNotes, 'trip'));
