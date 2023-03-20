//* Задание №1 *//
let password = 'пароль';
let passwordUser = String(prompt('Введите пароль'));
passwordUser = passwordUser.toLowerCase(); //на случай ввода пароля с большой буквы
alert(passwordUser === 'пароль' ? 'Пароль введен верно' : 'Пароль введен неправильно');

//* Задание №2 *//
let с = Number(prompt('Введите любое число'));
alert (с > 0 && с < 10 ? 'Верно' : 'Неверно'  );

//* Задание №3 *//
let d = Number(prompt('Введите любое число'));
let e = Number(prompt('Введите любое число'));
console.log (e > 100 || d > 100 ? 'Верно' : 'Неверно');

//* Задание №4 *//
let а = '2';
let b = '3';
а = Number(а); 
b = Number(b);
alert(а + b);

//* Задание 5 *//
let monthNumber = Number(prompt('Введите номер месяца'));
if (monthNumber > 12 || monthNumber <1) {console.log('Я не знаю такого месяца')}; 

switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        console.log('Зима');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Весна');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Лето');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Осень');
        break;
    default:
        console.log('Я не знаю такого месяца');
        break;
}

//* Задание 7 *//

let a = Number(prompt('Введите первое число'));
let x = a % 2;//если остаток от деления 1 - то нечетное, если NaN - ввели не число
if (x === 0) {alert('Четное');}
else if (x > 0 || x < 0) {alert('Нечетное');}
else if (isNaN(x)) {alert('Ввели не число');}

//* Задание 8 *//
let clientOS =prompt('Пользователь заходит с телефона').toLowerCase(); //0-iOS, 1-Android
clientOS = clientOS.toLowerCase();
if (clientOS === 'android') {alert('Установите версию приложения для Android по ссылке')} 
else if (clientOS === 'ios') {alert('Установите версию приложения для iOS по ссылке');}
else {alert('Я не знаю, что это за модель телефона');}

//* Задание 9 *//
let clientS = String(prompt('Пользователь заходит с телефона')); //0-iOS, 1-Android
let clientDeviceYear = Number(prompt('Год выпуска вашего телефона')); //2015 или свежее
clientS = clientS.toLowerCase();
if (clientS === 'android' && clientDeviceYear < 2015) {alert('Установите облегченную версию приложения для Android по ссылке');}
if (clientS === 'android' && clientDeviceYear >= 2015) {alert('Установите версию приложения для Android по ссылке');}
if (clientS === 'ios' && clientDeviceYear < 2015) {alert('Установите облегченную версию приложения для iOS по ссылке');}
if (clientS === 'ios' && clientDeviceYear >= 2015) {alert('Установите версию приложения для iOS по ссылке');}