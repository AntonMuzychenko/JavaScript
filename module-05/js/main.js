"use strict"


// Конструктор Notepad при инициализации принимает массив заметок
const Notepad = function Notepad(notes = []) {
        this.notes = notes;
        this.getNotes = function() {
            return this.notes
          
          /*
           * Принимает: ничего
           * Возвращает: все заметки, значение свойства notes
           */
        },
        this.findNoteById= function(id) {
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
        this.saveNote = function(note) {
            this.notes.push(note);
        
          /*
           * Сохраняет заметку в массив notes
           *
           * Принимает: объект заметки
           * Возвращает: сохраненную заметку
           */
          return this.note;
        },
        this.deleteNote = function(id) {
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
        this.updateNoteContent = function(id, updatedContent) {
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
        this.updateNotePriority = function(id, priority) {
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
        this.filterNotesByQuery = function(query) {
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
        this.filterNotesByPriority = function(priority) {
          const priorityArr = [];
          for (let i = 0; i < this.notes.length; i++ ) {
            if (this.notes[i].priority === priority) {
              priorityArr.push(this.notes[i]);
            }
            return priorityArr;
          }
          /*
           * Фильтрует массив заметок по значению приоритета
           * Если значение priority совпадает с приоритетом заметки - она подходит
           *
           * Принимает: приоритет для поиска в свойстве priority заметки
           * Возвращает: новый массив заметок с подходящим приоритетом
           */
        }
      
    // Перенеси свойства и методы объекта notepad в конструктор
  };
  
  // Добавляем статическое свойство, в котором храним приоритеты.
  Notepad.Priority = {
    LOW: 0,
    NORMAL: 1,
    HIGH: 2,
  };









const initialNotes = [
  {
    id: 'id-1',
    title: 'JavaScript essentials',
    body:
      'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
    priority: Notepad.Priority.HIGH,
  },
  {
    id: 'id-2',
    title: 'Refresh HTML and CSS',
    body:
      'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
    priority: Notepad.Priority.NORMAL,
  },
];

const notepad = new Notepad(initialNotes);

/*
 * Смотрю что у меня в заметках после инициализации
 */
console.log('Все текущие заметки: ', notepad.getNotes());

/*
 * Добавляю еще 2 заметки и смотрю что получилось
 */
notepad.saveNote({
  id: 'id-3',
  title: 'Get comfy with Frontend frameworks',
  body:
    'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
  priority: Notepad.Priority.NORMAL,
});

notepad.saveNote({
  id: 'id-4',
  title: 'Winter clothes',
  body:
    "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
  priority: Notepad.Priority.LOW,
});

console.log('Все текущие заметки: ', notepad.getNotes());

/*
 * Зима уже близко, пора поднять приоритет на покупку одежды
 */
notepad.updateNotePriority('id-4', Notepad.Priority.NORMAL);

console.log(
  'Заметки после обновления приоритета для id-4: ',
  notepad.getNotes(),
);

/*
 * Решил что фреймворки отложу немного, понижаю приоритет
 */
notepad.updateNotePriority('id-3', Notepad.Priority.LOW);

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
  notepad.filterNotesByPriority(Notepad.Priority.NORMAL),
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




















/*  
 * Расставь отсутствующие this в методах объекта account
*/
//==============task-01======
// const account = {
//     owner: "Mango",
//     balance: 24000,
//     discount: 0.1,
//     orders: ["order-1", "order-2", "order-3"],
//     changeDiscount(value) {
//         this.discount = value;
//     },
//     getOrders() {
//         return this.orders;
//     },
//     addOrder(cost, order) {
//         this.balance -= cost;
//         this.orders.push(order);
//     }
// };

// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15

// const orders = account.getOrders();
// console.log(orders); // ['order-1', 'order-2', 'order-3']

// account.addOrder(5000, "order-4");
// console.log(account.balance); // 19000
// console.log(account.orders); // ['order-1', 'order-2', 'order-3', 'order-4']


//==============task-02======

/*  
* Расставь отсутствующие this в конструкторе Account
*/

// function Account(login, password, type = "regular") {
    //     this.login = login;
    //     this.password = password;
    //     this.type = type;
    
    //     this.changePassword = function(newPassword) {
        //       this.password = newPassword;
        //     };
        
        //     this.getInfo = function() {
            //       console.log(`
            //         Login: ${login}, 
            //         Pass: ${password}, 
            //         Type: ${type}
            //       `);
            //     };
            //   }
            
            //   const account = new Account("Mango", "qwe123", "premium");
            
            //   console.log(account.login); // 'Mango'
            //   console.log(account.password); // 'qwe123'
            //   console.log(account.type); // 'premium'
            
            //   account.changePassword("asdzxc");
            //   console.log(account.password); // 'asdzxc'
            
            //   account.getInfo(); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'
           
           
           
            //==============task-03======
            
            /*  
            Напиши функцию-конструкор User для создания 
            пользователя со следующим свойствами:
            - name - строка (имя)
            - age - число (возраст)
            - friends - число (кол-во друзей)
            
            Имя, активность, возраст и друзей, 
            будут переданы при вызове конструктора User.
            
            Добавь метод getInfo(), который, выводит строку:
            `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`
            */
           // const User = function({name, age, friends}) {
               //     this.name = name;
               //     this.age = age;
               //     this.friends = friends; 
               
               //     this.getInfo = function (){
                   //       console.log(`User ${this.name} is ${this.age} years old and has ${this.friengs} friends`);
                   //     };
                   //   };
                   
                   
                   //   const mango = new User({ name: "Mango", age: 2, friends: 20 });
                   //   mango.getInfo(); // User Mango is 2 years old and has 20 friends
                   
                   //   const poly = new User({ name: "Poly", age: 3, friends: 17 });
                   //   poly.getInfo(); // User Poly is 3 years old and has 17 friends
                   
          
                   //==============task-04======

                   /*  
 * Напиши конструктор Storage(items), который будет создавать объекты для управления складом товаров
 * При вызове будет получать один аргумент - начальный массив товаров, и записываеть его в свойство items
 *
 * Добавь метод getItems, который возвращает массив текущих товаров
 * Добавь метод addItem(item), который получает новый товар и добавляет его к текущим
 * Добавь метод removeItem(item), который получет товар и, если он есть, удаляет его из текущих
*/

// const Storage = function(item) {
//     this.items = item;
  
//     this.getItems = function() {
//       return this.items;
//     }
  
//     this.addItem = function (item) {
//       this.items.push(item);
//       return this.items;
//     }
  
//     this.removeItem = function(item) {
//       for(let i = 0; i < this.items.length; i++) {
//         if (this.items[i] === item) {
//           this.items.splice(i, 1);
//           return this.item;
//         }
//       }
//     }
//   }
  
//   const storage = new Storage([
//     "Нанитоиды",
//     "Пролонгер",
//     "Железные жупи",
//     "Антигравитатор"
//   ]);
  
//   const items = storage.getItems();
//   console.log(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
  
//   storage.addItem("Дроид");
//   console.log(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
  
//   storage.removeItem("Пролонгер");
//   console.log(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]