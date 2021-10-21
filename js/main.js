// Variabili
let km;
let age;
// let ticket;

// Km DA PERCORRERE ED ETA' DEL PASSEGGERO
function calcKm(){
    km = parseFloat( prompt('quanti km vuoi percorrere?') );
    document.getElementById('km').innerHTML = `Km: ${km.toFixed(2)}`
}

function calcAge(){
    age = parseInt( prompt('quanti anni hai?') );
    document.getElementById('age').innerHTML = `Anni: ${age}`
}
// CALCOLO PREZZO
function calcPrice(){

    if( isNaN(km) || isNaN(age) ){
        alert("i dati inseriti non sono validi, ricaricare la pagina");
        document.getElementById('ticket').innerHTML = `! DATI NON VALIDI !`
    }
    // CALCOLO PREZZO BIGLIETTO MINORENNI & 0VER 65
    else{
    
        let ticket = km * 0.21;
    
        if(age < 18){
          ticket -= (ticket * 20) / 100;
    
        }else if(age > 65){
          ticket -= (ticket * 40) / 100;
        }
    
        document.getElementById('ticket').innerHTML = `il tuo biglietto costa: ${ticket.toFixed(2)}€`
    }
}
