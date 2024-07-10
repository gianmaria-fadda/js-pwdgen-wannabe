/*

    Step da seguire:
    
    1. Chiedo Nome/Cognome/Colore preferito all'utente e mi salvo il valore
    2. Comunichiamo il risultato

*/

// NOME

// 1. Chiedo Nome/Cognome/Colore preferito all'utente e mi salvo il valore
const name = prompt('Qual è il tuo nome?')
console.log('Nome:', name)

// 2. Comunichiamo il risultato
document.getElementById('name-text').innerHTML = 'Il tuo Nome è ' + name;

// COGNOME

// 1. Chiedo Nome/Cognome/Colore preferito all'utente e mi salvo il valore
const surname = prompt('Qual è il tuo cognome?')
console.log('Cognome:', surname)

// 2. Comunichiamo il risultato
document.getElementById('surname-text').innerHTML = 'Il tuo Cognome è ' + surname;

// COLORE PREFERITO

// 1. Chiedo Nome/Cognome/Colore preferito all'utente e mi salvo il valore
const color = prompt('Qual è il tuo colore preferito?')
console.log('Colore:', color)

// 2. Comunichiamo il risultato
document.getElementById('color-text').innerHTML = 'Il tuo Colore preferito è ' + color;
