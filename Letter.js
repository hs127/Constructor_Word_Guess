//this is the letter that what the user had duessed
function Letter(letter) {
    //constructor called when choosing a word
    this.letter = letter;
    this.visible = false
    console.log("=====");
    console.log(letter);
    this.letterGuessed = false;
    this.whatCharacter = function () {
        if (letterGuessed === true) {
            return this.letter;
        }
        else {
            return "_";
        }
    }

    //function called when user is guessing 
    this.guess = function (guessedLetter) {
        if (guessedLetter.toUpperCase() = this.Letter) {
            this.visible = true;
            return true;
        }
        return "_";
    }
}

module.exports = Letter; 