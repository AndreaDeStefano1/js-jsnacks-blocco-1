/*
 JSnack 4
 In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
 chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/


let output = document.querySelector('.output');
const guest =['leo', 'sal', 'mike'];
let flag = false;
let nome = prompt('Qual\'è il tuo nome?');

for (let i = 0; i < guest.length; i++) {
  if (nome == guest[i]) {
    flag = true;
  }
   
}

if(flag === true){
  output.innerHTML = `Benvenuto ${nome}, ti stavamo aspettando.`
} else  {
  output.innerHTML = `Ci dispiace ${nome}, non sei stato invitato alla festa.`
}