var Letter = require("./Letter.js");

var loop = 0;
//if guessleft is less than 9 take a guess 

var wordsList = ["jerome", "neena", "darion", "lou", "greg", "jordan",
    "jasmine", "stephen", "jacob", "adam", "rui", "luis"];

// Solution will be held here.
var chosenWord = "";
// This will break the solution into individual letters to be stored in array.
var lettersInChosenWord = [];
// This will be the number of blanks we show based on the solution
var numBlanks = 0;
// Holds a mix of blank and solved letters (ex: 'n, _ _, n, _').
var blanksAndSuccesses = [];
// Holds all of the wrong guesses
var wrongGuesses = [];

// Game counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;

var word = new Word("adam");
function Word(chosenWord) {
    //chosenWord = "adam";
    var words = [];
    this.letters = chosenWord.split("").map(function (char) {
        words.push(char);
        return new Letter(char);
    })
    //console.log(this.letters);
    console.log(words);
    words.map(function (letter) {
        var displayword = [];
        displayword = Letter.whatCharacter();

        console.log(displayword.join(" "));
    })
}
this.guessChecker = function (guessedLetter) {
    // if (guessedLetter = this.Letter) {
    //     this.letterGuessed = true;
    // }
    // else {
    //     console.log("wrong");
    // }
    var found = false;
    this.letters.forEach(function (letter) {
        if (letter.guess(guessedLetter)) {
            found = true;
        }
    })
    return found;
}
