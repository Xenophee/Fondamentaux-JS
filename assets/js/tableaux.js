// Exercice 1 

let studentsTab = ['Tim', 'Bill', 'Jeff', 'Marc', 'Sundar'];
    // Comme c'est un tableau, on pourrait déclarer en const. Les valeurs peuvent être changé sans problème.

console.log(studentsTab);


// ----------------------------------------------------------

// Exercice 2 

console.log(studentsTab[3]);


// ---------------------------------------------------------

// Exercice 3 

console.log('Attention, changement d\'exercice (3)')
studentsTab[3] = 'Mark';
console.log(studentsTab)

    // Pour l'afficher autrement
    console.log('Si on veut afficher les élements individuellement :')
    for (i=0; i<5; i++) {
        console.log(studentsTab[i]);
    }

        // Avec le forEach 
        console.log('On peut également faire comme ça :')
        studentsTab.forEach(element => console.log(element));


// --------------------------------------------------------

// Exercice 4

console.log('Attention, changement d\'exercice encore (4)')
studentsTab.push('Elon');
console.table(studentsTab);


// ---------------------------------------------------------

// Exercice 5

studentsTab.sort();
console.log(studentsTab);



