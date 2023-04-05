function gameFirst() {
    let mN = Number(prompt(`Введите номер месяца`));
    if (mN >= 1 && mN <= 2 || mN === 12 ) {return alert(`Это зима`);} 
    else if (mN >= 3 && mN <= 5 ) {return alert(`Это весна`);}
    else if (mN >= 6 && mN <= 8 ) {return alert(`Это лето`);}
    else if (mN >= 9 && mN <= 11 ) {return alert(`Это осень`);}
    else if (isNaN(mN) === true ) {return alert(`Ты втираешь мне какую-то ДИЧЬ!!!`);}   
}

function gameSecond(){
    const fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'].sort(() => Math.random() - 0.5)

    alert(fruits)
    
    let firstUserAnswer = (String(prompt("Чему равнялся первый элемент массива?"))).toLowerCase();
    
    let secondUserAnswer = (String(prompt("Чему равнялся последний элемент массива?"))).toLowerCase();
    
    let firstElem = fruits[0].toLowerCase();
    let secondElem = fruits[6].toLowerCase();
    if (firstUserAnswer === firstElem && secondUserAnswer === secondElem) {alert("Все верно!");} 
    else if (firstUserAnswer === firstElem || secondUserAnswer === secondElem) {alert("Вы были близки к победе!");}
    else if (firstUserAnswer != firstElem && secondUserAnswer != secondElem) {alert("Все неверно");}
    
}

