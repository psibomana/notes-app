 // let obj = {
 //   name: 'Parfait Pascal'
 // };
 //
 // let stringObject = JSON.stringify( obj);
 //
 // console.log(typeof stringObject);
 // console.log(stringObject);


// let personString = '{"name" : "Parfait Pascal", "age":25}';
//
// let person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

let originalNote = {
  title: "Title",
  body: "Note Body"
}

let originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

let noteString = fs.readFileSync('notes.json');
let note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);
