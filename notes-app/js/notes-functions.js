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

// Save the notes to localStorage
const saveNotes = (notes) => {
  localStorage.setItem('notes', JSON.stringify(notes))
};

// Removing a note
const removeNote = (id) => {
  const notesIndex = notes.findIndex((note) => {
    return note.id === id;
  });

  if (notesIndex > -1) {
    notes.splice(notesIndex, 1);
  }
};

// Generate DOM structure for a note

const generateNoteDOM = (note) => {
  const noteEl = document.createElement('div');
  const textEl = document.createElement('span');
  const button = document.createElement('button');

  // setup the remove note button
  button.textContent = 'x';
  noteEl.appendChild(button);
  button.addEventListener('click', () => {
    removeNote(note.id);
    saveNotes(notes);
    renderNotes(notes, filters);
  });

  // setup the note text
  if(note.title.length > 0) {
    textEl.textContent = note.title;
  } else {
    textEl.textContent = 'Unnamed note';
  }

  noteEl.appendChild(textEl);

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
    console.log(note.title, 'title');
    const noteEl = generateNoteDOM(note);
    noteArea.appendChild(noteEl);
  })
};
