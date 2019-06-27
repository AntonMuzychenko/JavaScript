import noteTemplates from '../../tamplates/notex.hbs';
import {refs} from '../utils/constants';
import initialNotes from '../../assets/notes.json';


export const createNote = note => noteTemplates(note);

export const createNotes = note => note.map(note => noteTemplates(note)).join('');


refs.noteList.insertAdjacentHTML('beforeend', createNotes(initialNotes));