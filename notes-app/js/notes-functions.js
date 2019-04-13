// Read existing notes from local storage

const getSavedNotes = () => {
  // WORKING WITH LOCAL STORAGE - only handle strings

  const notesJson = localStorage.getItem('notes');

  if (notesJson !== null) {
    return JSON.parse(notesJson);
  } else {
    return [];
  }
};

// Generate DOM structure for a note

const generateNoteDOM = (note) => {
  const noteEl = document.createElement('p');

  if(note.title.length > 0) {
    noteEl.textContent = note.title;
  } else {
    noteEl.textContent = 'Unnamed note';
  }

  return noteEl;

};

// Rendering the application notes
const renderNotes = (notes, filters) => {

  const noteArea = document.querySelector('#notes-area');

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  noteArea.innerHTML = '';

  filteredNotes.forEach((note) => {
    const noteEl = generateNoteDOM(note);
    noteArea.appendChild(noteEl);
  })
};
