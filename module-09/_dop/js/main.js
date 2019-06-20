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
}

const notepad = new Notepad(initialNotes);

const list = document.querySelector('.note-list')

function elem(newTag, newClass, dataSet, dataValue, text) {
  const elem = document.createElement(newTag);
  newClass.split(' ').map(el => elem.classList.add(el));
  if (dataSet === '' && dataValue === '') {
    null
  } else if (dataSet && dataValue) {
    elem.dataset[dataSet] = dataValue;
  } else {
    null
  }
  text ? elem.textContent = text : null;
  // console.log(elem);
  return elem;
}

// createListItem(notepad.notes[0])

// function renderTest(listRef, note) {
//   console.log(listRef);
//   console.log(note);
//   console.log(createListItem(note));
//   listRef.append(createListItem(note))
// }

// renderTest(list, notepad.notes[0])


function renderNoteList(listRef, note) {
  const listIt = note.map(el => createListItem(el));
  listRef.append(...listIt);

  return listRef;
}

renderNoteList(list, notepad.notes)

function createListItem(note) {
  const noteListItem = elem('li', 'note-list__item', 'id', note.id);
  const divNote = elem('div', 'note');

  noteListItem.appendChild(divNote)
  divNote.appendChild(createNoteContent(note));
  divNote.appendChild(createNoteFooter(note.priority));

  return noteListItem;
}

function createNoteContent(note) {
  const noteContent = elem('div', 'note_content')

  const noteTitle = elem('h2', 'note__title', '', '', note.title)

  const noteBody = elem('p', 'note__body', '', '', note.body)

  noteContent.append(noteTitle, noteBody);

  return noteContent;
}

function createNoteFooter(priority) {
  const foot = elem('footer', 'note__footer')
  
  const sectionTop = elem('section', 'note_section')
  const buttonDecrease = elem('button', 'action', 'action', 'decrease-priority')
  const iconMore = elem('i', 'material-icons action__icon', '', '', ICON_TYPES.ARROW_DOWN)
  const buttonIncrease = elem('button', 'action', 'action', 'increase-priority')
  const iconLess = elem('i', 'material-icons action__icon', '', '', ICON_TYPES.ARROW_UP)
  const span = elem('span', 'note__priority', '', '', `Priority: ${priority}`);

  const sectionBottom = elem('section', 'note_section')
  const buttonEdit = elem('button', 'action', 'action', 'edit-note')
  const iconMaterials = elem('i', 'material-icons action__icon', '', '', ICON_TYPES.EDIT)
  const buttonDelete = elem('button', 'action', 'action', 'delete-note')
  const iconDelete = elem('i', 'material-icons action__icon', '', '', ICON_TYPES.DELETE)

  foot.append(sectionTop, sectionBottom);
  sectionTop.append(buttonDecrease, buttonIncrease, span);
  sectionBottom.append(buttonEdit, buttonDelete);
  buttonDecrease.appendChild(iconMore);
  buttonIncrease.appendChild(iconLess);
  buttonEdit.appendChild(iconMaterials);
  buttonDelete.appendChild(iconDelete)

  return foot;
}





































// //==============task-01===============

// Напишите скрипт который реализует следующий функционал.

// Есть кнопка с классом button, текст которой отображает 
// кол-во раз которое по ней кликнули, обновляется при каждом клике.


// let count = 0;
// const button = document.querySelector('button');
// function counter(e){
//     count++;
//     button.textContent = count;
// }
// button.addEventListener('click',counter);
// console.log(button);



// //==============task-02===============



// Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
// получите числа которые бьудут введены в инпуты и запишите их сумму в span.result.

// const input = document.querySelectorAll('input');
// const button = document.querySelector('BUTTON');
// const result = document.querySelector('.result')
// function summ(){
//     result.textContent = +input[0].value + +input[1].value;

// }
// button.addEventListener('click',summ)

// var2

// const button = document.querySelector('[data-action="add"]');
// const leftInput = document.querySelector('input');
// const rightIput = leftInput.nextElementSibling.nextElementSibling;
// const result = document.querySelector('.result');
// // console.log(rightIput);
// // console.log(leftInput);
// // console.log(button);

// button.addEventListener('click', () => result.textContent = +leftInput.value + +rightIput.value)

// //==============task-03===============


//   Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1. 

//   - Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
//   - Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
//   - Добавьте классу методы increment и decrement для увеличения и ументшение значения счетчика
//   - Привяжите вызовы методов и значение счетчика к раметке

// const sub = document.querySelector('button[data-action="sub"]')
// const add = document.querySelector('button[data-action="add"]')
// const result = document.querySelector('.value')

// class Value{
//     constructor(onChange){
//         this.value = 0;
//         this.onChange = onChange;
//         this.increment = this.increment.bind(this)
//         this.decrement = this.decrement.bind(this)
//     }
// increment(){
//     this.value++;
//     onChange(this.value)
// }

// decrement(){
//     this.value--;
//     onChange(this.value)

// }
// }
// function onChange(value){
//     result.textContent = value;
// }
// const value = new Value();


// sub.addEventListener( 'click',value.decrement)
// add.addEventListener( 'click',value.increment)

//==============task-04===============


// Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
// после чего нажимает кнопку "Submit" и происходит отправка формы.

