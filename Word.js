
var Letter = require("./Letter.js");

function Word( word ){
  //variables
  this.letter = []; //array of new Letter objects
 
  //functions
  this.representWord = function (){ {
    //returns the placeholder representing word
    var repWord = "";
    for(var a=0; a<letters.length; a++){
      repWord += letters[i].displayCharacter();
    }
    return repWord;
  };
};
