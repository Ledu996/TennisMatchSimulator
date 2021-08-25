const Pomagaci = require('./lib/helpers');
const Match = require('./Match');

function generateArray (nizIgraca, callback) { 

        Pomagaci.sort(nizIgraca, (sortiranNiz) => {
            
        for(let i = 0; i < sortiranNiz.length / 2; i += 2) {
                
                [sortiranNiz[i], sortiranNiz[sortiranNiz.length / 2 + i]] = [sortiranNiz[sortiranNiz.length / 2 + i], sortiranNiz[i]];
        }
        
        callback(sortiranNiz); 
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

            let ukupan_rezultat = '';
            let round = 0;
                while (generisaniNiz.length > 1) { 
                    let nizPobednika = [];
                    round++;
                        draft(generisaniNiz, (izvuceniPar) => { // trenutniNizIgraca
                            Match.generisiPobednika(izvuceniPar, (pobednik, rezultat_meca) => {
                            
                                nizPobednika.push(pobednik);
                                ukupan_rezultat +=' '+ round + '. Round' + rezultat_meca;

                    });
                        generisaniNiz = nizPobednika;
                })
                
            }
            console.log(generisaniNiz[0]);

            callback(generisaniNiz[0], ukupan_rezultat); 
    })
    
}   
