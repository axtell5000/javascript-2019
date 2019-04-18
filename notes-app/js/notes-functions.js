// Read existing notes from local storage

const getSavedNotes = () => {
  // WORKING WITH LOCAL STORAGE - only handle strings

  const notesJson = localStorage.getItem('notes');
  return notesJson ? JSON.parse(notesJson) : [];
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
  const linkEl = document.createElement('a');
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
  linkEl.setAttribute('href', `/edit.html#${note.id}`)
  if(note.title.length > 0) {
    linkEl.textContent = note.title;
  } else {
    linkEl.textContent = 'Unnamed note';
  }

  noteEl.appendChild(linkEl);

  return noteEl;

};

// Sort your notes in one of three ways
const sortNotes = (notes, sortBy) => {
  if (sortBy === 'byEdited') {
    return notes.sort((a, b) => {
      if (a.updatedAt > b.updatedAt) {
        return -1;
      } else if (a.updatedAt < b.updatedAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === 'byCreated') {
    return notes.sort((a, b) => {
      if (a.createdAt > b.createdAt) {
        return -1;
      } else if (a.createdAt < b.createdAt) {
        return 1;
      } else {
        return 0;
      }
    })
  } else if (sortBy === 'alphabetically') {
    return notes.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    })
  }
  else {
    return notes;
  }
};

// Rendering the application notes
const renderNotes = (notes, filters) => {
  notes = sortNotes(notes, filters.sortBy);
  const noteArea = document.querySelector('#notes-area');

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  noteArea.innerHTML = '';

  filteredNotes.forEach((note) => {
    const noteEl = generateNoteDOM(note);
    noteArea.appendChild(noteEl);
  });
};

// Generate the last edited message
const generateLastEdited = (timestamp) => {
  return `Last edited ${moment(timestamp).fromNow()}`
}
