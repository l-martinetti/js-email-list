/*
Email List

Descrizione

Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

Bonus
Abbellire con CSS o Bootstrap
Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)
mostrare le 10 email solo quando solo al termine delle 10 chiamate all’API
*/

const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail";
const mailContainer = document.getElementById("mail-container");
const button = document.getElementById("button");



button.addEventListener("click", () => {
    mailContainer.innerHTML = "";
    emailGenerator()
})

function emailGenerator (){
for (let i = 0; i < 10; i++){
    axios.get(endpoint)
        .then(response => {
            const randomEmail = response.data.response;
            mailContainer.innerHTML += `<li>${randomEmail}</li>`; 
        })
        .catch(err => {
            console.log("Errore", err);
        })
};
}







