
const otes =[{
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

document.querySelector('#remove-all').addEventListener('click', (event) => {
  document.querySelectorAll('.note').forEach(note => note.remove());
});


document.querySelector('#search-text').addEventListener('input', (e) => {
  console.log(e.target.value);
});
