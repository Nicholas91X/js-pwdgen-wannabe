// alert('Prova')

let nome = prompt("Inserisci il tuo nome");

let cognome = prompt("Inserisci il tuo cognome");

let colore = prompt("Inserisci il tuo colore preferito");

let myPassword = nome + cognome + colore + 21;
// console.log(myPassword);

document.getElementById("my_Password").innerHTML = myPassword;
