/*
 JSnack 3
 Il software deve chiedere per 5 volte all’utente di inserire un numero.
 Il programma stampa la somma di tutti i numeri inseriti.
 Esegui questo programma in due versioni, con il for e con il while (facoltativo)
*/

// NON COMMENTARE
let output = document.querySelector('.output');
let number;
let sum = 0;
let count = 0;

// FINE

// VERSIONE FOR

/*
for (let i = 0; i < 5; i++) {
  number = parseInt(prompt('Inserisci un numero'));
  console.log(number);
  if(!isNaN(number)){
    sum += number;
    count++;
  }else{
    while (isNaN(number)) {
      number = parseInt(prompt('Inserisci un numero valido!'));
    }
    sum += number;
    count++;
  }
}
*/



// VERSIONE WHILE
/*
while (count != 5) {
  number = parseInt(prompt('Inserisci un numero'));
  console.log(number);
  if(!isNaN(number)){
    sum += number;
    count++;
  }else{
    while (isNaN(number)) {
      number = parseInt(prompt('Inserisci un numero valido!'));
    }
    sum += number;
    count++;
  }
}
*/



// NON COMMENTARE
if(count == 5){
  output.innerHTML = `La somma dei numeri inseriti è ${sum}`;
}