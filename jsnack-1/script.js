// JSnack 1
// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore

const firstEnter = parseInt(prompt('Inserici il primo numero'));
const secondEnter = parseInt(prompt('Inserici il secondo numero'));
let output = document.querySelector('.output')

if(firstEnter > secondEnter){
  output.innerHTML=`Il numero inserito maggiore è ${firstEnter}`
}else{
  output.innerHTML=`Il numero inserito maggiore è ${secondEnter}`

}