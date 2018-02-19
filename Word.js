
var Letter = require("./Letter.js");

function Word(){
  //variables
  this.letters = []; //array of new Letter objects

  //functions
  this.setLetters = function(word){
    for( var a=0;a<word.length; a++){
      this.letters.push(new Letter(word.charAt(a)));
    }
  };

  this.representWord = function (){
    //returns the placeholder representing word
    var repWord = "";
    for(var a=0; a<this.letters.length; a++){
      repWord += this.letters[i].displayCharacter();
    }
    return repWord;
  };

  this.getGuess = function(character){
    this.letters.checkCharacter(character);
  };
}

module.exports = Word;
