'use strict'




const userInfoOutput = document.getElementById('main');



// const divEl = document.getElementById('result');
// divEl.textContent = 547;

// let sarasas = `
//   <ul>
//     <li>one</li>
//     <li>two</li>
//     <li>three</li>
//   </ul>
// `;

// // nusitaikyti i el su id result
// const divEl = document.getElementById('result');
// divEl.innerHTML = sarasas;



const user = {
    vardas: "Vardenis",
    pavarde: "Pavardenis",

  };

console.log(user.vardas);
console.log(user.pavarde);



 let printText= `<h2>User information</h2>
 <p> Vartotojo vardas yra ${user.vardas}, o pavarde ${user.pavarde}</p>`

console.log(printText);


main.innerHTML=printText;



// Nuskaito ivedus----------------------------------------------------------------

const vardas = document.getElementById('vardas');
const pavarde = document.getElementById('pavarde');



