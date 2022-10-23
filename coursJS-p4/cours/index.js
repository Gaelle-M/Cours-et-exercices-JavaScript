//XMLHttpRequest(commenter pour pas gener les autres codes)

function reqListener() {
  console.log(this.responseText);
}

let req = new XMLHttpRequest();
req.onload = reqListener;
// req.open('get', 'data.txt', true);
// req.open('get', 'data.json', true);
// req.open("get", "https://api.blablagues.net/?rub=blagues", true);
// req.send();

//-----------------------------------------------------------
//Fetch(commenter pour pas gener les autres codes)

//Partie théhotique du fetch
// fetch("monlien", "objet d'options").then((response) => {
//   console.log(response)
// }).catch((err) => console.log(err));

// fetch("data.txt")
//   .then((res) => res.text())
//   .then((data) => console.log(data));

fetch("data.json").then((res) => res.json());
// .then((data) => console.log(data));

//--------------------------------------------------------
//Les options de requête

const myHeaders = new Headers();
const init = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};

// fetch("data.json", init).then((res) => console.log(res));
const init2 = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    pseudo: "Gaelle",
    message: "29",
  }),
  mode: "cors",
  credential: "same-origin",
};

document.querySelector("form").addEventListener("submit", () => {
  fetch("http://localhost:3000/users", init2).then(() =>
    console.log("data envoyée")
  );
});

//---------------------------------------------------------
//L'asynchrone (commenter pour ne pas gener les autres codes)

//setTimeout
// setTimeout(() => {
//   // console.log("test");
// }, 2000);

//Promise
// fetch("monlien").then((res) => res);

// //Async/await

// async function fetchData() {
//   await fetch("monlien");
//attend que le await soit exécuté avant de faire la suite

//   executeFonction();
// }

// const fetchData2 = async () => {
//   await fetch("monlien");
//   //attend que le await soit exécuté avant de faire la suite

//   executeFonction();
// }

//---------------------------------------------------------
//Le JSON (commenter pour pas gener les autres)

// fetch("data.json")
//   .then((res) => res.json())
//   .then((data) => {
//     let settings = JSON.stringify(data);
//     console.log(settings);
//     console.log(JSON.parse(settings));
//   });

//---------------------------------------------------------
//Les web API : Local Storage / Session storage
// 1. Local Storage
// localStorage.data = "Je stock la data"; //stocker la data
// localStorage.removeItem("data"); //supprimer la data
// document.body.textContent = localStorage.data; // récupérer la data

// const obj = {
//   name: "Denis",
//   age: 22,
// };
// localStorage.user = JSON.stringify(obj);
// console.log(JSON.parse(localStorage.user));

//2. Session Storage

// sessionStorage.dataSettings = "55px";//stock la data provisirement
// sessionStorage.clear();//supprmier la data

//---------------------------------------------------------
//Les cookies

document.cookie = "username=Gaelle";

//Bonne pratique
document.cookie = "Pseudo=Gaelle; path=/; max-age=450000; secure; samesite";
