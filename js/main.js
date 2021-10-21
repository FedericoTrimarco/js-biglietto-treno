/* 

Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va scritto in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. 

*/

// Km DA PERCORRERE ED ETA' DEL PASSEGGERO

const km = parseFloat( prompt('quanti km vuoi percorrere?') );
console.log(`Km: ${km}`);

const age = parseInt( prompt('quanti anni hai?') );
console.log(`age: ${age}`);



// CALCOLO PREZZO BIGLIETTO MINORENNI & 0VER 65

let ticket = km * 0.21;
console.log(`ticket: ${ticket.toFixed(2)}`);

if(age < 18){
    ticket -= (ticket * 20) / 100;
    console.log(`ticket for baby: ${ticket.toFixed(2)}`);
}else if(age > 65){
    ticket -= (ticket * 40) / 100;
    console.log(`ticket for over 65: ${ticket.toFixed(2)}`);
}

// OUTPUT
document.getElementById('ticket').innerHTML = `il tuo biglietto costa: ${ticket.toFixed(2)}`