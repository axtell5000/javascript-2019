
const notes =[{
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

const filters = {
  searchText: ''
};

const renderNotes = (notes, filters) => {

  const noteArea = document.querySelector('#notes-area');

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  noteArea.innerHTML = '';

  filteredNotes.forEach((note) => {
    const noteEl = document.createElement('p');
    noteEl.textContent = note.title;
    noteArea.appendChild(noteEl);
  })
};

renderNotes(notes, filters);

// const p = document.querySelector('p');
//
// // p.remove(); // for newer browsers
//
// // p.parentElement.removeChild(p); // older method
//
// const ps = document.querySelectorAll('p');
// ps.forEach((p) => {
//   console.log(p.textContent);
//   p.remove()
// });
//
//
// // Adding a new element
// const newPara = document.createElement('p');
// newPara.textContent = 'This is a new element from Javascript';
// document.querySelector('body').appendChild(newPara);

// Event listeners
document.querySelector('#create-note').addEventListener('click', (event) => {
  event.target.textContent = "The button was clicked";
});

document.querySelector('#search-text').addEventListener('input', (e) => {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector('#for-fun').addEventListener('change', (e) => {
  console.log(e.target.checked);
});
