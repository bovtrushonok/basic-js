const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }    
  decrypt() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = VigenereCipheringMachine;

/*class VigenereCipheringMachine {
	constructor(machineType) {
		
	}
	

	encrypt(msg, key) {
        if(msg && key) {
		  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          let cipher = [];
          let result = '';
          msg = Array.from(msg.toUpperCase().split(""));
          key = key.toUpperCase(); 
          let currentKey = key.padEnd(`${msg.length}`, `${key}`); //keyword length is equal to msg length
          let k = 0; // counter for currentKey;
          
          for(let i = 0; i < msg.length; i++) { 
            if (alphabet.indexOf(msg[i]) === (-1)) { //space and other symbols are not encrypted
                cipher.push(msg[i]);
            }
            else {
                let cipherCharNumber = alphabet.indexOf(msg[i]) + alphabet.indexOf(currentKey[k]); //sum of msg and key symbol index
                if (cipherCharNumber > 25) cipherCharNumber -= 26; //checking the sum to make sure we are in alphabet range
                cipher.push(cipherCharNumber); //pushing the number of result char
                k++; // counter for currentKey is up to next symbol;
              };
            }
             
          for (let j = 0; j < cipher.length; j++) {
             if (alphabet[cipher[j]]) result += (alphabet[cipher[j]]);
             else result += cipher[j];
          }
          
          return console.log(result);
        }


        else throw Error;
    }

    decrypt(encryptMsg, key) {
         if(encryptMsg && key) {

        }
        else throw Error;
    }
}

module.exports = VigenereCipheringMachine;
*/