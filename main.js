
// Dato un array di oggetti letterali con: - url dell’immagine - titolo - descrizione
// Creare un carosello come nella foto allegata.


// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider 

// Milestone fatto e commentato


// .Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.  
// Al click dell’utente sulle frecce verso sinistra o destra, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.


// creiamo il container dove andremmo ad appendere tutti i div / img / tools

let container = document.getElementById("container");

let itemsContainer =document.getElementById("itemcontainer")


// creiamo il div con classe slider 

let slider = document.createElement("div");

slider.classList.add ("slider");


// aggiungiamo le frecce allo slider

let arrowDown = document.createElement("i");

let arrowUp = document.createElement("i");

arrowDown.classList.add("fa-solid" , "fa-arrow-down");

arrowUp.classList.add("fa-solid" , "fa-arrow-up");


// appendiamo slider al continer e le freccie allo slider

container.append(slider);

slider.append(arrowDown , arrowUp);


// Aggiungiamo il click alle freccie

arrowUp.addEventListener("click" ,
    function(){

    }
)


// creiamo array con tutte le img 

// let arrayImg = [
//     {
//         image: "img 2/01.webp",
//         // title:'',
//         // text: ''
//     } ,

//     {
//         image: 'img 2/02.webp',
//         // title:'',
//         // text: ''
//     } ,

//     {
//         image: 'img 2/03.webp',
//         // title:'',
//         // text: ''
//     } ,

//     {
//         image: 'img 2/04.webp',
//         // title:'',
//         // text: ''
//     } ,

//     {
//         image: 'img 2/05.webp',
//         // title:'',
//         // text: ''
//     }
    
// ];

// const arrayImg = [

// 'name' : 'img 2/01.webp' ,
// 'text' : 'sono il testo'
// ''
// 'name' : 'img 2/02.webp' ,
// 'text' : 'sono il testo'
// ''
// 'name' : 'img 2/03.webp' ,
// 'text' : 'sono il testo'
// ''
// 'name' : 'img 2/04.webp' ,
// 'text' : 'sono il testo'
// ''
// 'name' : 'img 2/05.webp' 

// 'text' : 'sono il testo'
// ''
// ]

// creiamo un ciclo for per inserire le img nel container


for (let i = 0; i < arrayImg.length; i++) {
    let itemImg = arrayImg[i]

    let itemContent = `
        <div class="item">
            <img src="${itemImg}">
        </div>`;


// inseriamo il nuovo elemento nel container 

itemsContainer.innerHTML += itemContent;

}



// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l’utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso sinistra

// .BONUS 1:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.

// BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.

// BONUS 3:
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.