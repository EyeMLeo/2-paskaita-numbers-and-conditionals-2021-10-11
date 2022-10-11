'use strict';
console.log('FILE age.js');


// let age = -11;
// console.log(typeof age);

// let isMarried = true;
// console.log("typeof isMarried", typeof isMarried);

// if (age < 0) {
//     console.log("neteisingai pateiktas amzius");
//   } else {
//     console.log(`Jusu amzius - ${age} m.`);
//   }

//   if (isMarried === true) {
//     console.log("vedes");
//   } else {
//     console.log(`nevedes`);
//   }


//   2.a Paprasyti is vartotojo ivesti 'taip' arba 'ne' su prompt() ir priklausomai nuo atsakymo atspausdinti tuos paciu atsakymus

//   let person = prompt("Please enter your name", "Harry Potter");
// let sign = prompt("What's your sign?");

// let taipArbaNe = prompt("Taip arba ne?");
//   document.getElementById("atsakymas").innerHTML =`Jusu atsakymas ${taipArbaNe}`;


//   const divEl = document.getElementById('result');
// divEl.innerHTML = sarasas;



// Deklaruokite du kintamuosius: name ir birthDay
// birthDay priskirkite tekstą “gegužės 12”
// name priskirkite tekstą kurį vartotojas įveda su prompt()

// let name2= prompt("iveskite varda")
// let birthDay= "gegužės 12";
// // Atspausdinkite viską konsolėje, pvz.: “Tomas yra gimęs gegužės 12”
// document.getElementById("gimtadienis").innerHTML =` ${name2} yra gimes ${birthDay}`;






// 4. Parašykite programą, kuri:
// Paprašyti įvesti prisijungimo vardą ir slaptažodį


// Jei vardas admin, slaptažodis turi būti “master”
// Jei vardas ne admin - tai slaptažodis yra: vardas ir skaičius 11. Pvz.: username: andrius, psw: andrius11
// “Sveiki, admin” arba “Neteisingas slaptažodis”
// Jei neiįvedė nieko - “Viso gero!”

let loginName = prompt("Iveskite varda")
let loginPassword = prompt("Iveskite slaptazodi")

if (loginName==="admin") {
    if (loginPassword==="master") {
        alert(`Sveiki ${loginName}`);        
    }else{
        alert(`Neteisingas slaptažodis`);     
    }

    
} else {

    if (loginPassword===`${loginName}11`) {
        alert(`Sveiki ${loginName}`);        
    }else{
        alert(`Neteisingas slaptažodis`);     
    }



}










