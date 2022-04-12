/*
 JSnack 5
 Crea un array vuoto.
 Chiedi per 6 volte all’utente di inserire un numero,
 se è dispari inseriscilo nell’array
*/

let output = document.querySelector('.output');

const number = [];

for (let i = 0; i < 6; i++) {
  const userIns = parseInt(prompt('Inserisci un numero'));
  if(!(i%2))
  {
    number.push(userIns);
  }
}

output.innerHTML = `I numeri dispari inseriti sono ${number}`