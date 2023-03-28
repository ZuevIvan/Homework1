// задание 1

const numbs = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbs.length; i++) {
	if (numbs[i] == 10) break;
	console.log(numbs[i]);
}

// задание 2


const numbers = [1, 5, 4, 10, 0, 3];
console.log(numbers.indexOf(4));
console.log(`Позиция числа 4 в массиве - ${numbers.indexOf(4)}`);


// задание 3

let numbs = [1, 3, 5, 10, 20];
numbs = numbs.join (' ')
console.log(numbs);

// задание 4

let arr = [];
for (let i = 0; i < 3; i++) {
  arr[i] = []; // создаем пустой массив
  for (let j = 0; j < 3; j++) {
    arr[i][j] = 1; // заполняем массив единицами
  }
}
console.log(arr); // выводим многомерный массив в консоль

// задание 5 

let numbers = [1, 1, 1];
numbers.push (2, 2, 2)
console.log(numbers);

// задание 6 

let arr = [9, 8, 7, 'a', 6, 5];
arr = arr.sort()
console.log(arr.pop());
console.log(arr);


// задание 7

let arr = [9, 8, 7, 6, 5];
search = arr.includes(Number(prompt(`Введите число от 0 до 10`)));
if (search) {console.log(`Есть такое число`);}
else if(!search) {console.log(`Нет такого числа`);}

// задание 8

let str = 'abcdef';
a = str.split('');
b = a.reverse ();
c = b.join ('');
console.log(c);

// задание 9

let arr = [
    [1, 2, 3,],
    [4, 5, 6]
];
let newArr = [...arr[0], ...arr[1]];//объединение массивов через оператор spread
console.log(newArr);

// задание 10

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr.length - 1; i++) {
    if (i < arr.length) {console.log(arr[i] + arr[i + 1]);
    } else if (i === arr.length) {console.log(arr[i]);}
}

// задание 11

let arr = [5, 6, 7, 8];
let result = arr.map(item => item ** 2);
console.log(result);


// задание 12

let getLengthWords = ['слово', '', 'слог', 'длинное предложение', 'буква'];
let newGetLengthWords = getLengthWords.map(item => item.length);
console.log(newGetLengthWords);


// задание 13

let arr = [10, -5, -4, 3, 99, -34, 7, 5, -1, -25, 5];
let result = arr.filter(item => item < 0)
console.log(result);

// задание 14

let arr = [];//создаем пустой массив
let min = 0;
let max = 10;
let count = 10;//длинна массива

for ( let i = min; i < count; ++i ) {
    arr.push( Math.round(Math.random() * (max - min)) + min);//Math.round - округление до ближайшего целого
                                                //Math.random - возвращает случайное число в диапазоне от 0 (включительно) до 1 (но не включая 1)
}

let arrNew = arr.filter(item => ((item % 2) === 0));//оставляем только четные элементы массива
console.log(arr);//рандомный массив из 10 элементов
console.log(arrNew);//рандомный массив, только с четными элементами


// задание 15

let arr = [];//создаем пустой массив
let min = 1;
let max = 10;
let count = 10;//длинна массива

for ( let i = min; i < count; ++i ) {
    arr.push( Math.round(Math.random() * (max - min)) + min);//Math.round - округление до ближайшего целого
    //Math.random - возвращает случайное число в диапазоне от 0 (включительно) до 1 (но не включая 1)
}
console.log(arr);

let arrNew = arr.reduce((a, b) => a + b);//сумма всех элементов массива
let sum = arrNew / count;
console.log(arrNew);//сумма всех элементов массива
console.log(sum);//среднее арифметическое