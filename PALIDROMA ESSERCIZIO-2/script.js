// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
// Dichiariamo chi ha vinto.

// chiedere a utente per fare la scelta dei numeri pari o dispari e di inserice il numero da 1 a 5
const numeroGenere = prompt("scegli i numeri pari o dispari");
console. log(numeroGenere);

const numeroUtente = parseInt(prompt("inserisci un numero da 1 a 5"));
console. log(numeroUtente);

// Creo una Function per Generare numero ramdon per il Computer da 1 a 5.
function numerRandom(){
    return Math.floor ( Math.random () * 5) + 1;
} // uso il varibile chiamato numeroComputer per il numero gereato per computer
const numeroComputer = numerRandom();
console. log(numeroComputer);

// Creo una Function per fare la somma dei numeri per stablire se sono "Pari" o "Dispari".
function sumofNumbers(num1, num2){
   const sum = num1 + num2;
   return sum % 2 === 0;
}
const result = sumofNumbers(numeroComputer, numeroUtente);
console. log(`La somma di ${numeroComputer} , ${numeroUtente} is ${result}`);

