
var Letter = function (character){
  //variables
  this.letter = character;
  this.guessed = false;

  //functions
  this.checkCharacter = function(character){
    //checks if the character is guessed or not
    if(this.letter === character){
      this.guessed = true;
      return true; //the right guess.
    } else{
      return false; //wrong guess;
    }
  };

  this.displayCharacter = function(){
    //display the character if its gussed.
    if(this.guessed){
      return this.letter;
    }else {
      return "_";
    }
  };
};

module.exports = Letter;
