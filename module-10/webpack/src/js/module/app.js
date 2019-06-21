import Notepad from "./notepad-model"
import {createElem,createActionButton,createActionIcon, createListItem} from "./view"
import { PRIORITY_TYPES,ICON_TYPES,NOTE_ACTION,  refs} from '../utils/constants'
import initialNotes from '../../assets/notes.json';

const notepad = new Notepad(initialNotes);

const renderNoteList = (listRef, notes) => {

  const list = notes.map(el => createListItem(el));

  listRef.innerHTML = '';

  listRef.append(...list);

  return listRef;
}

renderNoteList(refs.noteList, notepad.notes);




function handleSubmit(event) {
  event.preventDefault();
  const [title, body] = event.target.elements;
  if (title.value.trim().length === 0 || body.value.trim().length === 0) {
      return alert('Необходимо заполнить ВСЕ поля!');
  }
  const obj = {
      title: title.value,
      body: body.value,
  }
  const saveItem = notepad.saveListItem(obj);
  
  addListItem(refs.noteList, saveItem);
  
  event.currentTarget.reset();
}

function addListItem(listRef, note) {
  const listItem = createListItem(note)
  listRef.appendChild(listItem)
}

refs.form.addEventListener('submit', handleSubmit);

function handleFilterChange(event) {
  const filtred = notepad.filterListItems(event.target.value);
  console.log(filtred);

  renderNoteList(refs.noteList, filtred);
}

refs.filter.addEventListener('input', handleFilterChange);

function handleListClick(event) {
  if (event.target.nodeName !== 'I') return;

  if (event.target.textContent === ICON_TYPES.DELETE) {
      const parentItem = event.target.closest('.note-list__item');
      const id = parentItem.dataset.id;

      parentItem.remove();
      notepad.removeListItem(id);

  }
  
}

refs.noteList.addEventListener('click',handleListClick);








// class Notepad {
//   constructor(notes = []) {
//     this._notes = notes;
//   }

//   get notes() {
//     return this._notes;
//   };
// }

// const notepad = new Notepad(initialNotes);

// const list = document.querySelector('.note-list')

// function elem(newTag, newClass, dataSet, dataValue, text) {
//   const elem = document.createElement(newTag);
//   newClass.split(' ').map(el => elem.classList.add(el));
//   if (dataSet === '' && dataValue === '') {
//     null
//   } else if (dataSet && dataValue) {
//     elem.dataset[dataSet] = dataValue;
//   } else {
//     null
//   }
//   text ? elem.textContent = text : null;
//   // console.log(elem);
//   return elem;
// }
// saveListItem(note) {
//   const newItem = {
//       id: Notepad.generateUniqueId(),
//       title: note.title,
//       body: note.body,
//       priority: PRIORITY_TYPES.LOW,
//   }
// z
//   this._notes.push(newItem);
//   return newItem;
// }
// filterListItems(query = '') {
//   return this._notes.filter(item => item.body.toLowerCase().includes(query.toLowerCase()) || item.title.toLowerCase().includes(query.toLowerCase()));
// }

// removeListItem(id) {
//   return this._notes.map(el => {
//       if (el.id === id) {
//           console.log(this._notes.indexOf(el));
//           this._notes.splice(this._notes.indexOf(el), 1);
//       }
//   })
// }

// static generateUniqueId = () =>
//   Math.random()
//   .toString(36)
//   .substring(2, 15) +
//   Math.random()
//   .toString(36)
//   .substring(2, 15);
// }

// const notepad = new Notepad(initialNotes);


// //REFERENCE
// const refs = {
// noteList: document.querySelector('.note-list'),
// form: document.querySelector('.note-editor'),
// filter: document.querySelector('.search-form__input'),

// }


// // createListItem(notepad.notes[0])

// // function renderTest(listRef, note) {
// //   console.log(listRef);
// //   console.log(note);
// //   console.log(createListItem(note));
// //   listRef.append(createListItem(note))
// // }

// // renderTest(list, notepad.notes[0])


// function renderNoteList(listRef, note) {
//   const listIt = note.map(el => createListItem(el));
//   listRef.append(...listIt);

//   return listRef;
// }

// renderNoteList(list, notepad.notes)

// function createListItem(note) {
//   const noteListItem = elem('li', 'note-list__item', 'id', note.id);
//   const divNote = elem('div', 'note');

//   noteListItem.appendChild(divNote)
//   divNote.appendChild(createNoteContent(note));
//   divNote.appendChild(createNoteFooter(note.priority));

//   return noteListItem;
// }

// function createNoteContent(note) {
//   const noteContent = elem('div', 'note_content')

//   const noteTitle = elem('h2', 'note__title', '', '', note.title)

//   const noteBody = elem('p', 'note__body', '', '', note.body)

//   noteContent.append(noteTitle, noteBody);

//   return noteContent;
// }

// function createNoteFooter(priority) {
//   const foot = elem('footer', 'note__footer')
  
//   const sectionTop = elem('section', 'note_section')
//   const buttonDecrease = elem('button', 'action', 'action', 'decrease-priority')
//   const iconMore = elem('i', 'material-icons action__icon', '', '', ICON_TYPES.ARROW_DOWN)
//   const buttonIncrease = elem('button', 'action', 'action', 'increase-priority')
//   const iconLess = elem('i', 'material-icons action__icon', '', '', ICON_TYPES.ARROW_UP)
//   const span = elem('span', 'note__priority', '', '', `Priority: ${priority}`);

//   const sectionBottom = elem('section', 'note_section')
//   const buttonEdit = elem('button', 'action', 'action', 'edit-note')
//   const iconMaterials = elem('i', 'material-icons action__icon', '', '', ICON_TYPES.EDIT)
//   const buttonDelete = elem('button', 'action', 'action', 'delete-note')
//   const iconDelete = elem('i', 'material-icons action__icon', '', '', ICON_TYPES.DELETE)

//   foot.append(sectionTop, sectionBottom);
//   sectionTop.append(buttonDecrease, buttonIncrease, span);
//   sectionBottom.append(buttonEdit, buttonDelete);
//   buttonDecrease.appendChild(iconMore);
//   buttonIncrease.appendChild(iconLess);
//   buttonEdit.appendChild(iconMaterials);
//   buttonDelete.appendChild(iconDelete)

//   return foot;
// }

