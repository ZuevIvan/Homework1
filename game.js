function game() {
    let mN = Number(prompt(`Введите номер месяца`));
    if (mN >= 1 && mN <= 2 || mN === 12 ) {return console.log(`Это зима`);} 
    else if (mN >= 3 && mN <= 5 ) {return console.log(`Это весна`);}
    else if (mN >= 6 && mN <= 8 ) {return console.log(`Это лето`);}
    else if (mN >= 9 && mN <= 11 ) {return console.log(`Это осень`);}
    else if (isNaN(mN) === true ) {return console.log(`Ты втираешь мне какую-то ДИЧЬ!!!`);}   
}