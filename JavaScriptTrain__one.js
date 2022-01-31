/*--------------------Раздел Объекты ---------------*/

/*---------------------Задача 1 -------------------*/
/*
const user = { name: "John", surname: "Smith"};

user.name = "Pete";
delete user.name;
*/
/*---------------------Задача 2 -------------------*/
/*
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}
*/
/*---------------------Задача 3 -------------------*/
/*
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
  let sum =0;
  for (let key in salaries) {
      return sum += salaries[key];
  }
  console.log (sum);
*/
/*---------------------Задача 4 -------------------*/
/*
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof key == 'number') {
        obj[key] *= 2;
        }
    }
}
*/
/*--------------------Раздел Методы объекта ---------------*/

/*---------------------Задача 1 -------------------*/
/*
let calculator = {
    sum() {
      return this.a + this.b;
    },
  
    mul() {
      return this.a * this.b;
    },
  
    read() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );
  */
 /*---------------------Задача 2 -------------------*/
/*
 let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // показывает текущую ступеньку
      alert( this.step );
      return this;
    }
  };
  */

  /*--------------------Раздел Конструктор ---------------*/

/*---------------------Задача 1 -------------------*/
/*
function Accumulator(startingValue) {
    this.value = startingValue;
  
    this.read = function() {
      this.value += +prompt('Сколько нужно добавить?', 0);
    };
  
  }
  
  let accumulator = new Accumulator(1);
  accumulator.read();
  accumulator.read();
  alert(accumulator.value);
  */
   /*--------------------Раздел Массивы ---------------*/

/*---------------------Задача 1 -------------------*/
/*
let styles = [ "Джаз", "Блюз"];
console.log(styles);
styles.push("Рок-н-ролл");
console.log(styles);
styles[Math.floor((styles.length -1) / 2)] = "Классика";
console.log(styles);
styles.shift();
console.log(styles);
styles.unshift("Рэп", "Рэгги");
console.log(styles);
*/

/*---------------------Задача 2 -------------------*/
/*
function sumInput () {
    let numbers = [];

    while (true) {
        let value = +prompt ("Введите число", 0);
        if (value === '' || value === null || !isFinite) {
            numbers.push(+value);
        }
        let sum = 0;
        for (let number of numbers) {
            sum += number;
        }
    }
    
    return sum;
}
*/
/*---------------------Задача 3 -------------------*/
/*
function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum =0;


  for (let item of arr) {
    partialSum += item;
    maxSum = Math.max (maxSum, partialSum);
    if (partialSum <0) partialSum =0;
  }
  return maxSum;
}
*/
  /*--------------------Раздел Методы Массивов ---------------*/

/*---------------------Задача 1 -------------------*/
/*
function camelize(str) {
  return str.split('-').map((word, index) => index == 0 ? word: word[0].toUpperCase()+ word.slice(1))
  .join('');
}
*/
/*---------------------Задача 2 -------------------*/
/*
function filterRange(arr, a, b) {
  return arr.filter( item => (a <= item && item <= b));
}
let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);
*/
/*---------------------Задача 3 -------------------*/
/*
function filterRangeInPlace(arr, a, b) {
  for ( let i = 0; i <= arr.lenght; i++) {
    let val = arr[i];
    if (val< a || val > b) {
      arr.splice (i , 1);
      i--;
    }
  }
}
*/
/*---------------------Задача 4 -------------------*/
/*
let arr = [5, 2, 1, -10, 8];

arr.sort( (a,b) => b-a);

console.log(arr);
*/

/*---------------------Задача 5 -------------------*/
/*
function copySorted(arr) {
  return arr.splice().sort();
}
*/

/*---------------------Задача 6 (Разобрать еще раз) -------------------*/
/*
function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {

    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2]

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  }

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}
*/
/*---------------------Задача 7 -------------------*/
/*
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map (item => item.name)

alert( names );
*/

/*---------------------Задача 8 -------------------*/
/*
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map( user => ( { fullName: `${user.name} ${user.surname}`, id: user.id}));
*/

/*---------------------Задача 9 -------------------*/
/*
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

sortByAge(arr);

function sortByAge(arr) {
  arr.sort((a, b) => a.age > b.age ? 1 : -1);
}
console.log (arr);
console.log (sortByAge(arr));
*/
/*---------------------Задача 10 -------------------*/
/*
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

let arr = [1, 2, 3];
shuffle(arr);
alert(arr);
*/

/*---------------------Задача 11 -------------------*/
/*
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

function getAverageAge(users) {
  return users.reduce ( (prev, user) => prev + user.age, 0)/ users.length;
}
*/
/*---------------------Задача 12 -------------------*/
/*

function unique(arr) {
  let result = [];

  for( let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) );
*/