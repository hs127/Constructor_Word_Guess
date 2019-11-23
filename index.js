//  random word gen

var randWord = kjhkjn;
function start() {
    this.guessesLeftv = 10;
    this.nextWord();
}
function next word(){
    this.currentword = new Word(randWord);
    makeGuess();
}

function makeGuess() {
    this.askForChar().then(funtion(){

    })
}
function askForChar() {
    //inquirer
    this.currentword.guessChecker(char);
}