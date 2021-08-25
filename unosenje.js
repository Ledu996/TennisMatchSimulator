const readLine = require('readline-sync');
const lib = require('./lib/data');
const generisanja = require('./generate');
const validator = require('../Assignment/utils/validation');

    exports.rucnoUnosenje = () => {
        let N = parseInt(readLine.question('Unesite broj tenisera (N): ')); 
        let isValid = validator.checkNumberOfPlayers(N);

        if(isValid) {
            let tennisPlayers = []
        
        while(tennisPlayers.length !== N) {// dok nizTenisera.length ne bude jednak broju N

                const tempTennisPlayer = readLine.question('Unesite tenisera u obliku [ime], [prezime], [drzava], [ranking]: ');
                const tempTennisPlayerData = tempTennisPlayer.split(',');
                
                const tennisObjectData = {
                    firstName: tempTennisPlayerData[0].trim(),
                    lastName: tempTennisPlayerData[1].trim(),
                    country: tempTennisPlayerData[2].trim(),
                    ranking: parseInt(tempTennisPlayerData[3]), 
                }

                
let validatePlayersData = validator.checkNames(tennisObjectData.firstName) && validator.checkLastNames(tennisObjectData.lastName) 
                        && validator.checkCountry(tennisObjectData.country) && validator.checkRanking(tennisObjectData.ranking);
                
            if(validatePlayersData){
                    
                    let validRank = validator.checkSameRatings(tennisPlayers, tennisObjectData); 
                    validRank = validRank == true ? tennisPlayers.push(tennisObjectData) : console.log(new Error({'Greska': 'Igraci koje unosite ne mogu deliti isti ranking'}));     
                    console.log(tennisPlayers);
                }else {
                    console.log(new Error({'Greska': 'Podaci koje unosite su pogresni'}));
                }
            }

        generisanja.sumulacijaTurnira(tennisPlayers, (pobednik, rezultaliMeceva) => {
        console.log(rezultaliMeceva);
        console.log(`Pobednik ${pobednik.firstName.charAt(0).toUpperCase()}. ${pobednik.lastName} (${pobednik.country}, ${pobednik.ranking})`);
    });
    
    }else {
        console.log({'Greska': 'Broj tenisera mora biti 8,16,32,64'});
    }
        
}

exports.automatskoUnosenje = () => {
    const N = parseInt(readLine.question('Unesite broj tenisera (N): '));
    let isValid = validator.checkNumberOfPlayers(N);
    
    if(isValid) {
        lib.readPlayers(__dirname, N, (err, players) => {
            if(!err && players) {
                const arrayOfPlayers = players;
    
                generisanja.sumulacijaTurnira(arrayOfPlayers, (pobednik, rezultaliMeceva) => {
                        console.log(rezultaliMeceva);
                        console.log(`Pobednik ${pobednik.firstName.charAt(0).toUpperCase()}. ${pobednik.lastName} (${pobednik.country}, ${pobednik.ranking})`);
                    });
            }else {
                console.log({'Error': 'Failed to read players'});
            }  
        });
    }else {
        console.log({'Greska': 'Broj tenisera mora biti 8,16,32,64'});
    }
   
}


