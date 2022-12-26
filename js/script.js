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

// creo un array contenente i dati dei vari post

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
    author: "Luca Suffizzi",
    date: "11/17/2022",
    postMessage:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    postImage: "https://unsplash.it/600/300",
    likeNumber: 13,
  },
  {
    id: 5,
    author: "Andrea Padoano",
    date: "12/05/2022",
    postMessage:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    postImage: "https://unsplash.it/600/300",
    likeNumber: 62,
  },
];

// prendo gli elementi dal dom

const container = document.getElementById("container");

console.log(container);

// gestisco il caso in cui la userPicture manchi
function postUserLetters() {
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].userPicture === undefined) {
      function getFirstLetters(str) {
        const firstLetters = str
          .split(" ")
          .map((word) => word[0])
          .join("");

        return firstLetters;
      }
      posts[i].userPicture = getFirstLetters(posts[i].author);
    }
  }
}

// creo una funzione per cambiare il formato della data

const changeDateFormat = () => {
  for (i = 0; i < posts.length; i++) {
    let newDateFormat = posts[i].date.split(/\//);
    newDateFormat = [newDateFormat[1], newDateFormat[0], newDateFormat[2]].join(
      "/"
    );

    console.log(newDateFormat);
    posts[i].date = newDateFormat;
  }
};

// chiamo la funzione

changeDateFormat();

// creo una funzione che stampi i post sulla pagina
let post = " ";

for (let i = 0; i < posts.length; i++) {
  post += `<div class="post">
    <div class="post__header">
          <div class="post-meta">
            <div class="post-meta__icon"></div>
            <div class="post-meta__data">
              <div class="post-meta__author">${posts[i].author}</div>
              <div class="post-meta__time">${posts[i].date}</div>
            </div>
          </div>
        </div>
        <div class="post__text">${posts[i].postMessage}</div>
        <div class="post__image">
          <img src="${posts[i].postImage}" alt="" />
        </div>
        <div class="post__footer">
          <div class="likes js-likes">
            <div class="likes__cta">
              <button class="like-button js-like-button" href="#" data-postid="${posts[i].id}">
                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                <span class="like-button__label">Mi Piace</span>
              </button>
            </div>
            <div class="likes__counter">Piace a <b id="like-counter-${posts[i].id}" class="js-likes-counter">${posts[i].likeNumber}</b> persone</div>
          </div>
          </div>
          </div>`;
}

container.innerHTML = post;

// prendo il bottone e il contatore dei mi piace dal dom

const button = document.querySelectorAll("button.js-like-button");
let likeCounter = document.querySelectorAll("b");

// creo un ciclo for per aggiungere l'event listener ai bottoni mi piace e modificare di conseguenza il contatore

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () => {
    if (button[i].classList.contains("like-button--liked")) {
      likeCounter[i].innerText--;
    } else {
      likeCounter[i].innerText++;
    }
    button[i].classList.toggle("like-button--liked");
  });
}

postUserLetters();

// creo un userPicture sostituta

const profilePic = document.querySelectorAll(".post-meta__icon");

for (let i = 0; i < posts.length; i++) {
  if (posts[i].userPicture.length === 2) {
    profilePic[
      i
    ].innerHTML = `<div class="profile-pic-default"><span>${posts[i].userPicture}</span></div>`;
  } else {
    profilePic[
      i
    ].innerHTML = `<img class="profile-pic" src="${posts[i].userPicture}" alt="${posts.author}" />`;
  }
}

console.log(posts);
