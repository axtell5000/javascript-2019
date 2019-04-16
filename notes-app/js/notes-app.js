
let notes = getSavedNotes();

const filters = {
  searchText: ''
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

  const id = uuidv4(); // doing it like this so assign can access it

  notes.push({
    id: id,
    title: '',
    body: ''
  });
  saveNotes(notes);
  location.assign(`/edit.html#${id}`);
});

document.querySelector('#search-text').addEventListener('input', (e) => {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector("#filter-by").addEventListener('change', (e) => {
  console.log(e.target.value);
});

// 'storage' - event that listens for any changes to localStorage
window.addEventListener('storage', (e) => {
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue);
    renderNotes(notes, filters);
  }
});
