const obj = {
  pseudo: "Gaelle",
  ville: "Marseille",
  admin: false,

  direBonjour: function () {
    console.log("Bonjour je suis " + this.pseudo);
  },

  //   direBonjour() {
  //       console.log("Bonjour je suis " + this.pseudo);
  //   }
};

//ajouter un paramètre
obj.age = 24;
obj["admin"] = true;

//supprimer paramètre
delete obj.ville;

//modifier un paramètre
obj.pseudo += " Gaga";

// console.log(obj.direBonjour());

//verifier si une propriété existe
// console.log("pseudo" in obj);

//parcourir l'objet
for (const key in obj) {
  // console.log(obj[key]);
}

//obtenir les clès
const keys = Object.keys(obj);
// console.log(keys);

//obtenir valeur
const values = Object.values(obj);
// console.log(values);

//créer des tabelau de nos objets
const nestedArray = Object.entries(obj);
// console.log(nestedArray);

const obj2 = {
  taille: "1m80",
  poids: "75kg",
};

//fucionner des objets
const fusion = Object.assign({}, obj, obj2);
// console.log(fusion);

//empecher les modifications
// const newObj = Object.freeze(obj);
const newObj = Object.seal(obj);
newObj.pseudo = "test";
newObj.adresse = "42 rue du code";

// console.log(newObj);

//--------------------------------------------------------
//constructeur d'objet
//1. fonction constructeur

function User(pseudo, ville) {
  this.pseudo = pseudo;
  this.ville = ville;

  this.getCity = function () {
    console.log(this.pseudo + " habite à " + this.ville);
  };
}

const user1 = new User("Gaelle", "Marseille");
const user2 = new User("Denis", "Nantes");

// console.log(user2.getCity());

//2. factory fonctions
function User3(pseudo, ville) {
  return {
    pseudo,
    ville,
  };
}

const user4 = User3("Gaelle", "Cannes");
// console.log(user4);

//--------------------------------------------------------
//3. création de class

class Utilisateur {
  constructor(pseudo, ville) {
    this.pseudo = pseudo;
    this.ville = ville;
  }
  sayMyName = function () {
    console.log("Bonjour je suis " + this.pseudo);
  };
}

const user5 = new Utilisateur("Nina", "Bastia");

Utilisateur.prototype.sayCity = function () {
  console.log("J'habite à " + this.ville);
};

Object.assign(Utilisateur.prototype, {
  method1() {
    //méthode
  },
  methode2() {
    //méthode 2
  },
});

// console.log(user5);

//-------------------------------------------------------
//L'héritage

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  saySomething(text) {
    console.log(this.name + " dit : " + text);
  }
}

class Dog extends Animal {
  run() {
    console.log("Le chien court !");
  }
}

class Cat extends Animal {
  hunt() {
    console.log("J'ai tué un oiseau");
  }
}

const rintintin = new Dog("Rintintin", 9);
console.log(rintintin);

