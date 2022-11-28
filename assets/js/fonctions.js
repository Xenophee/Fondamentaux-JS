// Exercice 1


function helloWorld() {
    console.log('Bonjour les petits développeurs ! Je sais que vous adorez déjà JS !');
}

helloWorld();

    // Variante
    function helloWorld() {
        return 'Bonjour les petits développeurs ! Je sais que vous adorez déjà JS !';
    }
    
    console.log(helloWorld());


// -----------------------------------------------------------------------------------

// Exercice 2

let firstname = 'Géhonte';

function helloYou() {
    console.log(`Bonjour ${firstname} ! (Ah non ! C'était pas lui en fait)`);
}

helloYou();

    // Variante

    function helloYou(firstname) {
        return firstname
    }

    let nameFunction = helloYou(firstname);

    console.log(`Bonjour ${nameFunction} ! (Ah non ! C'était pas lui en fait)`);


// -------------------------------------------------------------------------------------

// Exercice 3 

let numberOne = 3;
let numberTwo = 7;

    // On peut également demander à l'utilisateur 
    // let numberOne = Number(prompt('Entrez un nombre :'));
    // let numberTwo = Number(prompt('Entrez un autre nombre :'));
        /* Attention si on ne précise pas que c'est un nombre qui est attendu, la fonction ne va pas faire une addition, 
        mais une simple concaténation de deux chaînes de caractères et va diviser malgré tout le nombre ensuite */

function average() {
    console.log(`On calcule la moyenne des deux nombres en additionnant ${numberOne} et ${numberTwo} qu'on divise ensuite par deux, ce qui donne ${(numberOne + numberTwo) / 2}, c'est gargantuesque !`);
}

average();


// ----------------------------------------------------------------------------------------

// Exercice 4

let oui = 'Quelle douille cette fonction !';


    // Version nommée

    function chaine () {
        console.log(`Pour écrire "${oui}", il faut ${oui.length} caractères.`);
    }

    chaine();


    // Version fléchée

    let non = () => {
        console.log(`Pour écrire "${oui}", il faut ${oui.length} caractères.`);
    }

    non();

        // Variante 
        non = (string) => {string + string.length}
            non();


// ----------------------------------------------------------------------------------------------

// Exercice 5

let fName = 'Yvres'

    // let name = prompt('Quel est ton nom ?')

function howAreYou () {
    console.log(`Bonjour, ${fName}! Comment vas-tu ?`)
}

howAreYou();


// -----------------------------------------------------------------------------------------------

// Exercice 6

let numberThree = 5;
let numberFour = 9;

let averagePlus = () => {
    console.log(`La moyenne des deux nombres donne ${(numberThree + numberFour) / 2}, c'est gargantuesque !`);
}

averagePlus();



// ------------------------------------------------------------------------------------------------

// Petit rappel pour bien comprendre le fonctionnement 

let chose = (scheiße) => {
    console.log("Je fais : " + scheiße);
}

chose('un discours sur l\'écologie à une armée de lutins.')
chose('une collection de crevettes atomiques dans une ruche en plastique.')
