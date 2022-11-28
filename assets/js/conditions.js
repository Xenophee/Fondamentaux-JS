// Exercice 1 

let age = 18;

if (age >= 18) {
    console.log('Vous êtes majeur');
} else {
    console.log('Vous êtes mineur');
}

// --------------------------------------------

// Exercice 2 

let num = 3;

if (num %2 == 0) {
    console.log('Le nombre est pair');
} else {
    console.log('Le nombre est impair');
}


// --------------------------------------------

// Exercice 3 

let mark = 15;


if (mark >= 0 && mark <= 3) {
    console.log('Mauvais');
} else if (mark >= 4 && mark <= 5) {
    console.log('Moyen');
} else if (mark >= 6 && mark <= 7) {
    console.log('Assez bien');
} else if (mark >= 8 && mark <= 9) {
    console.log('Bien');
} else {
    console.log('Excellent');
}


// ----------------------------------------------

// Exercice 4 

let day = 5;

switch (day) {
    case 1 :
        console.log('Lundi');
        break;
    
    case 2 :
        console.log('Mardi');
        break;
    
    case 3 :
        console.log('Mercredi');
        break;
    
    case 4 :
        console.log('Jeudi');
        break;

    case 5 :
        console.log('Vendredi');
        break;

    case 6 :
        console.log('Samedi');
        break;
    
    default :
        console.log('Dimanche');
}


// ----------------------------------------------

// Exercice 5 

let value = true;

console.log(`Ceci est un ${typeof(value)}`);

value = parseInt(value);

console.log(`Ceci est un ${typeof(value)}`);

value = value.toString();

console.log(`Ceci est un ${typeof(value)}`);


// Variante

console.log(`Ceci est un ${typeof(value)}, ceci est un ${typeof(Number(value))}, et ceci est un ${typeof(value.toString())}`);


// Petit bonus si on veut convertir une chaîne en booléen 

let maChaine = 'false';
let monBooleen = JSON.parse(maChaine);
console.log(`Ma chaîne contient maintenant la valeur ${maChaine} et est de type ${typeof(monBooleen)}`);