/*
 JSnack 3
 Il software deve chiedere per 5 volte all’utente di inserire un numero.
 Il programma stampa la somma di tutti i numeri inseriti.
 Esegui questo programma in due versioni, con il for e con il while (facoltativo)
*/

// NON COMMENTARE
let output = document.querySelector('.output');
const number =[];
let sum = 0;
let count = 0;
// FINE

// VERSIONE FOR

/*
for (let i = 0; i < 5; i++) {
  number.push(parseInt(prompt('Inserisci un numero')));
  
}
for (let i = 0; i < number.length; i++) {
  sum += number[i];
}
*/


// VERSIONE WHILE
/*
while(count < 5){
  number.push(parseInt(prompt('Inserisci un numero')));
  console.log(number)
  count++;

}
count = 0;
while(count < number.length){
  let element = number[count];
  count++;

  sum += element;
}
*/

// NON COMMENTARE
output.innerHTML = `La somma dei numeri inseriti è ${sum}`;