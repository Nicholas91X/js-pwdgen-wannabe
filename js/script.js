// alert('Prova')

my_Password.onclick = function(){
    let nome = prompt("Inserisci il tuo nome");
    let cognome = prompt("Inserisci il tuo cognome");
    let colore = prompt("Inserisci il tuo colore preferito");
    let myPassword = nome + cognome + colore + 21;
    document.getElementById("my_Password").innerHTML = myPassword;
};
