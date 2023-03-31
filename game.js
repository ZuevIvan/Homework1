function gameFirst() {
    let mN = Number(prompt(`Введите номер месяца`));
    if (mN >= 1 && mN <= 2 || mN === 12 ) {return alert(`Это зима`);} 
    else if (mN >= 3 && mN <= 5 ) {return alert(`Это весна`);}
    else if (mN >= 6 && mN <= 8 ) {return alert(`Это лето`);}
    else if (mN >= 9 && mN <= 11 ) {return alert(`Это осень`);}
    else if (isNaN(mN) === true ) {return alert(`Ты втираешь мне какую-то ДИЧЬ!!!`);}   
}

let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
fruits = fruits.sort(() => Math.random() - 0.5);
alert(fruits);

function riddle(quest, fruits){
   quest = quest.toLowerCase();
   if(quest == fruits){

       alert("Верно.");
       answer++;
   }else{
       alert("Сожалею, это неправильный ответ.");
   }
}
var quest1 = prompt("Чему равнялся первый элемент массива?");
    riddle(quest1, fruits[0]);

var quest2 = prompt("Чему равнялся последний элемент массива?");
    riddle(quest2, fruits[6]);