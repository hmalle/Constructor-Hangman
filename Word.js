
var Letter = require("./Letter.js");

function Word(){
  //variables
  this.letters = []; //array of new Letter objects
  this.noLetterLeft = false; //to check of all letters have been guessed

  //functions
  this.setLetters = function(word){
    for( var a=0;a<word.length; a++){
      var ch = word.charAt(a).toLowerCase();
      var newLetter = new Letter(ch);
      if(ch==" "){ newLetter.checkCharacter(" "); }//ignore spaces between words!
      this.letters.push(newLetter);
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
    var matchFound = false;
    for(var a=0; a<this.letters.length;a++){
      if( this.letters[a].checkCharacter(character)){
        matchFound= true; } 
    }
    if(matchFound){
      console.log("CORRECT!");
    }else{
      console.log("WRONG");
    }
    return matchFound;
  };
}

module.exports = Word;
