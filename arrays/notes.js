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
