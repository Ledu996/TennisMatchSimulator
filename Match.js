const Match = {}

        
Match.generisiRezultatMeca =  (ucesnici, callback) => {
    if(ucesnici) {
        const setsWon = 3;
    
    callback(`
        ${ucesnici[0].firstName.charAt(0).toUpperCase()}. ${ucesnici[0].lastName} (${ucesnici[0].country}, ${ucesnici[0].ranking}) - 
        ${ucesnici[1].firstName.charAt(0).toUpperCase()}. ${ucesnici[1].lastName} (${ucesnici[1].country}, ${ucesnici[1].ranking}) 
        ${setsWon} : ${Math.floor(Math.random() * 3)}\n`); 

}

}

Match.generisiPobednika =  (igraci, callback) => { 
    let luckyNubmer = Math.floor(Math.random() * igraci.length); 
    let [pobednik, gubitnik]= [igraci.splice(luckyNubmer, 1)[0], igraci[0]];
        
        Match.generisiRezultatMeca([pobednik, gubitnik], (rezultatMeca) => {

            callback(pobednik, rezultatMeca);
        }); 
         
}


module.exports = Match;
        
