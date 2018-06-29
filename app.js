console.log("Starting app.js");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const title_option = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};

const body_option = {
  describe: 'Note content',
  demand: true,
  alias: 'b'
}


const argv = yargs
    .command('add', 'Add a new Note', {
      title: title_option,
      body: body_option
    })
    .command('list', 'List all notes')
    .command('read', 'Read note using the title', {
      title: title_option
    })
    .command('remove', 'Remove note using the title', {
      title: title_option
    })
    .help()
    .argv;
const command = argv._[0];

console.log('Command: ', command);


if(command === 'add') {
  let note = notes.addNote(argv.title, argv.body);
  if(note){
     console.log('Note' , note.title, 'added successfully.');
  } else {
    console.log('Note' , argv.title, 'failed to save!');
  }
} else if(command === 'list') {
  notes.getAll();
} else if(command === 'read') {
  let note = notes.getNote(argv.title);
  let message = (note !== undefined) ? notes.logNote(note): `Note ${argv.title} not found.`;
  console.log(message);
} else if(command === 'remove') {
  let removed = notes.removeNote(argv.title);
  let message = removed ? `Note ${argv.title} removed` : `Note ${argv.title} not found.`;
  console.log(message);
} else {
  console.log('Command not recognized.');
}
