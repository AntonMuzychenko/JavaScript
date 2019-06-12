// "use strict"

// class Notepad {    constructor(notes = []) {
//   this._notes = notes;
// }

// get notes() {
//   return this._notes;
// };

// set notes(notes) {
//   this._notes = notes;
// }

// findNoteById(id) {
//   let result;
//   for (const note of this._notes) {
//       if (note.id === id) {
//           result = note;
//           break;
//       }
//   }
//   return result;
// };

// saveNote(note) {
//   return this._notes.push(note);
// };

// deleteNote(id) {
//   for (let i = 0, max = this._notes.length; i < max; i += 1) {
//       if (this._notes[i].id === id) {
//           this._notes.splice(i, 1);
//           return this;
//       }
//   }
// };

// updateNoteContent(id, updatedContent) {
//   for (let i = 0, max = this._notes.length; i < max; i += 1) {
//       if (this._notes[i].id === id) {
//           this._notes[i] = {
//               ...this._notes[i],
//               ...updatedContent
//           };
//           return this._notes[i];
//       }
//   }
// };

// updateNotePriority(id, priority) {
//   for (let i = 0, max = this._notes.length; i < max; i += 1) {
//       if (this._notes[i].id === id) {
//           this._notes[i].priority = priority;
//           return this._notes[i];
//       }
//   }
// };

// filterNotesByQuery(query) {
//   const queryArr = [];
//   for (let i = 0, max = this._notes.length; i < max; i += 1) {
//       const titleToLowerCase = this._notes[i].title.toLowerCase();
//       const bodyToLowerCase = this._notes[i].body.toLowerCase();
//       if (titleToLowerCase.includes(query) || bodyToLowerCase.includes(query)) {
//           queryArr.push(this._notes[i]);
//       }
//   }
//   return queryArr;
// };

// filterNotesByPriority(priority) {
//   const priorityArr = [];

//   for (let i = 0, max = this._notes.length; i < max; i += 1) {
//       if (this._notes[i].priority === priority) {
//           priorityArr.push(this._notes[i]);
//       }
//   }
//   return priorityArr;
// };

// static Priority = {
//   LOW: 0,
//   NORMAL: 1,
//   HIGH: 2,
// };

// }

//   /*
//    * Перенеси свойства и методы конструктора в класс
//    *
//    * Замени метод getNotes геттером, чтобы можно было обратиться как notepad.notes,
//    * для этого создай свойство _notes, в котором храни массив заметок,
//    * а геттер notes возвращает значение этого поля
//    *
//    * Добавь статическое свойство Priority используя ключевое слово static
//    */

// const initialNotes = [
//   {
//     id: 'id-1',
//     title: 'JavaScript essentials',
//     body:
//       'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
//     priority: Notepad.Priority.HIGH,
//   },
//   {
//     id: 'id-2',
//     title: 'Refresh HTML and CSS',
//     body:
//       'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
//     priority: Notepad.Priority.NORMAL,
//   },
// ];

// const notepad = new Notepad(initialNotes);

// /*
//   Смотрю что у меня в заметках после инициализации
// */
// console.log('Все текущие заметки: ', notepad.notes);

// /*
//  * Добавляю еще 2 заметки и смотрю что получилось
//  */
// notepad.saveNote({
//   id: 'id-3',
//   title: 'Get comfy with Frontend frameworks',
//   body:
//     'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
//   priority: Notepad.Priority.NORMAL,
// });

// notepad.saveNote({
//   id: 'id-4',
//   title: 'Winter clothes',
//   body:
//     "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
//   priority: Notepad.Priority.LOW,
// });

// console.log('Все текущие заметки: ', notepad.notes);

// /*
//  * Зима уже близко, пора поднять приоритет на покупку одежды
//  */
// notepad.updateNotePriority('id-4', Notepad.Priority.NORMAL);

// console.log('Заметки после обновления приоритета для id-4: ', notepad.notes);

// /*
//  * Решил что фреймворки отложу немного, понижаю приоритет
//  */
// notepad.updateNotePriority('id-3', Notepad.Priority.LOW);

// console.log('Заметки после обновления приоритета для id-3: ', notepad.notes);

// /*
//  * Решил отфильтровать заметки по слову html
//  */
// console.log(
//   'Отфильтровали заметки по ключевому слову "html": ',
//   notepad.filterNotesByQuery('html'),
// );

// /*
//  * Решил отфильтровать заметки по слову javascript
//  */
// console.log(
//   'Отфильтровали заметки по ключевому слову "javascript": ',
//   notepad.filterNotesByQuery('javascript'),
// );

// /*
//  * Хочу посмотреть только заметки с нормальным приоритетом
//  */
// console.log(
//   'Отфильтровали заметки по нормальному приоритету: ',
//   notepad.filterNotesByPriority(Notepad.Priority.NORMAL),
// );

