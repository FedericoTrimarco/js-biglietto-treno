/* 

Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va scritto in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. 

*/

// Km DA PERCORRERE ED ETA' DEL PASSEGGERO
const km = parseInt( prompt('quanti km vuoi percorrere?') );
console.log(`Km: ${km}`);

const age = parseInt( prompt('quanti anni hai?') );
console.log(`age: ${age}`);

// CALCOLO PREZZO BIGLIETTO
const ticket = km * 0.21;
console.log(`ticket: ${ticket}`);