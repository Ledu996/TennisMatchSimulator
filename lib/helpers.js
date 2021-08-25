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

}



module.exports = Pomagaci;