// /*
//  * Обновим контент заметки с id-3
//  */
// notepad.updateNoteContent('id-3', {
//   title: 'Get comfy with React.js or Vue.js',
// });

// console.log(
//   'Заметки после обновления контента заметки с id-3: ',
//   notepad.notes,
// );

// /*
//  * Повторил HTML и CSS, удаляю запись c id-2
//  */
// notepad.deleteNote('id-2');
// console.log('Заметки после удаления с id -2: ', notepad.notes);








////=============task-01================
/*
  Напиши функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email. 
  
  В prototype функции-конструктора добавь метод getInfo(), 
  который выводит в консоль значения полей login и email. 
  
  Обрати внимание, метод всего один, в поле prototype функции-конструктора, 
  а использовать его смогут все экземпляры, по ссылке.
  
  Создать несколько экземпляров с разными значениями свойств, вывесди их в консоль.
*/

// const Account = function (login, email) {
//     this.login = login;
//     this.email = email;

// }

// Account.prototype.getInfo = function () {
//     console.log(this)
// }

// const account = new Account('Mangozedog', 'mango@dog.woof');
// const acc = new Account ('Usik', 'usik.mail')

// console.log(Account.prototype.getInfo); // function
// account.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
// acc.getInfo()






////=============task-02================


/*
  Напиши ES6 класс StringBuilder.
  
  На вход (в конструкторе) он получает один параметр string - строку,
  которую записывает в свойство _value.
  
  Добавь классу следующие методы:
  
    - геттер value - возвращает текущее значение поля _value
  
    - append(str) - получает парметр str (строку) и добавляет ее в конец _value
    
    - prepend(str) - получает парметр str (строку) и добавляет ее в начало value
  
    - pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value
*/

// class StringBuilder {
//     constructor(string) {
//         this._value = string;
//     }

//     get value() {
//         return this._value;
//     }

//     append(str) {
//         this._value = this._value.split('');
//         this._value.push(str);
//         this._value = this._value.join('');
//     }

//     prepend(str) {
//         this._value = this._value.split('');
//         this._value.unshift(str);
//         this._value = this._value.join('');
//     }

//     pad(str) {
//         this._value = this._value.split('');
//         this._value.push(str);
//         this._value.unshift(str);
//         this._value = this._value.join('');
//     }
// }

// const builder = new StringBuilder('.');


// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='




////=============task-03-04-05================


//  * Напиши класс Car с указанными свойствами и методами
 

// class Car {
//   constructor({
//     maxSpeed = 0
//   }) {
// //     /*
// //       Добавь свойства:
// //         - speed - для отслеживания текущей скорости, изначально 0.
// //         - maxSpeed - для хранения максимальной скорости 
// //         - running - для отслеживания заведен ли автомобиль, возможные значения true или false.
// //           Изначально false.
// //         - distance - содержит общий киллометраж, изначально с 0
    
//     this.speed = 0;
//     this.maxSpeed = maxSpeed;
//     this.running = false;
//     this.distance = 0;
//     this._value = '30 000 $';
// }


//   get value() {
//     console.log(this._value);
//   };

//   set value(val) {
//     this._value = val;
//     console.log(this._value);
//   }

//   turnOn() {
//     // Добавь код для того чтобы завести автомобиль
//     // Просто записывает в свойство running значание true
//     this.running = true;
//   }

//   turnOff() {
//     // Добавь код для того чтобы заглушить автомобиль
//     // Просто записывает в свойство running значание false
//     this.running = false;
//   }

//   accelerate(spd) {
//     // Записывает в поле speed полученное значение, при условии что
//     // оно не больше чем значение свойства maxSpeed
//     spd < this.maxSpeed ? this.speed = spd : null;
//   }

//   decelerate(spd) {
//     // Записывает в поле speed полученное значение, при условии что
//     // оно не больше чем значение свойства maxSpeed и не меньше нуля
//     spd < this.maxSpeed && spd > 0 ? this.speed = spd : null;
//   }

//   drive(hours) {
//     // Добавляет в поле distance киллометраж 
//     // (hours умноженное на значение поля speed),
//     // но только в том случае если машина заведена!
//     this.running ? this.distance = hours * this.speed : null;
//   }

//   static getSpecs(car) {
//     console.log(car.maxSpeed, car.speed, car.running, car.distance);
//   }
// }

// const MB = new Car({
//   maxSpeed: 100,
// });
// MB.turnOn();
// MB.accelerate(99);
// MB.decelerate(20);
// MB.drive(2);
// console.log(MB);
// MB.value = '50 000$'
// Car.getSpecs(MB);

// const car = new Car({
//   maxSpeed: 100,
// });
// car.turnOn();
// car.accelerate(50);
// car.drive(2);
// console.log(car)

// Car.getSpecs(car)

