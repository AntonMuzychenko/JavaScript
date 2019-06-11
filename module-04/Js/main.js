'use strict';
const Priority = {
    LOW: 0,
    NORMAL: 1,
    HIGH: 2,
  };


  const notepad = {
  notes: [],
  getNotes() {
      return this.notes
    
    /*
     * Принимает: ничего
     * Возвращает: все заметки, значение свойства notes
     */
  },
  findNoteById(id) {
      for(let elem of notes){
          if (elem.id === id){
           return elem;
      }
    }
    /*
     * Ищет заметку в массиве notes
     *
     * Принимает: идентификатор заметки
     * Возвращает: заметку с совпавшим полем id или undefined если ничего не найдено
     */
  },
  saveNote(note) {
      this.notes.push(note);

    /*
     * Сохраняет заметку в массив notes
     *
     * Принимает: объект заметки
     * Возвращает: сохраненную заметку
     */
    return this.note;
  },
  deleteNote(id) {
    for(let i = 0; i < this.notes.length; i++){
        if (this.notes[i].id === id)
        this.notes.splice(i, 1);
    }
    /*
     * Удаляет заметку по идентификатору из массива notes
     *
     * Принимает: идентификатор заметки
     * Возвращает: ничего
     */
  },
  updateNoteContent(id, updatedContent) {
    for (let i = 0; i < this.notes.length; i++) {
      if (this.notes[i].id === id) {
        this.notes[i] = {
          ...this.notes[i],
          ...updatedContent,
        };
        return this.notes[i];
      }
    }
    /*
     * Обновляет контент заметки
     * updatedContent - объект с полями вида {имя: значение, имя: значение}
     * Свойств в объекте updatedContent может быть произвольное количество
     *
     * Принимает: идентификатор заметки и объект, полями которого надо обновить заметку
     * Возвращает: обновленную заметку
     */
  },
  updateNotePriority(id, priority) {
    for (let i = 0; i < this.notes.length; i++) {
      if (this.notes[i].id === id) {
        this.notes[i].priority = priority;
        return this.notes[i];
      }
    }
    /*
     * Обновляет приоритет заметки
     *
     * Принимает: идентификатор заметки и ее новый приоритет
     * Возвращает: обновленную заметку
     */
  },
  filterNotesByQuery(query) {
    const newArr = [];
    for (let i = 0; i < this.notes.length; i++ ) {
      const titleToLowerCase = this.notes[i].title.toLowerCase();
      const bodyToLowerCase = this.notes[i].body.toLowerCase();
      if (titleToLowerCase.includes(query) || bodyToLowerCase.includes(query)) {
        newArr.push(this.notes[i]);
      }
    }
    return newArr;
    /*
     * Фильтрует массив заметок по подстроке query.
     * Если значение query есть в заголовке или теле заметки - она подходит
     *
     * Принимает: подстроку для поиска в title и body заметки
     * Возвращает: новый массив заметок, контент которых содержит подстроку
     */
  },
  filterNotesByPriority(priority) {
    const priorityArr = [];
    for (let i = 0; i < this.notes.length; i++ ) {
      if (this.notes[i].priority === priority) {
        priorityArr.push(this.notes[i]);
      }
    }
    return priorityArr;
    /*
     * Фильтрует массив заметок по значению приоритета
     * Если значение priority совпадает с приоритетом заметки - она подходит
     *
     * Принимает: приоритет для поиска в свойстве priority заметки
     * Возвращает: новый массив заметок с подходящим приоритетом
     */
  },
};
/*
 * Добавляю 4 заметки и смотрю что получилось
 */
notepad.saveNote({
    id: 'id-1',
    title: 'JavaScript essentials',
    body:
      'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
    priority: Priority.HIGH,
  });
  
  notepad.saveNote({
    id: 'id-2',
    title: 'Refresh HTML and CSS',
    body:
      'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
    priority: Priority.NORMAL,
  });
  
  notepad.saveNote({
    id: 'id-3',
    title: 'Get comfy with Frontend frameworks',
    body:
      'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
    priority: Priority.NORMAL,
  });
  
  notepad.saveNote({
    id: 'id-4',
    title: 'Winter clothes',
    body:
      "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
    priority: Priority.LOW,
  });
  
  console.log('Все текущие заметки: ', notepad.getNotes());
  
  /*
   * Зима уже близко, пора поднять приоритет на покупку одежды
   */
  notepad.updateNotePriority('id-4', Priority.NORMAL);
  
  console.log(
    'Заметки после обновления приоритета для id-4: ',
    notepad.getNotes(),
  );
  
  /*
   * Решил что фреймворки отложу немного, понижаю приоритет
   */
  notepad.updateNotePriority('id-3', Priority.LOW);
  
  console.log(
    'Заметки после обновления приоритета для id-3: ',
    notepad.getNotes(),
  );
  
  /*
   * Решил отфильтровать заметки по слову html
   */
  console.log(
    'Отфильтровали заметки по ключевому слову "html": ',
    notepad.filterNotesByQuery('html'),
  );
  
  /*
   * Решил отфильтровать заметки по слову javascript
   */
  console.log(
    'Отфильтровали заметки по ключевому слову "javascript": ',
    notepad.filterNotesByQuery('javascript'),
  );
  
  /*
   * Хочу посмотреть только заметки с нормальным приоритетом
   */
  console.log(
    'Отфильтровали заметки по нормальному приоритету: ',
    notepad.filterNotesByPriority(Priority.NORMAL),
  );
  
  /*
   * Обновим контент заметки с id-3
   */
  notepad.updateNoteContent('id-3', {
    title: 'Get comfy with React.js or Vue.js',
  });
  
  console.log(
    'Заметки после обновления контента заметки с id-3: ',
    notepad.getNotes(),
  );
  
  /*
   * Повторил HTML и CSS, удаляю запись c id-2
   */
  notepad.deleteNote('id-2');
  console.log('Заметки после удаления с id -2: ', notepad.getNotes());






















