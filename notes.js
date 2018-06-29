console.log("Starting notes.js");

const fs = require('fs');
const notesDataFile = 'notes-data.json';

let fetchNotes = () => {
  try {
    notesString = fs.readFileSync(notesDataFile);
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

let saveNotes = (notes) => {
  fs.writeFileSync(notesDataFile, JSON.stringify(notes));
};

let addNote = (title, body) => {
  let notes = [];
  let note = {
    title,
    body
  };

  notes = fetchNotes();

  let duplicateNotes = notes.filter((note) => note.title === title);

  if(duplicateNotes[0] ===  undefined) {
    console.log('Adding note: ', title, body);
    notes.push(note);
    saveNotes(notes);
    return note;
  }
}

let getAll = () => {
  let notes = fetchNotes();
  console.log(`Listing ${notes.length} note(s)`);
  notes.forEach((note) => console.log(logNote(note)));
}

let getNote = (title) => {
    console.log('Getting note:', title);
    let notes = fetchNotes();
    let matchedNotes = notes.filter((note) => note.title === title);
    return matchedNotes[0];
}

let removeNote = (title) => {
    console.log('Removing note:', title);
    let notes = fetchNotes();
    let unmatchedNotes = notes.filter((note) => note.title !== title);
    saveNotes(unmatchedNotes);
    return notes.length !== unmatchedNotes.length;
}

let logNote = (note) => {
  return `Title:  ${note.title} \nBody: ${note.body}` ;
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
