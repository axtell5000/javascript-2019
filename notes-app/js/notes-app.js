const p = document.querySelector('p');

// p.remove(); // for newer browsers

// p.parentElement.removeChild(p); // older method

const ps = document.querySelectorAll('p');
ps.forEach((p) => {
  console.log(p.textContent);
  p.remove()
});
