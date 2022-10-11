'use strict';
console.log('FILE kintamieji.js');


// 5 Sukurkite kodą, kuris sukurs penkis atsitiktinius skaičius
// (skaičiai negali būti didesni nei 10) ir juos priskirs kintamiesiems, kurie turi iki dviejų skaičių po kablelio;
// Tada suraskite ir atspausdinkite, kuris iš sukurtų skaičių yra:
// didžiausias;
// mažiausias.

let num1= (Math.random()*10).toFixed(2);
let num2= (Math.random()*10).toFixed(2);
let num3= (Math.random()*10).toFixed(2);
let num4= (Math.random()*10).toFixed(2);
let num5= (Math.random()*10).toFixed(2);


console.log(num1)
console.log(num2)
console.log(num3)
console.log(num4)
console.log(num5)

console.log(`"maximum" ${Math.max( num1, num2, num3,num4,num5 )}`);
console.log(`"minimum" ${Math.min( num1, num2, num3,num4,num5 )}`);
