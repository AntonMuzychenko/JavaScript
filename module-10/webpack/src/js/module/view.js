import { PRIORITY_TYPES,ICON_TYPES,NOTE_ACTION,  refs} from '../utils/constants'

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


  export{createElem,createActionButton,createActionIcon, createListItem}