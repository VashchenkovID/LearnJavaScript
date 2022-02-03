/* -------------------- Map и Set ---------------/
/* ---------------------Задача 1 ---------------*/

/*
function unique(arr) {
    return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); 
*/
/* ---------------------Задача 2 ---------------*/
/*
function alclean( arr) {
    let map = new Map();

    for (let word of arr) {
        word.toLowerCase().split('').sort().join();
        map.set(sorted, word);
    }
    return Array.from(map.values());
}
*/
/* -------------------- Деструктурирующее присванивание ---------------/
/* ---------------------Задача 1 ---------------*/



/*--------------------------------------------------ПРАКТИКА------------*/
/*-------------------------------------Задача 1-------------------------*/
/*
function fibonachi(n) {
    if ( n <=0) {
        return 0;
    }
    let prev = 1;
    let result = 1;

    for (let i = 0; i < n -2; i++) {
        let npm = result;
        result += prev;
        prev = npm;
    }
    return result;
}
console.log (fibonachi(7));
*/
/*-------------------------------------Задача 2-------------------------*/
/*===================Палиндром
let pal = "abba"
function palindrom(pal) {
   pal = pal.toLowerCase();
   for ( let i = 0; i < pal.length; i++) {
       if (pal [i] !== pal[pal.length - i -1]) {
           return false;
       }
      
   }
   return true;
}
console.log (palindrom(pal));
*/
/*-------------------------------------Задача 3-------------------------*/

// Дан словарь из городов и дат выступлений рок-группы
/// Необходимо преобразовать словарь (key-value) в массив из названий городов
/// Вывод городов должен быть в хронологическом порядке
/// Города в которых концерт прошел нужно исключить
/// Итог [ Казань, Питер, Калининград]
/* не работает
const concerts = {
    'Москва': new Date ('2020-04-01'),
    'Казань':new Date ('2021-07-02'),
    'Владивосток': new Date ('2020-04-21'),
    'Калининград': new Date ('2021-07-15'),
    'Омск': new Date ('2020-04-18'),
    'Питер': new Date ('2020-07-18'),
}
function objectToArray (concerts) {
    return Object.keys(concerts)
    .filter (sity => concerts[sity]> new Date())
    .sort((a, b) => concerts[a]- concerts[b])
}
console.log(objectToArray (concerts));
*/

/*-------------------------------------Задача 4-------------------------*/
function descendingOrder(n){
  n.toString();
  
  return n;
}
console.log( descendingOrder(5431));