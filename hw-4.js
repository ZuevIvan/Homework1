//* Задание 1 *//
let v = 0;
while (v < 2) {console.log('Привет'); v++} //через While
do {console.log('Привет'); v++} while (v < 2); //через Do...While

//* Задание 2 *//
let c = 1;
while (c < 6) {console.log(c); c++} //через While
for (let c = 1; c < 6; i++) {console.log(c);} //через For

//* Задание 3 *//
for (let i = 7; i < 24; i++) {console.log(i);}

//* Задание 4 *//
const obj = {
    'Коля': 200,
    'Вася': 300,
    'Петя': 400,}
for (const nameOfUser in obj) {
console.log((nameOfUser) + ' - зарплата ' + (obj[nameOfUser]) + ' $');
};

// //* Задание 5 *//
let i = 0; //число циклов
let n = 1000; //начальное значение
while (n/2 > 50) {n = n/2; t++}
console.log('Получилось число ' + n + ' На операцию понадобилось ' + i + ' цикла(ов).');

//* Задание 6 *//
for(let i = Number(prompt("Введите первую пятницу месяца")); i <= 31; i = i + 7) 
{console.log(`Сегодня пятница ${i}-е число. Необходимо подготовить отчет.`);}