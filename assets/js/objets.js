// Exercice 1

let user1 = {
    lastname : 'Musk',
    firstname : 'Elon',
    age : 51,
    phone : '0422521010',
    birthdate : '1971-06-28'
};

console.table(user1)


// -------------------------------------------------------------------------

// Exercice 2

user1.phone = '415-222-9670';
console.table(user1)


// -------------------------------------------------------------------------

// Exercice 3

user1.age = ''
console.table(user1)


// --------------------------------------------------------------------------

// Exercice 4

delete user1.age
console.table(user1)


// ---------------------------------------------------------------------------

// Exercice 5

const tableName = ['Nevada', 'Vivian', 'Griffin', 'Kai', 'Saxon', 'Damian', 'Exa']

Object.defineProperty(user1, 'children', {
    value: tableName 
  });

  console.table(user1)


// ----------------------------------------------------------------------------

// Exercice 6


Object.defineProperty(user1, 'getFullName', {
    value: function getFullName(){
        return this.firstname+ ' ' +this.lastname;
    }
  });

  console.table(user1)


//   ---------------------------------------------------------------------------

//   Exercice 7

let user2 = {
    lastname : 'LeMagicien',
    firstname : 'Géhonte',
    age : 133,
    phone : '08562763536',
    birthdate : '1900-08-30'
};

let uberTab = [user1, user2]

console.table(uberTab)


// ------------------------------------------------------------------------------

// Exercice 8

uberTab.forEach(objet => {
    objet.forEach(element => {
        console.log(element)
    })
    console.log(`${firstname} ${lastname} (${children})`)
})


let firstname = Object.values(table)[1]
    let lastname = Object.values(table)[0]