// JSnack 1
// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
let flag = false;
while(flag == false){
  let firstEnter = parseInt(prompt('Inserici il primo numero'));
  while(isNaN(firstEnter )){
    firstEnter = parseInt(prompt('Attenzione non hai inserito un valore corretto, inserisci di nuovo il primo numero'));
  }
  let secondEnter = parseInt(prompt('Inserici il secondo numero'));
  while(isNaN  (secondEnter)){
    secondEnter = parseInt(prompt('Attenzione non hai inserito un valore corretto, inserisci di nuovo il secondo numero'));
  }
  let output = document.querySelector('.output')
  flag = true;
 

// controllo l'inserimento dell'utente


if(firstEnter != secondEnter){
  if(firstEnter > secondEnter){
    output.innerHTML=`Il numero inserito maggiore è ${firstEnter}`
  }else{
    output.innerHTML=`Il numero inserito maggiore è ${secondEnter}`

  }
}else{
  alert(`I numeri inseriti sono uguali (${firstEnter} e ${secondEnter}`)
  flag=false;
}
}