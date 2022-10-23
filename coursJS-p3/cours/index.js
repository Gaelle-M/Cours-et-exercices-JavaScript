let data = [
  {
    pseudo: "Denis",
    age: 33,
    technos: ["Php", "c++", "React"],
    admin: false,
  },
  {
    pseudo: "Nina",
    age: 24,
    technos: ["JavaScript", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Guillaume",
    age: 42,
    technos: ["C#", "Angular", "NodeJs"],
    admin: true,
  },
];
//les structures de controle(commenter pour pas géner le reste du code)
//if else
// if (data[0].age > data[1].age) {
//   console.log(data[0].pseudo + " est plus agé que " + data[1].pseudo);
// } else {
//   console.log(data[0].pseudo + " n'est pas plus agé que " + data[1].pseudo);
// }

//while(commenter pour pas géner le reste du code)
// let w = 0;

// while (w < 10) {
//   w++;
//   console.log("La valeur de w est de : " + w);
// }

//do while(commenter pour pas géner le reste du code)
// let d = 0;

// do {
//     d++;
//     console.log(d);
// } while(d<5)

//boucles for(commenter pour pas géner le reste du code)
// for (const user of data) {
//     document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans</li>`
// }

// for (i = 0; i < data.length; i++) {
//     document.body.innerHTML += "<h2>" + data[i].pseudo + "</h2>"
// }

//Le switch
document.body.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "javascript":
      document.body.style.background = "yellow";
      break;
    case "php":
      document.body.style.background = "violet";
      break;
    case "python":
      document.body.style.background = "blue";
      break;
    default:
      null;
  }
});
//----------------------------------------------------------------------------------------------
//Méthode string(commenter pour pas géner le reste du code)

// let string2 = "JavaScript est un langage orienté objet";

// console.log(typeof "42");
// console.log(eval(parseInt("1") + 2));
// console.log(isNaN(string2));
// console.log(string2.length);
// console.log(string2[string2.length - 1]);
// console.log(string2.indexOf("langage"));

// let newString = string2.slice(18, 25);
// console.log(newString);

// console.log(string2.split(" "));
// console.log(string2.toLocaleLowerCase());
// console.log(string2.toLocaleUpperCase());
// console.log(string2.replace("JavaScript", "PHP"));

//--------------------------------------------------------------
//Méthode number(commenter pour pas géner le reste du code)

// let number2 = 42.1234;
// let numberString = "42.12 est un chiffre";

// console.log(number2.toFixed(1));
// console.log(parseInt(numberString));
// console.log(parseFloat(numberString));
// console.log(Math.PI);
// console.log(Math.round(4.5));
// console.log(Math.floor(4.9));
// console.log(Math.ceil(4.1));
// console.log(Math.pow(2, 7));
// console.log(Math.sqrt(16));
// console.log(Math.floor(Math.random() * 50));

//-----------------------------------------------------------------------
//Méthode array(commenter pour pas géner le reste du code)

// let array3 = ["JavaScript", "Php", "Python"];
// let array4 = ["Ruby", "Solidity"];

// let newArray = array3.concat(array4);
// console.log(newArray);
// let newArray = [...array3, ...array4];
// console.log(newArray);
// console.log(array3.join("-"));
// console.log(array3.slice(1));
// console.log(newArray.slice(1, 3));
// console.log(array3.indexOf("Python"));
// console.log(array3.every((language) => language === "Php"));
// console.log(array3.some((language) => language == "Php"));
// let shift = array3.shift();
// console.log(array3);
// let pop = array3.pop();
// console.log(pop);
// console.log(array3.pop());
// const restArray = array3.splice(1, 1, "C++");
// console.log(array3);

//IMPORTANT
// let arrayNumber = [4, 74, 28, 12, 1];
// console.log(arrayNumber.reduce((x, y) => x + y));
// arrayNumber.push(17);
// console.log(arrayNumber);
// console.log(arrayNumber.filter((number) => number > 10));
// let tableau = ["pomme", "cerise", "banane", "kiwi", "poire"];
// console.log(tableau.sort())
// console.log(arrayNumber.sort((a, b) => b - a));
// console.log(arrayNumber.filter((number) => number > 10).sort((a, b) => a - b));

// document.body.innerHTML = arrayNumber
//   .map((number) => `<li>${number}</li>`)
//   .join("");
//--------------------------------------------------------------
//Méthodes objects(commenter pour pas géner le reste du code)
// document.body.innerHTML = data
// .filter((user) => user.admin === false)
// .filter((user) => user.pseudo.includes("Den"))
// .sort((a, b) => b.age - a.age)
// .map(
//   (user) =>
//     `
//   <div class="user-card">
//   <h2>${user.pseudo}</h2>
//   <p>Age : ${user.age} ans</p>
//   <p>Statut : ${user.admin ? "Modérateur" : "Membre"}</p>
//   </div>

//   `
// )
// .join("");
//------------------------------------------------------------
//Les dates
//Date classique
let date = new Date();

//timestamp
let timestamp = Date.parse(date);
// console.log(timestamp);

//ISOString
let iso = date.toISOString();

function dateParser(chaine) {
  let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
  return newDate;
}

// console.log(dateParser(date));
//----------------------------------------------------------
// le destructuring

let moreData = {
  destVar: ["Element", "Element2"],
};

const { destVar } = moreData;

// console.log(destVar);

let array5 = [70, 80, 90];
let [x, y, z] = array5;
// console.log(x, y, z);

// console.log(iso);

const dateDestructuring = (chaine) => {
  let newDate = chaine.split("T")[0];
  let [y, m, d] = newDate.split("-");
  return [d, m, y].join("/");
};

// console.log(dateDestructuring(iso));

//--------------------------------------------------------
//Datasets(commenter pour pas géner le reste du code)

// const h3js = document.getElementById("javascript")
// console.log(h3js.dataset.lang);

// const h3 = document.querySelectorAll("h3");

// h3.forEach((language) => console.log(language.dataset.lang));

//-----------------------------------------------------
//Les Regex

let mail = "from_scratch33@gmail.com";

// console.log(mail.search(/from/));
// console.log(mail.replace(/from/, "de"));

// console.log(mail.match(/SCratch/i));
// console.log(mail.match(/[zu]/));
// console.log(mail.match(/[123]/));
// console.log(mail.match(/\d/));
// console.log(mail.match(/[a-z]/));

//regex pour email
// console.log(mail.match(/^[\w_-]+@[\w]+\.[a-z]{2,4}$/i));

let separator = 265264549;

console.log(separator.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "));
