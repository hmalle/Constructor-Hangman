
var Word = require("./Word.js");
var inquirer = require("inquirer");

var wordsList = ["The Godfather","The Jurassic Park","Pulp Fiction",
    "The Matrix","Fight Club","Saving Private Ryan"];

var newWord; 
var guessesLeft = 10;

var getWord = function(){
  var index = Math.floor(Math.random()*wordsList.length) ;
  randomWord = wordsList[index];
  newWord = new Word();
  console.log(randomWord); //TODO Delete this line
  newWord.setLetters(randomWord);
  return newWord;
}

var promptUser = function(){
  var question = [ {
    name:"letter",
    message: "Guess a letter"
  }];
  var repWord = newWord.representWord();
  console.log(repWord);
  inquirer.prompt(question).then(function(ans){
    console.log(ans.letter.trim().charAt(0));
    var letter = ans.letter.trim().charAt(0).toLowerCase();
    if( ! letter.match(/[a-z]/i) ){
      console.log("Please enter a valid alphabet");
      promptUser();
    }else{
      if(newWord.checkGuess(letter)){
        if(newWord.noLetterLeft){
          console.log("You Win");
        }
      }else{
        console.log("Guesses left: "+ guessesLeft);
        promptUser();
      }
    }
  });
}

newWord = getWord();
promptUser();
