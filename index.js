
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
    }else{ //if its an alphabet
      if(newWord.checkGuess(letter)){
        //check if all letters have been guessed!
        newWord.representWord(); //trigger nolettersleft;
        if(newWord.noLetterLeft){ 
          console.log("You Win"); 
          playGame();
        }else{
          promptUser(); 
        }
      }else{ //wrong guess
        guessesLeft--;
        console.log("Guesses left: "+ guessesLeft);
        if( guessesLeft> 0){
          promptUser();
        }else{
          console.log("Game Over");
          playGame();
        }
      }
    }
  });
}

/*
function playGame(){
  var question = [{
    name:"opt",
    type:"checkbox",
    message:"Do you want to play again?",
    choices:["play","quit"]
  }];
  inquirer.prompt(question).then(function(answer){
    console.log(JSON.stringify(answer));
    switch(answer.opt){
      case "play":
        newWord = getWord();
        promptUser();
        break;
      case "quit":
        console.log("Quitting the game");
        break;
    }
  });
}

playGame();
*/
newWord = getWord();
promptUser();

