const readLine = require('readline-sync');
const unosenje = require('./unosenje');


const tipoviUnosenja = {
    1: unosenje.rucnoUnosenje, 
    2: unosenje.automatskoUnosenje, 
    error: () => {console.log({'Error': 'Odabrali ste pogresno opciju, molimo vas pokusajte ponovo'})}
}

module.exports =  app = () => { 
    const opcije = parseInt(readLine.question('Ispis tenisera:\n 1.Rucno Unosenje (1),\n 2.Iscitavanje iz fajla: (2)\n'));
    let izabranaOpcija = opcije <= 2 && Math.sign(opcije) == 1 ? tipoviUnosenja[opcije] : tipoviUnosenja.error;
    
    izabranaOpcija(); 
}

