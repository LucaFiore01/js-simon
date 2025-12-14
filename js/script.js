// seleziono gli elementi di O 
const contoAllaRovescia = document.getElementById('countdown')
const numeriPagina = document.querySelector('.form-control')
const bottoneConferma = document.querySelector('.btn-primary')

// genero il countdown
// variabile di inizio conteggio 
let seconds = 30;

// inserisco output aggiornato con secondi
contoAllaRovescia.innerText = seconds--;

// gestisco l'aggiornamento dell'output
const clock = setInterval(() => {
    if(seconds == 1){
        clearInterval(clock); //blocco il timer arrivati al secondo 1
        
    } else {
        seconds = seconds -1; 
        contoAllaRovescia.innerText = seconds; //output secondi aggiornato
    }

}, 1000)

