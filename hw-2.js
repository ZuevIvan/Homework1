//* Задание №1 *//
let а = 10;
alert(а);
а = 20;
alert(а);

//* Задание №2 *//
let firstYearIPhone = 2007
alert('Первый год выпуска iPhone - это ' + firstYearIPhone + ' год.');

//* Задание №3 *//
let creatorOfJS = "Брендан Эйх";
confirm(`Создатель языка JavaSkript - это ${creatorOfJS}.`);

//* Задание №4 *//
let x = 10; y = 2;
alert(x + y);
alert(x - y);
alert(x * y);
alert(x / y);

//* Задание №5 *//
let result = 2 ** 5;
alert(result);

//* Задание №6 *//
let a = 9; b = 2;
alert(a % b);

//* Задание №7 *//
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num = ++num;
num = --num;
alert(num);

//* Задание №8 *//
let age = prompt('Сколько вам лет?');
alert("Вам " + age + " лет.");

//* Задание №9 *//
const user = {
    name: 'Ivan',
    age: 24,
    isAdmin: true,
    colorOfHair: 'black',
    weight: '68 kg'
}
alert(user.name); //вызываем любое свойство из объекта "user"

//* Задание №9.1 *// способ с .
//добавляем новое свойство в "user"
user.cityOfResidence = 'Istanbul'
alert(user.cityOfResidence);

//* Задание №9.1 *// способ с []
//добавляем новое свойство в "user"
user['cityOfResidence'] = 'Istanbul'

//* Задание №9.2 *//
//изменяем свойство age в "user"
user.age = 20

//* Задание №9.3 *// способ с .
//удалить свойство "cityOfResidence"
delete user.cityOfResidence
console.log(user); //проверка
alert(cityOfResidence); //выводит undefined, значит не определено

//* Задание №9.3 *// способ с []
//удалить свойство "cityOfResidence"
delete user['cityOfResidence']
console.log(user); //проверка
alert(cityOfResidence); //выводит undefined, значит не определено

//* Задание №9.4 *//
let info = prompt('Какую информацию хотите узнать о пользователе?');
alert(user[info]);

//* Задание №10 *//
let nameOfUser = prompt('Какое Ваше имя?');
alert("Привет " + nameOfUser + " !");