 'use strict'

 /*
   Есть массив logins с логинами пользователей. Напишите скрипт добавления логина в массив logins.
   
   Добавляемый логин должен:
     - проходить проверку на длину от 4 до 16-ти символов включительно
     - быть уникален, то есть отсутствовать в массиве logins
  
   🔔 Разбейте задачу на подзадачи с помощью функций.
   
   Напишите функцию isLoginValid(login), в которой проверьте количество символов 
   параметра login и верните true или false в зависимости от того, попадает ли длина параметра 
   в заданный диапазон от 4-х до 16-ти символов включительно.
  
   Создайте функцию isLoginUnique(allLogins, login), которая принимает логин и список 
   всех логинов как параметры и проверяет наличие login в массиве allLogins, возвращая true 
   если такого логина еще нет и false если логин уже используется.
   Далее напишите функцию addLogin(allLogins, login) которая:
     - Принимает новый логин и массив всех логинов как параметры
     - Проверяет валидность логина используя вспомогательную функцию isLoginValid
     - Если логин не валиден, прекратить исполнение функции addLogin 
       и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'
     - Если логин валиден, функция addLogin проверяеть уникальность логина 
       с помощью функции isLoginUnique
     - Если isLoginUnique вернет true, addLogin добавляет новый логин 
        в logins и возвращает строку 'Логин успешно добавлен!'
     - Если isLoginUnique вернет false, тогда addLogin не добавляет 
        логин в массив и возвращает строку 'Такой логин уже используется!'
        
   🔔 Принцип единственной ответственности функции - каждая функция делает что-то одно. Это 
      позволяет переиспользовать код и изменять логику работы функции только в одном месте, 
      не затрагивая работу программы в целом. Предикатные функции возвращают только true или 
      false. Такие функции принято называть начиная с is: isLoginUnique и isLoginValid в нашем случае.
       - isLoginUnique только проверяет есть ли такой логин в массиве и возвращает true или false. 
       - isLoginValid только проверяет валидный ли логин и возвращает true или false.
       - addLogin добавляет или не добавляет логин в массив. При этом для проверок условия добавления 
         используются результаты вызовов других функций - isLoginUnique и isLoginValid.
 */

 const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

 const isLoginValid = function (login) {
   if (login.length >= 4 && login.length <= 16) {
     return true;
   }
   return false; // код
 }

 const isLoginUnique = function (allLogins, login) {
   if (allLogins.includes(login)) {
     return false;
     // код
   }
   return true;
 };
 const addLogin = function (allLogins, login) {
   if (!isLoginValid(login)) {
     console.log('Ошибка! Логин должен быть от 4 до 16 символов');
   } else {
     if (isLoginUnique(allLogins, login)) {
       allLogins.push(login);
       console.log('Логин успешно добавлен!');
      } else {
        console.log('Такой логин уже используется!');
     }
   }
 }
 console.log(logins);
 // Вызовы функции для проверки
 addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
 addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
 addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
 addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'



















 //  /*
 //   Напиши функцию checkNumberType(num)

 //   Функция получает число num как аргумент и возвращает 
 //   строку "Even" если число четное и строку "Odd" если не четное.
 // */
 //  function checkNumberType(num)  {
 //  if(num % 2 === 0) {
 //    return 'even';
 //  }
 //  return 'odd';
 //  }

 // // Вызовы функции для проверки
 // console.log( checkNumberType(2) ); // 'Even'
 // console.log( checkNumberType(46) ); // 'Even'

 // console.log( checkNumberType(3) ); // 'Odd'

 // console.log( checkNumberType(17) ); // 'Odd'


 // =============dop 2===== //

 // Напиши функцию formatString(str)

 // - Функия принимает на вход строку str
 // - Если длина строки не превышает 40 символов, функция возвращает ее. 
 // - Если длина больше 40 символов, то функция обрезает строку до 40-ка
 //   символов и добавляет в конец строки троеточие '...', после чего 
 //   возвращает укороченную версию.
 // // *////
 // function formatString(str){
 //   if(str.length <= 40 ){
 //   return  str;
 // }else {
 //   let lg = str.slice(0, 40) + '...';
 //   return lg;
 // }
 // }
 // // Вызовы функции для проверки
 // console.log(
 // formatString("Curabitur ligula sapien, tincidunt non.")
 // ); // вернется оригинальная строка

 // console.log(
 // formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
 // ); // вернется форматированная строка

 // console.log(
 // formatString("Curabitur ligula sapien.")
 // ); // вернется оригинальная строка

 // console.log(
 // formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.")
 // ); // вернется форматированная строка



 // ============ dop 3===============


 /*
   Напиши функцию checkForSpam(str)
   
   Функция принимает 1 параметр str - строку,
   и проверять ее на содержание слов: spam и sale
   
   Если нашли зарещенное слово то функция возвращает true,
   если запрещенных слов нет функция возвращает false
   
   PS: слова могут быть в произвольном регистре
 */
 // function checkForSpam(str){
 //  if(str.toLowerCase().includes('spam') || (str.toLowerCase().includes('sale'))){
 //   return true;
 //  }
 //  return false;
 //  }


 // // Вызовы функции для проверки
 // console.log( checkForSpam('Latest technology news') ); // false

 // console.log( checkForSpam('JavaScript weekly newsletter') ); // false

 // console.log( checkForSpam('Get best sale offers now!') ); // true

 // console.log( checkForSpam('[SPAM] How to earn fast money?') ); // true



 //========================dop 4=======
 /*  
 Написать функцию, getPx(str) 

 Функция getPx должна получать строку вида '10px',
 проверять была ли передана строка, если да, 
 возвращать только числовую составляющую, к примеру 10.

 Если была передана не строка, функция возвращает null.
 */
 // function getPx(str){
 //   if( typeof str === 'string'){
 //     return Number.parseFloat(str);
 //   }
 //   return null;
 // }
 // // Вызовы функции для проверки
 // console.log( getPx("10px") === 10 ); // true
 // console.log( getPx("10.5") === 10.5 ); // true
 // console.log( getPx("0") === 0 ); // true
 // console.log( getPx(-1) ); // null
 // console.log( getPx(10) ); // null


 //========================dop 5=======
 /*  
 Напиши фукнцию findLongestWord(str), которая принимает 
 параметром произвольную строку и возвращает самое длинное слово в этой строке.   
 
 Важное условие - в строке могут быть только пробелы, символы букв и цифр!
 */

 // function findLongestWord(str) {
 //   let longestWord = '';
 //    for (let key of str.split(' ')) {
 //      if (key.length > longestWord.length) {
 //        longestWord = key;
 //      }
 //    }
 //    return longestWord;
 //  }

 // function findLongestWord(str) {
 //   let longWord = '';
 //   const arr = str.split(' ');
 //   console.log(arr);
 //   for(let i = 0; i < arr.length; i++){
 //     if(longWord.length < arr[i].length){
 //       longWord = arr[i];
 //     }
 //   }
 //  return longWord;
 //  }

 //  // Вызовы функции для проверки
 //  console.log(
 //    findLongestWord("The quick brown fox jumped over the lazy dog")
 //  ); // 'jumped'

 //  console.log(
 //    findLongestWord("Google do a roll")
 //  ); // 'Google'

 //  console.log(
 //    findLongestWord("May the force be with you")
 //  ); // 'force'



 //========================dop 6=======

 /*  
 Напиши функцию findLargestNumber(numbers), 
 которая получает массив чисел numbers, и возвращает 
 самое большое число в массиве.
 */
 //  function findLargestNumber(numbers) {
 //     let n = 0;
 //     for (let key of numbers){
 //       if (n < key) {
 //         n = key;
 //       }
 //     }
 //     return n;

 //     // let num = 0;
 //     // for (let i = 0; i < numbers.length; i++) {
 //     //  if (num < numbers[i]) {
 //     //    num = numbers[i];
 //     //  }
 //     // }
 //     // return num;

 //  }

 //  // Вызовы функции для проверки
 //  console.log(
 //    findLargestNumber([1, 2, 3])
 //  ); // 3

 //  console.log(
 //    findLargestNumber([27, 12, 18, 5])
 //  ); // 27

 //  console.log(
 //    findLargestNumber([31, 128, 14, 74])
 //  ); // 128



 //========================dop 7=======

 /*  
 Есть массив уникальных чисел uniqueNumbers.
 
 Написать функцию, addUniqueNumbers(...), 
 которая получает произвольное кол-во чисел как аргументы, 
 и добавляет в массив uniqueNumbers только уникальные,
 а те которые в массиве уже есть игнорирует.
 // */
 //  const uniqueNumbers = [2, 1, 4, 9];

 //  function addUniqueNumbers(...rest) {
 //    for (let key of rest) {
 //      if (!uniqueNumbers.includes(key)) {
 //        uniqueNumbers.push(key)
 //      }
 //      }
 //      return uniqueNumbers;
 //  }
 //      // Вызовы функции для проверки
 //      addUniqueNumbers(1, 2, 3);
 //      console.log(
 //        uniqueNumbers
 //      ); // [2, 1, 4, 9, 3]

 //      addUniqueNumbers(12, 2, 3, 19);
 //      console.log(
 //        uniqueNumbers
 //      ); // [2, 1, 4, 9, 3, 12, 19]

 //      addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
 //      console.log(
 //        uniqueNumbers
 //      ); // [2, 1, 4, 9, 3, 12, 19, 5, 8]   






 //========================dop 8=======



 /*
   Напиши функцию filterFromArray(arr), которая 
   объявляет 1 параметр, исходный массив arr.
   
   При вызове функции, первым аргументом всегда будет массив чисел,
   за которым следуют один или несколько аргументов, тоже чисел. 
   
   Функция возвращает новый массив, который содержит только 
   те элементы исходного массива, которые не совпадают 
   ни с одним из числовых аргументов.
 */

 //  const filterFromArray = function(mass, ...arr) {
 //    for(let key of mass) {
 //        if(!arr.includes(key)) {
 //            console.log(key)
 //        }   
 //       }
 //     }


 // // Вызовы функции для проверки
 // console.log(
 //   filterFromArray([1, 2, 3, 4, 5], 2, 4)
 // ); // [1, 3, 5]

 // console.log(
 //   filterFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
 // ); // [12, 8, 17]