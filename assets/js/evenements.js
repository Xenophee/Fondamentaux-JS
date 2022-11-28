// Exercice 1

let firstBtn = document.getElementById('clickMe');

firstBtn.addEventListener('click', () => {
    console.log('click');
});


    // Avec une fonction nommée utile quand il y a beaucoup d'instruction (préférer cette méthode)
    function addConsole () {
        console.log('click');
        firstBtn.value = 'oui';
    }

    firstBtn.addEventListener('click', addConsole);


// -------------------------------------------------------------------------------

// Exercice 2

let imgSelect = document.querySelector('img');

imgSelect.addEventListener("mouseover", () => {
    console.log(imgSelect.src)

    // Permet de donner la source exacte de l'image
    console.log(imgSelect.getAttribute('src'));
});


    // On pourra faire qu'un seule action avec cette façon de faire et elle est à éviter
    function mouseOver () {
        console.log(imgSelect.src);
    }

    imgSelect.onmouseover = function () {mouseOver()}


// -------------------------------------------------------------------------------

// Exercice 3

function keybording (value) {
    console.log(`${value.keyCode} --> '${value.key}'`);
}

document.body.addEventListener('keydown', keybording);


// -------------------------------------------------------------------------------

// Exercice 4

let liSelect = document.querySelectorAll('li')

liSelect.forEach(li => {
    li.addEventListener('click', element => {
        console.log(element.target.textContent)
    })
})

    // Possibilité similaire
    liSelect.forEach(li => {
        li.addEventListener('click', () => {
            console.log(li.innerHTML);
        })
    })

// ------------------------------------------------------------------------------

// Exercice 5

let submitBtn = document.getElementById('send');
let submitValue = document.querySelectorAll('input[type=text]');

submitValue.forEach(input => {
    submitBtn.addEventListener('click', (event) => {
        console.log(input.value)
        event.preventDefault();
    })
})


// ------------------------------------------------------------------------------

// Exercice 6

let selectInput = document.querySelectorAll('input');

selectInput.forEach(input => {
    input.addEventListener('focus', function () {
        input.style.backgroundColor= '#F1E0BB';
    })      
    })

selectInput.forEach(input => {
    input.addEventListener('blur', function () {
        input.style.backgroundColor= '';
    })      
    })


// ---------------------------------------------------------------------------------

// Exercice 7

let select = document.getElementById('daySelect');

select.addEventListener('change', event => {
    console.log(event.target.value)
})

