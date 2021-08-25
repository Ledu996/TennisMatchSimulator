const Pomagaci = {}


Pomagaci.shuffle = (array, callback) => {
    for(let i = array.length - 1; i > 0; i--) { // O(n)
    let j = Math.floor(Math.random() * i );
        [array[i], array[j]] = [array[j], array[i]];
    }

    callback(array);
    
}


Pomagaci.sort = (niz, callback) => {
    niz.sort((a, b) => {
        return a.ranking - b.ranking; // vraca u ascending order
    });
    
    callback(niz);
}


Pomagaci.brojKrugova = (n) => {
    
   let brojKrugova = 0;
   let runde = [];
    
   while(n > 1) {
        n = n/2;
        brojKrugova++;
    }
    
    runde.length = brojKrugova; 
    
    for(let i = 0; i < runde.length; i++) {
        
        runde[i] = 'Round ' + i + '.';

    }
    
    [runde[runde.length - 2], runde[runde.length - 1]] = [runde[runde.length - 2] + '/Semifinals', 'Finals'];
    
    console.log(runde);

    //callback(runde[brojKrugova]);
}



module.exports = Pomagaci;