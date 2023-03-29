// задание 1
let product = 'банан';
console.log(product.toUpperCase());


// задание 2 

const products = ['Москва', 'город москва', 'остановка', 'Станция МОСКВА'];
const search = 'москва';

products.forEach((product) => {
	if (product.toLowerCase().includes(search.toLowerCase())) {
		console.log(product);
	}
});

//  задание 3

x = Math.floor (32.58884);
console.log(x);

x = Math.ceil(32.58884);
console.log(x);

x = Math.round(32.58884);
console.log(x);


// задание 4 

x = Math.max (52, 53, 49, 77, 21, 32);
console.log(x);
x = Math.min (52, 53, 49, 77, 21, 32);
console.log(x);

//  задание 5


function random ( minValue , maxValue){
    return Math.round( Math.random() * maxValue);
}
console.log(random(0 , 10));

// задание 6


let aws = Number(prompt("Введите число"));
function getRandomArr( length = Math.floor(aws/2)){
    return Array.from(Array(length), () => Math.floor(Math.random()*aws)+1)
}
const random = getRandomArr();
console.log(random);


// задание 7 

let min = Number(prompt('Назовите минимальное число'))
let max = Number(prompt('Назовите максимальное число'))

console.log(Math.round(Math.random() * (max-min)) + min);



// задание 8 

let myDate = new Date("3/29/2023");
console.log(myDate); 


// задание 9 

let currentDate = new Date (2023, 02 , 29, 20, 00);
console.log(currentDate);
currentDate.setDate (73);
console.log(currentDate);



// задание 10


const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let myDate = new Date();
let rusDate = "Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + " - это " + days[myDate.getDay()].toLowerCase();
let rusTime = "Время: " + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();
console.log(rusDate);
console.log(rusTime);