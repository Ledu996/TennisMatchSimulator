const Pomagaci = require('./lib/helpers');
const Match = require('./Match');

function generateArray (nizIgraca, callback) { 

        Pomagaci.sort(nizIgraca, (sortiranNiz) => {
            
        for(let i = 0; i < sortiranNiz.length / 2; i += 2) { // N/2 O(n) 

            //let k = sortiranNiz[i];
            //let j = sortiranNiz[sortiranNiz.length / 2 + i]; // trebalo je da direktno pristupim nizu a ne preko kopije promenljivih
            // samo i i j menjali mesta a trebalo je menjati mesta u nizu
            // bila je greska kod swapinga

            [sortiranNiz[i], sortiranNiz[sortiranNiz.length / 2 + i]] = [sortiranNiz[sortiranNiz.length / 2 + i], sortiranNiz[i]];
        }
        
        callback(sortiranNiz); // [1, 2, 5, 7, 11, 12, 6, 9] samo kad je niz sortiran
    })
    
    
}

function draft (nizIgraca, callback) {
        
    while (nizIgraca.length !== 0) {
            
            let igrac1 = nizIgraca.splice(0,1);
            let igrac2 = nizIgraca.splice(0,1);
            callback([igrac1[0], igrac2[0]]);

    }
}


exports.sumulacijaTurnira = (nizIgraca, callback) => { 
        generateArray(nizIgraca, (generisaniNiz) => {

            //let trenutniNizIgraca = generisaniNiz; 
            let ukupan_rezultat = '';
            let round = 0;
                while (generisaniNiz.length > 1) { // trenutniNizIgraca.length, sve dok je N > 1 podeli sa 2
                    let nizPobednika = [];
                    round++;
                        draft(generisaniNiz, (izvuceniPar) => { // trenutniNizIgraca
                            Match.generisiPobednika(izvuceniPar, (pobednik, rezultat_meca) => {
                            
                                nizPobednika.push(pobednik);
                                ukupan_rezultat +=' '+ round + '. Round' + rezultat_meca; // ' '+ round + '. Round' + rezultat_meca

                    });
                        generisaniNiz = nizPobednika;
                        //trenutniNizIgraca = nizPobednika; 
                })
                
            }
            console.log(generisaniNiz[0]);

            callback(generisaniNiz[0], ukupan_rezultat); // trenutniNizIgraca[0]
    })
    
}   


// red izvrsavnja kao cain

// async nacin izvrsavanja odredjenih komandi
