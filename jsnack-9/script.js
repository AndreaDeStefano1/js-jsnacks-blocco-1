/*
 JSnack 9
 Calcola la somma e la media dei primi 10 numeri.
*/


let output = document.querySelector('.output');
let media = 0;
let somma= 0;

for (let i = 1; i <= 10; i++) {
  somma += i;
  if(i == 10){
    media = somma / i;
  }
  
}
output.innerHTML += `La somma dei numeri da 1 a 10 è ${somma}, <br> la media è ${media}`