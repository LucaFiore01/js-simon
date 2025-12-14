// seleziono gli elementi di O 
const contoAllaRovescia = document.getElementById('countdown')
const numeriPagina = document.querySelector('.form-control')
const bottoneConferma = document.querySelector('.btn-primary')
const listaNumeri = document.getElementById('numbers-list')


//imposto output num random da visualizzare in pagina
const numbers = getRandomNumTot(1, 50, 5);

console.log(numbers);


//creazione array numeri generati univoci
function getRandomNumTot (minNum, maxnum, tot) {

    const numArr = [];

    while (numArr.length < tot) {
        const randomNum = getRandomNum(minNum, maxnum);

        if(!numArr.includes(randomNum)) {
            numArr.push(randomNum);
        }
        
    }

    return numArr
}

// funzione che genera numeri random tra min e max
function getRandomNum(min, max){
    return Math.floor(Math.random() * (max - min +1)) +min;
}



// genero il countdown
// variabile di inizio conteggio 
let seconds = 30;

// inserisco output aggiornato con secondi
contoAllaRovescia.innerText = seconds--;


// gestisco l'aggiornamento dell'output
const clock = setInterval(() => {
    if(seconds == 0){
        clearInterval(clock); //blocco il timer arrivati al secondo 1\
        
        
    } else {
        seconds = seconds -1; 
        contoAllaRovescia.innerText = seconds; //output secondi aggiornato
    }

}, 1000)