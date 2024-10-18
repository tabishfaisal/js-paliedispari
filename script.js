//Palidroma //

// Chiedere all’utente di inserire una parola 
// Creare una funzione per capire se la parola inserita è palindroma

// prima fase chiedo l'utente di inserire una Parola
 const parolaUtente = prompt("inserisci una parola");

 // Genero una funzione per verificare se la parola inserita è una palindroma?
  
function isWordpalindroma (parola){
    return parola === parola.split('').reverse().join('');
}
if(isWordpalindroma(parolaUtente)){
    console. log(`La parola '${parolaUtente}' è un palindromo.`);
} else {
    console. log(`La parola "${parolaUtente}" non è palindroma`);
}