// Exercice 1

for (let year=2020; year<2031; year++) {
    console.log(year)
}


// -------------------------------------------------------------------------------

// Exercice 2


for (let count=0; count<=100; count++) {
    if (count %7 == 0) {
        console.log(`${count} est un multiple de 7`)
    } else {
        console.log(count);
    }   
}


// ---------------------------------------------------------------------------------

// Exercice 3

const languages = ['Javascript', 'Python', 'PHP', 'Java', 'SQL' ];

for (i=0; i<languages.length; i++) {
    console.log(languages[i]);
}

    // Utiliser plutôt forEach avec les tableaux
    languages.forEach(function(language) {console.log(language)});


// ----------------------------------------------------------------------------------

// Exercice 4

const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

for (let day=0; day<7; day++) {
    // console.log(days.indexOf(days[i]) + ' : ' + days[i]) si on veut l'emplacement de chaque élément
    console.log(`Jour ${day+1} : ${days[day]}`);
}

        // Utiliser plutôt forEach avec les tableaux
        days.forEach(function (value, index) {console.log(`${index+1} : ${value}`)});


// -----------------------------------------------------------------------------------

// Exercice 5

let dayT = Math.floor(Math.random()*365)+1;

for (i=0; i<=365; i++) {
    if (i<dayT) {
        console.log(`Jour de l'année : ${i}`);
    } else {
        console.log(`Jour ${dayT} atteint.`);
    }
}


let dayOfYear = 1;
let specialDay = 5;

while (dayOfYear < specialDay) {
    console.log(`Jour ${dayOfYear} de l'année`)
    dayOfYear++
}

console.log(`Le jour ${specialDay} est atteint`);


// -------------------------------------------------------------------------------------

// Exercice 6

let firstNumber = 5;
let secondNumber = 7;

    while (firstNumber * secondNumber < 250) {
        console.log(`Le résultat est ${firstNumber * secondNumber}`);
        secondNumber = firstNumber * secondNumber;
    }

    




