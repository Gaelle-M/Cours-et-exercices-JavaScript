//Exercice 1 = quiz capitale Suisse
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});
btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});

//-----------------------------------------------------------------
//Exercie 2 = Mouse event : Cercle qui suit la souris
const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});
window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(50%, 50%)";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});
questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "pink";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

//--------------------------------------------------------------------------------------
// Exercice 3 = keypress event : afficher la lettre tapé + ajouter du son sur une touche
const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = () => {
  const audio = new Audio();
  audio.src = "./Enter.mp3";
  audio.play();
};

document.addEventListener("keydown", (e) => {
  key.textContent = e.key;

  if (e.key === "j") {
    keypressContainer.style.background = "pink";
  } else if (e.key === "h") {
    keypressContainer.style.background = "teal";
  } else {
    keypressContainer.style.background = "orange";
  }

  ring();
});

//---------------------------------------------------------------------------------
//Exercice 4 = scroll event : faire apparaitre et disparaitre une navbar au scroll

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

//-----------------------------------------------------------------------------------------------------------
// Exercice 5 = form event : afficher les valeurs du formulaire + validation formulaire après acceptation cgv
const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (cgv.checked) {
    document.querySelector("form > div").innerHTML = `
    <h3>Pseudo : ${pseudo}</h3>
    <h4>Langage préféré : ${language}</h4>
    `;
  } else {
    alert("Veuillez accepter les CGV");
  }
});

//------------------------------------------------------------------------------
//Exercice 6 = load event : charger un document après que toute la page le soit

window.addEventListener("load", () => {
  console.log("doc chargé");
});

//-----------------------------------------------------------------------------------------------
// Exercice 7 = ForEach : sélectionner plusieurs éléments en même temps pour faire la même action

// const boxes = document.getElementsByClassName("box");
const boxes = document.querySelectorAll(".box");

console.log(boxes);

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.target.style.transform = "scale(0.7)";
  });
});

//----------------------------------------------------------------------
//addEventListener vs onClick
//(autre méthode (partie commenter pour ne pas intérférer sur les autres parties))
// document.body.onclick = function() {
//   console.log("click");
// }

document.body.addEventListener(
  "click",
  () => {
    console.log("click 1");
  },
  false
);

document.body.addEventListener(
  "click",
  () => {
    console.log("click 2");
  },
  true
);

//---------------------------------------------------------------------------------
// (partie commenter pour ne pas intérférer sur les autres parties)

// questionContainer.addEventListener("click", (e) => {
//  alert("test");
//   e.stopPropagation();
// });

//-----------------------------------------------------------------------------
//Le BOM
//open()
//(partie commenter pour ne pas intérférer sur les autres parties)
// window.open("http://google.com", "cours js", "height=600, width=800");
// windows.close();

//confirm
btn2.addEventListener("click", () => {
  confirm("Voulez vous-vraiment vous tromper ?");
});

//prompt
btn1.addEventListener("click", () => {
  let answer = prompt("Entrez votre nom");

  questionContainer.innerHTML = "<h3>Bravo " + answer + "</h3>";
});

//setTimeout (partie commenter pour ne pas intérférer sur les autres parties)
// setTimeout(() => {
//   questionContainer.style.borderRadius = "300px";
// }, 2000);

//setInterval (partie commenter pour ne pas intérférer sur les autres parties)
// let interval = setInterval(() => {
//   document.body.innerHTML += `<div class='box'>
//      <h2>Nouvelle boite</h2>
//    </div>`;
// }, 1000);

// window.addEventListener("click", () => {
//   clearInterval(interval);
// });

//objet location (partie commenter pour ne pas intérférer sur les autres parties)
// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);
// location.replace("http://google.com");

//objet navigator
console.log(navigator.userAgent);

//objet history
// (partie commenter pour ne pas intérférer sur les autres parties)
// console.log(history);
// window.history.back();
// history.go(-2);

//----------------------------------------------------------------------
//setProperty
window.addEventListener("mousemove", (e) => {
  nav.style.setProperty("--x", e.layerX + "px");
  nav.style.setProperty("--y", e.layerY + "px");
});
