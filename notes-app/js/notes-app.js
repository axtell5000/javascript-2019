
let notes =[];

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

    if(note.title.length > 0) {
      noteEl.textContent = note.title;
    } else {
      noteEl.textContent = 'Unnamed note';
    }

    noteArea.appendChild(noteEl);
  })
};

renderNotes(notes, filters);

// WORKING WITH LOCAL STORAGE - only handle strings

const notesJson = localStorage.getItem('notes');

if (notesJson !== null) {
  notes = JSON.parse(notesJson);
}

const userJSON = localStorage.getItem('user');
const user = JSON.parse(userJSON);
console.log(`${user.name} is ${user.age} years old`);

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
  notes.push({
    title: '',
    body: ''
  });
  localStorage.setItem('notes', JSON.stringify(notes));
  renderNotes(notes, filters);
});

document.querySelector('#search-text').addEventListener('input', (e) => {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector("#filter-by").addEventListener('change', (e) => {
  console.log(e.target.value);
});
