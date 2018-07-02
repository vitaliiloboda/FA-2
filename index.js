'use strict';

let userInput;
let total = 0;
const numbers = [];

do {
  userInput = prompt('Введите число:');
  
  if ((userInput == "") || (!(Number.isInteger(+userInput)))) {
    alert('Было введено не число, попробуйте еще раз');
  } else {
    if (userInput !== null) {
      numbers.push(Number(userInput));
    }
  }

 
} while(userInput !== null);

for (const value of numbers) {
  total = total + value;
}

if (numbers.length > 0) {
  alert(`Общая сумма чисел равна ${total}`);
}

