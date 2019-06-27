import 'notyf/notyf.min.css';
import MicroModal from 'micromodal';

import initialNotes from '../assets/notes.json'
import {
    PRIORITY_TYPES,
    NOTIFICATION_MESSAGES,
    notyf,
    uuidv4,
    refs,
} from './utils/constants';

import {
    createNote,
    createNotes
} from './moduls/view';

import Notes from './moduls/class';

// class example

const notes = new Notes(initialNotes);

// handlers

const handleModal = (event) => {
    MicroModal.show('note-editor-modal');
}

const handleFormSubmit = (event) => {
    event.preventDefault();
    const [inputTitle, inputBody, submit, cancel] = event.currentTarget.elements;
    const titleValue = inputTitle.value;
    const bodyValue = inputBody.value;

    if (titleValue.trim() === '' || bodyValue.trim() === '') {
        return notyf.error(NOTIFICATION_MESSAGES.EDITOR_FIELDS_EMPTY);
    }

    const newItem = {
        id: uuidv4(),
        title: titleValue,
        body: bodyValue,
        priority: PRIORITY_TYPES.LOW
    }


    notyf.success(NOTIFICATION_MESSAGES.NOTE_ADDED_SUCCESS);
    notes.saveListItem(newItem);
    refs.noteList.insertAdjacentHTML('beforeend', createNote(newItem));
    MicroModal.close('note-editor-modal');
    event.currentTarget.reset();
}

const handleNotesFilter = (event) => {
    const input = event.target.value;
    const filteredNotes = notes.filterNote(input);
    refs.noteList.innerHTML = createNotes(filteredNotes);
}

const handleListClick = (event) => {
    if (event.target.textContent !== 'delete') return
    const parentItem = event.target.closest('li');
    const id = parentItem.dataset.id;
    notyf.success(NOTIFICATION_MESSAGES.NOTE_DELETED_SUCCESS);
    parentItem.remove();
    notes.removeNote(id);
}

// listeners

refs.searchInput.addEventListener('input', handleNotesFilter);
refs.noteList.addEventListener('click', handleListClick);
refs.editorBtn.addEventListener('click', handleModal);
refs.editorForm.addEventListener('submit', handleFormSubmit);