// ==========================================
// ===============task-1=========
// const user = {
//     name: "Mango",
//     age: 20,
//     hobby: "html",
// Напиши скрипт, который, для объекта user, последовательно: 

// - добавляет поле mood со значением 'happy'

// - заменяет значение hobby на 'javascript'

// - заменяет значение premium на false

// - выводит содержимое объекта user в формате ключ:значение 
// используя Object.keys и for...of

// - выводит содержимое объекта user в формате ключ:значение 
// используя Object.entries и for...of
// */
//     premium: true
//   };

//   user.mood = 'happy';
//   user.hobby = 'javascript';
//   user.premium = false;
// //   console.log(user);
//   const keys = Object.keys(user);
//   const values = Object.values(user);

//       console.log(keys);
//       console.log(values);
//       for(let i = 0; i < keys.length; i++){
//           console.log(`${keys[i]} - ${values[i]}`);
//       }

//   const entries = Object.entries(user);
//       for(let key of entries){
//       console.log(`${key[0]} - ${key[1]}`);
//       }



//  =================task-2=========
/*
Напиши скрипт который определит и выведет в консоль 
имя сотрудника который выполнил больше всех задач.

Сотрудники и кол-во выполненых задач содержатся 
как свойства объекта в формате "имя":"кол-во задач"
*/

// const tasksCompleted = {
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99
//   };
// let keys = Object.keys(tasksCompleted);
// let max = tasksCompleted[keys[0]];
// let maxKey = keys[0];
// for(let key of keys){
//     if(tasksCompleted[key] > max){
//         max = tasksCompleted[key];
//         maxKey = key;
//     }
// }
// console.log(`${maxKey} ${max}`);



//  =================task-3=========

/*  
Напиши функцию countProps(obj), считающую кол-во свойств в объекте.
Функция возвращает количество свойств.
// */
// function countProps(obj) {
//         return Object.entries(obj).length;
// }

// // Вызовы функции для проверки
// console.log(
//     countProps({})
//   ); // 0

//   console.log(
//     countProps({a: 1, b: 3, c: 'hello'})
//   ); // 3 

//  =================task-4=========


/*  
Напиши функцию isObjectEmpty(obj), которая получает 
один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).

Возвращает true если объект пустой, false если не пустой.
*/
// function isObjectEmpty(obj){
//         if(Object.entries(obj).length === 0) {
//           return true;
//         }
//         return false;
//       }

// // Вызовы функции для проверки
// console.log(
//     isObjectEmpty({})
//   ); // true

//   console.log(
//     isObjectEmpty({a: 1})
//   ); // false

//   console.log(
//     isObjectEmpty({a: 1, b: 2})
//   ); // false


//  =================task-5=========

/*  
Напиши функцию countTotalSalary(salaries). 

Функция получает объект зарплат и считает общую сумму запрплаты работников.
Возвращает общую сумму зарплаты.

Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата"
*/
// function countTotalSalary(salaries){
//     let mass = Object.values(salaries);
//     let summ = 0;
//     for(let key of mass){
//         summ += key;

//     }
//     return summ;
// }
// // Вызовы функции для проверки
// console.log(
//     countTotalSalary({})
//   ); // 0

//   console.log(
//     countTotalSalary({
//       mango: 100,
//       poly: 150,
//       alfred: 80
//     })
//   ); // 330


//  =================task-6=========

/*  
Напиши функцию getAllPropValues(arr, prop), 
которая получает массив объектов и имя ключа. 
Возвращает массив значений определенного поля prop
из каждого объекта в массиве
*/
// const users = [
//     { name: 'Poly', age: 7, mood: 'happy' },
//     { name: 'Mango', age: 4, mood: 'blissful'},
//     { name: 'Ajax', age: 3, mood: 'tired' }
// ];
// function getAllPropValues(arr,prop){
//    let mass = [];
//     for(let key of arr){
//         mass.push(key[prop])
//     //   console.log(key[prop]);
//     }
//     return mass;
// }


//   // Вызовы функции для проверки
//   console.log(
//     getAllPropValues(users, 'name')
//   ); // ['Poly', 'Mango', 'Ajax']

//   console.log(
//     getAllPropValues(users, 'mood')
//   ); // ['happy', 'blissful', 'tired']

//   console.log(
//     getAllPropValues(users, 'active')
//    ); // []


//  =================task-7=========

/*
* Есть два массива names и prices с именами и ценами товаров.
* Напишите функцию combine(names, prices), которая получает 
* эти два массива и возвращает массив объектов со свойствами name и price. 
*/

// const names = ['Радар', 'Сканер', 'Дроид', 'Захват', 'Двигатель', 'Топливный бак'];
// const prices = [1000, 2000, 1500, 2700, 1600, 8000];
// function combine(names,prices){
// let mass = [];
// for (let i = 0; i < names.length; i++) {
//     const name = names[i];
//     const price = prices[i];

//     const newObj = {
//         name,
//         price,
//     };

//     mass.push(newObj);
// }
// return mass;
// }


// const products = combine(names, prices);
// console.log(products); // массив объектов со свойствами name и price
