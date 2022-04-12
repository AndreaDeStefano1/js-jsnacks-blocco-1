/*
 JSnack 2
 L’utente inserisce due parole in successione, con due prompt.
 Il software stampa prima la parola più corta, poi la parola più lunga.
*/

const firstEnter = prompt('Inserisci una parola');
const secondEnter = prompt('Inserisci un\'altra parola');
let output = document.querySelector('.output');

if(firstEnter.length > secondEnter.length){
  output.innerHTML = `La parola più corta è ${secondEnter} e la più lunga è ${firstEnter}`;
}else{
  output.innerHTML = `La parola più corta è ${firstEnter} e la più lunga è ${secondEnter}`;
}