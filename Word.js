
var Letter = require("./Letter.js");

function Word(){
  //variables
  this.letters = []; //array of new Letter objects
  this.noLetterLeft = false;

  //functions
  this.setLetters = function(word){
    for( var a=0;a<word.length; a++){
      this.letters.push(new Letter(word.charAt(a)));
    }
  };

  this.representWord = function (){
    //returns the placeholder representing word
    var state = true;
    var repWord = "";
    for(var a=0; a<this.letters.length; a++){
      if(this.letters[a].displayCharacter() === "_"){
        state = false;
      }
      repWord += this.letters[a].displayCharacter();
    }
    this.noLetterLeft = state;
    return repWord;
  };

  this.checkGuess = function(character){
    for(var a=0; a<this.letter.length;a++){
      if( this.letters[a].checkCharacter(character)){
        console.log("CORRECT!");
        return true;
      } 
    }
      console.log("WRONG");
      return false;
  };
}

module.exports = Word;
