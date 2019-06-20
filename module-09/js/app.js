'use strict';

const PRIORITY_TYPES = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

const ICON_TYPES = {
  EDIT: 'edit',
  DELETE: 'delete',
  ARROW_DOWN: 'expand_more',
  ARROW_UP: 'expand_less',
};

const NOTE_ACTIONS = {
  DELETE: 'delete-note',
  EDIT: 'edit-note',
  INCREASE_PRIORITY: 'increase-priority',
  DECREASE_PRIORITY: 'decrease-priority',
};

const initialNotes = [{
    id: 'id-1',
    title: 'JavaScript essentials',
    body: 'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
    priority: PRIORITY_TYPES.HIGH,
  },
  {
    id: 'id-2',
    title: 'Refresh HTML and CSS',
    body: 'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
    priority: PRIORITY_TYPES.NORMAL,
  },
  {
    id: 'id-3',
    title: 'Get comfy with Frontend frameworks',
    body: 'First should get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
    priority: PRIORITY_TYPES.NORMAL,
  },
  {
    id: 'id-4',
    title: 'Winter clothes',
    body: "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
    priority: PRIORITY_TYPES.LOW,
  },
];



class Notepad {
  constructor(notes = []) {
      this._notes = notes;
  }

  get notes() {
      return this._notes;
  };

  saveListItem(note) {
      const newItem = {
          id: Notepad.generateUniqueId(),
          title: note.title,
          body: note.body,
          priority: PRIORITY_TYPES.LOW,
      }

      this._notes.push(newItem);
      return newItem;
  }
  filterListItems(query = '') {
      return this._notes.filter(item => item.body.toLowerCase().includes(query.toLowerCase()) || item.title.toLowerCase().includes(query.toLowerCase()));
  }

  removeListItem(id) {
      return this._notes.map(el => {
          if (el.id === id) {
              console.log(this._notes.indexOf(el));
              this._notes.splice(this._notes.indexOf(el), 1);
          }
      })
  }

  static generateUniqueId = () =>
      Math.random()
      .toString(36)
      .substring(2, 15) +
      Math.random()
      .toString(36)
      .substring(2, 15);
}

const notepad = new Notepad(initialNotes);

const refs = {
  noteList: document.querySelector('.note-list'),
  form: document.querySelector('.note-editor'),
  filter: document.querySelector('.search-form__input'),

}

function createElem(tagName, className, dataName = '', dataValue = '') {
  const newElement = document.createElement(tagName);
  const classNameArr = className.split(' ');
  for (let key of classNameArr) {
      newElement.classList.add(key);
  }
  if (dataValue !== '' && dataName !== '') {
      newElement.dataset[dataName] = dataValue;
  }
  return newElement;
};

function createActionButton(dataValue) {
  const newElement = document.createElement('button');
  newElement.classList.add('action');
  newElement.dataset.action = dataValue;
  return newElement;
}

function createActionIcon(text) {
  const newElement = document.createElement('i');
  newElement.classList.add('material-icons');
  newElement.classList.add('action__icon');
  newElement.textContent = text;
  return newElement;
}

const renderNoteList = (listRef, notes) => {

  const list = notes.map(el => createListItem(el));

  listRef.innerHTML = '';

  listRef.append(...list);

  return listRef;
}

renderNoteList(refs.noteList, notepad.notes);

function createListItem(note) {
  const noteLi = createElem('li', 'note-list__item', 'id', note.id);
  const divNote = createElem('div', 'note');
  noteLi.appendChild(divNote);

  divNote.append(createNoteContent(note));
  divNote.append(createNoteFooter(note.priority));

  return noteLi;
}

function createNoteContent(note) {
  const divNoteContent = createElem('div', 'note__title');

  const noteTitle = createElem('h2', 'note__title');
  noteTitle.textContent = note.title;

  const noteBody = createElem('p', 'note__body');
  noteBody.textContent = note.body;

  divNoteContent.append(noteTitle, noteBody);

  return divNoteContent;
}

function createNoteFooter(priority) {
  const noteFooter = createElem('footer', 'note__footer');
  const sectionTop = createElem('section', 'note__section');

  
  const buttonIncrease = createActionButton('increase-priority');
  const iconLess = createActionIcon(ICON_TYPES.ARROW_UP);
  
  const buttonDecrease = createActionButton('decrease-priority');
  const iconMore = createActionIcon(ICON_TYPES.ARROW_DOWN);
 
  const span = createElem('span', 'note__priority');
  span.textContent = `Priority: ${priority}`;

  const sectionBottom = createElem('section', 'note__section');

  const buttonEdit = createActionButton('edit-note');
  const iconEdit = createActionIcon(ICON_TYPES.EDIT);


  const buttonDelete = createActionButton('delete-note');
  const iconDelete = createActionIcon(ICON_TYPES.DELETE);

  noteFooter.append(sectionTop, sectionBottom);
  sectionTop.append(buttonDecrease, buttonIncrease, span);
  sectionBottom.append(buttonEdit, buttonDelete);

  buttonDecrease.appendChild(iconMore);
  buttonIncrease.appendChild(iconLess);

  buttonEdit.appendChild(iconEdit);
  buttonDelete.appendChild(iconDelete);

  return noteFooter;
}


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

