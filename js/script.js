'use strict'

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




// const userInfoOutput = document.getElementById('main');

// const vardas = document.getElementById('vardas');
// const pavarde = document.getElementById('pavarde');
// const ivesti = document.getElementById('ivesti');


// function ivesti() {
//     const vardas = document.getElementById('vardas');
//     const pavarde = document.getElementById('pavarde');
// }



// console.log(user.vardas);
// console.log(user.pavarde);



//  let printText= `<h2>User information</h2>
//  <p> Vartotojo vardas yra ${user.vardas}, o pavarde ${user.pavarde}</p>`

// console.log(printText);


// main.innerHTML=printText;



// Nuskaito ivedus----------------------------------------------------------------

// const vardas = document.getElementById('vardas');
// const pavarde = document.getElementById('pavarde');



// const vardas = 'Iveastas vardas';
// const pavarde = 'Ivesta pavarde';




// NUSKAITYMO DALIS

    // --- IVESTAS VARDAS PAGAUNAMAS
    const vardasEl = document.getElementById('vardas');

    // --- IVESTAS VARDAS PAGAUNAMAS
    const pavardeEl = document.getElementById('pavarde');

    // --- MYGTUKO PASPAUDIMO ELEMENTAS
    const onClickRunScriptEl = document.getElementById('onClickRunScript');

// --- IVESTAS TEKSTAS PERMETAMS I USER OBJEKTA
const user = {
    vardasEl,
    pavardeEl,
  };



// --- IVESTAS TEKSTAS PO !PASPAUDIMO! I JAVASCRIPT
function onClickRunScript() {



// --- IVESTA TEKSTA PERMETAME I STRINGA SU KITU TEKSTU
 let printText= `<h2>User information</h2>
 <p> Vartotojo vardas yra ${user.vardasEl}, o pavarde ${user.pavardeEl}</p>`


// --- PARODOME IVESTA STRINGA HTML'E
main.innerHTML=printText;



}




