//create an array of South African animals
var AusAnimals = ['kookaburra', 'wombat', 'platypus', 'wallaby', 'echidna', 'quokka', 'dingo', 'bilby', 'crocodile']; 
var wins = 0;
var losses = 0;
var underscores = [];
var userGuess = [];
var wGuesses = [];
var CorrGuesses = [];
var guessesL = [];

//create event listener to get game started
document.onkeyup = function () { 
//function: computer chooses word from animal array randomly when prompted by first event listener
//function determines length of word chosen by computer
var randAnim = AusAnimals [Math.floor(Math.random() * AusAnimals.length)];
console.log('random word: ' + randAnim);
//var wordInplay = AusAnimals [randAnim];
//console.log(randAnim.length);

//change underscore 'Word to Guess' to match word from animal array chosen randomly (id="word-blanks")

for(var i = 0; i < randAnim.length; i++){
    underscores.push ('_');
}
//print 'word-blanks' to screen
document.getElementById("word-blanks").innerHTML = underscores.join(" ");
//set beginning of game wrong guesses and guesses left
wGuess = [];
guessesL = 10;

document.getElementById("guesses-left").innerHTML = guessesL;
//get/store input from user
//if wrong letter guess display/store in Wrong Guesses "id=wrong-guesses"
// create wrong guess array and push to end of array??
document.onkeyup = function(event)
{
    userGuess = event.key;
    console.log (userGuess)

    if(randAnim.indexOf(userGuess) > -1)
    { CorrGuesses.push(userGuess);
        console.log ('correct guesses:' + CorrGuesses);

    }
    else{
        wGuesses.push(userGuess);
        guessesL--;
        console.log ('wrong guesses:' + wGuesses);
    }
}

}
//if correct letter guess display and replace underscore in correct spot 
//create correct guess array to push to, display options??

  