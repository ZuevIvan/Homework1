//// задание 1

function fn(arr, callback){ 
    return callback(arr) 
    }; 
     
    const a = [7, 9, 25]; 
    function sum(arr){ 
    return arr.reduce((sum, current) => sum + current); 
    }; 
     
    function mult(arr){ 
        return arr.reduce((mult, current) => mult * current); 
    }; 
     
    console.log(fn(a, sum)); 
    console.log(fn(a, mult));

//// задание 2 


function compareNum(a, b) {
	return a - b;
}

function compareUser(a, b) { 
	if (a.age > b.age) return 1;
	if (a.age < b.age) return -1;
	return 0;
}

function sort(arr, compareFunction) {
    for (let i = 0; i < arr.length; i++) {
				for (let j = i; j < arr.length; j++) {
					
						const condition = compareFunction 
                            ? compareFunction(arr[i], arr[j]) > 0 
                            : arr[i].toNumber() > arr[j].toNumber(); 
						if (condition) {
								let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

const listUsers = [
	{name: 'Jon', age: 22},
	{name: 'Richard', age: 18},
	{name: 'Anton', age: 32},
	{name: 'Lida', age: 23},
	{name: 'Bob', age: 44}
];
listUsers.sort(compareUser); 
console.log(listUsers); 



/// задание 3


function each(arr, callback){ 
    return callback(arr); 
 }; 
  
 const b = [1, '4', 9, 'two']; 
  
 function reverseArr(arr){
     return arr.reverse(b); 
 }; 
  
 const c = [1,'4', false, 9, 'two']; 
  
 function numberArr(arr){ 
     return (c.map(Number)). filter(item => isNan(item) === false); 
 }     
  
 console.log(each (b, reverseArr)); 
 console.log(each (c, reverseArr));


/// задание 4 

const timer = (deadline) => {
    const interval = setInterval(() => {
        console.log(new Date());
    }, 3000);

    setTimeout (() => {
        clearInterval(interval);
        console.log(30 секунд прошло);
    }, deadline * 1000)
}

timer(30);




/// задание 5 

function calling() {
    console.log('Звоню!');
};

function beeps(callback) {
    setTimeout(() => {
        console.log('Идут гудки...')
        callback();
    }, 1000);
}

function talk() {
    console.log('Разговор')
}

calling();
beeps(talk);