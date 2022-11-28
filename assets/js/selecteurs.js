// Exercice 1

let textToDisplay = 'Comment devenir un AS en JS';

document.getElementById('text').innerHTML = textToDisplay;


// ------------------------------------------------------------------------

// Exercice 2

console.log(document.getElementById('title').textContent);



console.log(document.querySelector('.description').textContent);

    // Autre possibilité
    let classSelect = document.getElementsByClassName('description');
    console.log(classSelect[0].textContent)

        // En version simplifiée
        console.log(document.getElementsByClassName('description')[0].textContent)



let elements = document.querySelectorAll('#languagesList>li');

elements.forEach(function (value, index) {console.log(`${index+1} : ${value.textContent}`)});


    // En version for à éviter
    for (i=0; i.length; i++) {
        console.log(elements[i].textContent);
    }

        // En version simplifiée
        console.log('En version simplifiée :')
        for (i=0; i.length; i++) {
            console.log(document.querySelectorAll('li')[i].textContent);
        }

        // Autre possibilité
        console.log('Variante :')
        let elements2 = document.getElementsByTagName('li');
        for (i=0; i.length; i++) {
            console.log(elements2[i].textContent);
        }

            // En version simplifiée
            console.log('Version simplifiée de la variante :')
            for (i=0; i.length; i++) {
                console.log(document.getElementsByTagName('li')[i].textContent);
            }


// ------------------------------------------------------------------------

// Exercice 3

let liSelect = document.querySelectorAll('#languagesList>li');

liSelect.forEach(function (value, index) {let modifText = `${index+1} - ${liSelect[index].textContent}`;
liSelect[index].textContent = modifText;
});

    // Avec une boucle for mais à éviter
    for (i=0; i.length; i++) {
        let modifText = `${i+1} - ${liSelect[i].textContent}`;
        liSelect[i].textContent = modifText;
    }

// --------------------------------------------------------------------------

// Exercice 4

let imgSource = document.querySelector('img').src;

document.getElementById('src_image').value = imgSource;


// --------------------------------------------------------------------------

// Exercice 5

let spanSelect = document.querySelector('.description>span');
spanSelect.classList.add('important');
// ---> Ajout de la classe dans le CSS pour mettre le style


// --------------------------------------------------------------------------

// Exercice 6

let liJavascript = document.querySelectorAll('#languagesList>li');

liJavascript[3].style.color='red';

    // On peut utiliser cette commande également par exemple et cette façon de sélectionner
    let liJavascript2 = document.querySelector('ul>li:nth-of-type(4)');
    liJavascript2.setAttribute('style', 'color : red')