// При отправке формы:
// - не должна перезагружаться страница
// - необходимо получить выбранную опцию и вывести в параграф с классом .result

// const form = document.querySelector('form')
// const input = document.querySelectorAll('.question-form input')
// const res = document.querySelector('.result')


// function change(e){
//     e.preventDefault()

//     input.forEach(el => {
//         if(el.checked){
// console.log('ok')
// console.log(el);
// res.textContent = `Result: ${el.parentElement.textContent}`
//         }
//     })
// }
// form.addEventListener('submit',change)
// console.log(input);





// //==============task-05===============


//   // Дан список изображений. Сделайте так, чтобы по клику на картинку 
//   // алертом выводился ее src. Обязательно используйте делегирование событий.

// const images = document.querySelector('.images');

// images.addEventListener('click', (event) => alert(event.target.src));


// const elem = document.querySelector('.images')

// elem.addEventListener('click', fun);

// function fun(event) {
//  let target = event.target;
//  alert(target.src);
// }

// ==============task-06===============


//   Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
//   Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
//   она находится. Обязательно используйте делегирование событий.

// const elem = document.querySelectorAll('li');
// function edit(event){
//     if(event.target.tagName !== 'BUTTON')
//     return;
//     event.currentTarget.remove();
// }

// elem.forEach(elem => elem.addEventListener('click', edit));

// var2

// const list = document.querySelector('.list');
// const listItems = Array.from(document.querySelectorAll('li'))
// const deleteItem = document.querySelectorAll('[data-action="delete"]');

// list.addEventListener('click', (event) => {

//     const action = event.target.dataset.action;

//     if (event.target.nodeName !== 'BUTTON') return;
//     if (action === 'delete') {
//         listItems.filter(el => el !== event.target);
//         const parentListItem = event.target.closest('li');
//         const test = listItems.find(item => item === parentListItem);
//         test.remove();
//         return test;
//     }
// });

///=============task-07============///////////

/*
Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
инпуты проверяли свое содержимое на правильное количество символов. 

- Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
- Если введено подходящее количество, то outline инпута становится зеленым, 
если неправильное - красным. Для добавления стилей, на вкладке CSS есть стили valid и invalid
*/

// const list = document.querySelector('.input-list');
// console.log(list);
// const inputOne = document.querySelector('input[data-length = "2"]')
// console.log(inputOne);
// const inputTwo = document.querySelector('input[data-length = "4"]')
// console.log(inputTwo);
// const inputThree = document.querySelector('input[data-length = "8"]')
// console.log(inputThree);
// const inputFour = document.querySelector('input[data-length = "16"]')
// console.log(inputFour);

// function focusListener(input) {
    //     input.addEventListener('focusout', inputFocus);
    //     const inputLength = Number(input.dataset.length);
    //     console.log(inputLength);
    
    //     function inputFocus(event) {
        //         const valueLength = event.target.value.length;
        //         if (inputLength === valueLength){
            //             input.classList.add('valid');
            //             input.classList.remove('invalid');
            //              } else{
                //                 input.classList.add('invalid');
                //     }
                //   }
                // }
                // focusListener(inputOne);
                // focusListener(inputTwo);
                // focusListener(inputThree);
                // focusListener(inputFour);
               
               
               
                ///=============task-08============///////////
                
                /*
                Напишите скрипт который:
                
                - При фокусе текстового поля, в p.message рендерит строку "Input is in focus!"
                - При наборе текста в инпуте (событие input), текущее его значение должно 
                отображаться в p.input-value 
                */
               
               // const input = document.querySelector('.input');
               // const message = document.querySelector('.message');
               // const inputValue = document.querySelector('.input-value')
               
               // input.addEventListener('focus', (event) => {
                   //     message.textContent = "Input is in focus!"
                   // });
                   // input.addEventListener('input', () => inputValue.textContent = input.value);
                   
                   // const input = document.querySelector('input');
                   // const message = document.querySelector('.message');
                   // const inputValue = document.querySelector('.input-value')
                   // input.addEventListener('focus', (event) => {
                       //     message.textContent = "Input is in focus!!!"
                       // });
                       // console.log(addEventListener);
                       

                       ///=============task-09============///////////
/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.
  
  Напишите скрипт который реализует следующее поведение:
 
  - При клике на кнопке с надписью "Open Modal", модальное окно с классом modal, 
    должно появляться. Для этого необходимо убрать класс modal-hidden. 
    Для выбора модального модального окна используйте класс js-modal-backdrop
 
  - При открытом модальном окне, клик на кнопку с крестиком (data-action="close-modal")
    или на серый фон с прозрачностью (js-modal-backdrop), модальное окно должно закрываться.
*/
// const button = document.querySelector('[data-action="open-modal"]');
// // console.log(button);
// const modal = document.querySelector('.js-modal-backdrop');
// const modalWindow = document.querySelector('.modal-content')
// const closeModalBtn = document.querySelector('[data-action="close-modal"]');
// console.log(closeModalBtn);
// button.addEventListener('click', (event) => {
//     modal.classList.remove('modal-hidden');
//     console.log(event.target);
// });
// closeModalBtn.addEventListener('click', (event) => {
//     modal.classList.add('modal-hidden');
// });

// modal.addEventListener('click', (event) => {
//     console.log(event.target);
//     if (event.target === modal) {
//         modal.classList.add('modal-hidden');
//     }
// })
