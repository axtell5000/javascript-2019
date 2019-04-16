
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

// Working with dates
// const someDate= new Date('January 1 2001 7:01:01');
// console.log(someDate.toString());
const now = new Date(); // current date
const timeStamp = now.getTime();

const myDate = new Date(timeStamp);
console.log(myDate.getFullYear());

const dateA = new Date('March 3 2010 8:00:00');
const dateB = new Date();

const myDateA = dateA.getTime();
const myDateB = dateB.getTime();

if (myDateA < myDateB) {
  console.log(dateA.toString());
} else if (myDateB < myDateA) {
  console.log(dateB.toString());
}

//
// console.log(`Year: ${now.getFullYear()}`);
// console.log(`Month: ${now.getMonth()}`); // works like 0 based array, eg December will be 11
// console.log(`Day of month: ${now.getDate()}`);
// console.log(`Hours: ${now.getHours()}`);
// console.log(`Minutes: ${now.getMinutes()}`);
// console.log(`Seconds: ${now.getSeconds()}`);
