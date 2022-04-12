/*
 JSnack 6
 Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.
*/

let output = document.querySelector('.output');
const userIns = parseInt(prompt('Inserisci un numero'))

for (let i = 1; i <= userIns; i++) {
  let cube = (i*i*i)
  output.innerHTML += `Il cubo del ${i}° numero è ${cube} <br>`
}