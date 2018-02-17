
var Letter = function (character){
  //variables
  this.character = character;
  this.guessed = false;

  //functions
  this.checkCharacter = function(character){
    //checks if the character is guessed or not
    if(this.character === character){
      this.guessed = true;
    }
  };

  this.displayCharacter = function(){
    //display the character if its gussed.
    if(this.guessed){
      return this.character;
    }else {
      return "_";
    }
  };
};

module.exports = Letter;
