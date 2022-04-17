/*
 JSnack 2
 L’utente inserisce due parole in successione, con due prompt.
 Il software stampa prima la parola più corta, poi la parola più lunga.
*/
let output = document.querySelector('.output');
let flag = true;


do {
  let firstEnter = prompt('Inserisci una parola');
  let secondEnter = prompt('Inserisci un\'altra parola');

  if(firstEnter.length > secondEnter.length){
    output.innerHTML = `La parola più corta è ${secondEnter} e la più lunga è ${firstEnter}`;
    flag = true;
  }else if(firstEnter.length < secondEnter.length){
    output.innerHTML = `La parola più corta è ${firstEnter} e la più lunga è ${secondEnter}`;
    flag = true;
  }else if(firstEnter.length === secondEnter.length){
    alert(`Le parole inserite hanno la stessa lunghezza (${firstEnter.length} caratteri), prova con parole doverse.`);
    flag = false;
  }
} while (flag === false);
