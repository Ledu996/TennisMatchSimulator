const fs = require('fs');
const path = require('path');
const helpers = require('./helpers');


const lib = {};



lib.readPlayers = (mainDir, brojTenisera, callback) => { 
    fs.readFile(`${mainDir}/_data/igraci.json`, 'utf8', (err, data) => {
            if(!err && data) {
                const paresedData = JSON.parse(data);  
                
                    helpers.shuffle(paresedData, (shuffledArray) => {
                        const arraOfPlayers = shuffledArray.slice(0, Number(brojTenisera));
                        callback(false, arraOfPlayers);
                    });
                
                }else {
                    callback(true, {'Error': 'The file you are trying to read does not exist'});
                }
            })

}

module.exports = lib;
