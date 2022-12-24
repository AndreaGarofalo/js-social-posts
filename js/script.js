// # Descrizione
// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
// # Milestone 1
// Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// - id del post, numero progressivo da 1 a n
// - nome autore,
// - foto autore (potrebbe mancare a qualcuno),
// - data in formato americano (mm-gg-yyyy),
// - testo del post,
// - immagine (non tutti i post devono avere una immagine),
// - numero di likes.
// *Non è necessario creare date casuali, inventatele*
// *Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=3)*
// #Milestone 2
// Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
// #Milestone 3
// Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
// # ****BONUS**
//  1. Formattare le date in formato italiano (gg/mm/aaaa)
//  2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola  => LF).
//  3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.

const posts = [
  {
    id: 1,
    userPicture: "https://unsplash.it/300/300",
    author: "Phil Mangione",
    date: "08/28/2022",
    postMessage:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    postImage: "https://unsplash.it/600/300",
    likeNumber: 80,
  },
  {
    id: 2,
    userPicture: "https://unsplash.it/300/300?image=15",
    author: "Sofia Perlani",
    date: "09/13/2022",
    postMessage:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    postImage: "https://unsplash.it/600/300",
    likeNumber: 26,
  },
  {
    id: 3,
    userPicture: "https://unsplash.it/300/300?image=15",
    author: "Gianmarco Giangianni",
    date: "10/26/2022",
    postMessage:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    postImage: "https://unsplash.it/600/300",
    likeNumber: 45,
  },
  {
    id: 4,
    userPicture: "https://unsplash.it/300/300?image=15",
    author: "Luca Suffizzi",
    date: "11/17/2022",
    postMessage:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    postImage: "https://unsplash.it/600/300",
    likeNumber: 13,
  },
  {
    id: 5,
    userPicture: "https://unsplash.it/300/300?image=15",
    author: "Andrea Padoano",
    date: "12/05/2022",
    postMessage:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    postImage: "https://unsplash.it/600/300",
    likeNumber: 62,
  },
];
