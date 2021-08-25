
exports.checkNumberOfPlayers = (N) => {
     const validNumbers = [8, 16, 32, 64];
     let checks = validNumbers.filter(element => {
          if(element === N) {
               return N;
          } // indexOf if false returns -1
     });

     return checks.length == 1; // returns true
     
}

exports.checkSameRatings = (nizIgraca, podaciIgraca) => { // firstName and lastname or ranking
     let checksArray = nizIgraca.filter(element => {
          return element.firstName === podaciIgraca.firstName && element.lastName === podaciIgraca.lastName || element.ranking === podaciIgraca.ranking;
     });

     return checksArray.length > 0 ? false : true;
}


exports.checkRanking = (ranking) => {
     
     return ranking = typeof ranking == 'number' && Math.sign(ranking) == 1 ? true : false;
}

exports.checkNames = (name) => {
     let regex = /^[A-Z][a-z]{3,30}/;

     return regex.test(name);
}

exports.checkLastNames = (lastname) => {
     let regex = /^[A-Z][a-z]{3,50}/;
     
     return regex.test(lastname);
     
}

exports.checkCountry = (country) => {
     let regex = /[A-Z]{3}/;

     return regex.test(country);
}












