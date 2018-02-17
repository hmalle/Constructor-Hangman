
var Word = require("./Word.js");

var wordsList = ["The Godfather","The Jurassic Park","Pulp Fiction",
    "The Matrix","Fight Club","Saving Private Ryan"];

var index = Math.random()*wordsList.length ;
var randomWord = wordsList[index];
var newWord = new Word();
newWord.setLetters(randomWord);

console.log(newWord);
