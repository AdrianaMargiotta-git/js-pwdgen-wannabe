//chiedere all'utente il suo nome
var nome = prompt("Inserisci il tuo nome");
console.log(nome);

document.getElementById('dati-html').innerHTML = "I dati che hai inserito sono:";

document.getElementById('nome-html').innerHTML = "Il nome inserito è " + nome;

//chiedere all'utente il suo cognome
var cognome = prompt("Inserisci il tuo cognome");
console.log(cognome);
document.getElementById('cognome-html').innerHTML = "Il cognome inserito è " + cognome;

//chiedere all'utente il suo colore preferito
var colorePreferito = prompt("Inserisci il tuo colore preferito");
console.log(colorePreferito);
document.getElementById('colore-html').innerHTML = "Il nome inserito è " + colorePreferito;

//dire all'utente la password generata
document.getElementById('password-html').innerHTML = "La password che abbiamo generato per te è: " + nome + cognome + colorePreferito + 19

document.getElementById('conclusione').innerHTML = "Grazie per averci scelto!"
