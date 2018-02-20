//create an array of Australian animals
var AusAnimals = ['kookaburra', 'wombat', 'platypus', 'wallaby', 'echidna', 'quokka', 'dingo', 'bilby', 'crocodile']; 
//valid characters accepted
var validLetters = ["a", 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var randAnim = ''//AusAnimals [Math.floor(Math.random() * AusAnimals.length)];
var wins = 0;
var losses = 0;
//holds number of underscores
var underscores = 0;
var guessesL = 0;
var counterCorrGuesses = 0;
var lettersinAnim = [];
var userGuess = [];
var wGuesses = [];
//holds underscores and correct guesses
var CorrGuessesandUnders = [];


function gameStart () { 
    //computer chooses word from animal array randomly when prompted by first event listener
    //function determines length of word chosen by computer
    var randAnim = AusAnimals [Math.floor(Math.random() * AusAnimals.length)];
    console.log('random word: ' + randAnim);
    //splits the randomly chosen word into array of letters
    //var lettersinAnim = randAnim.split('');
    //get the number of underscores/word-blanks
    //underscores = lettersinAnim.length;
   //console.log(lettersinAnim)
   //console.log(underscores)
    //change underscore 'Word to Guess' to match word from animal array chosen randomly (id="word-blanks")
    
    //set beginning of game wrong guesses and guesses left
    wGuesses = [];
    guessesL = 10;
    CorrGuessesandUnders = [];
    
    for(var i = 0; i< randAnim.length; i++){
        CorrGuessesandUnders.push('_');
    }
    
    document.getElementById('word-blanks').innerHTML = CorrGuessesandUnders.join(' ')
    document.getElementById('guesses-left').innerHTML = guessesL
    document.getElementById('wrong-guesses').innerHTML = wGuesses
    document.getElementById('win-counter').innerHTML = wins
    document.getElementById('loss-counter').innerHTML = losses
}
  

function validateInput(userGuess) {
    // Whenever a return is executed it breaks out of the function. 
    // So if validLetters.indexOf(key) === -1 is true then i would return false. This prevents the rest of the code inside this code block from running.

    // This condition Makes sure an a-z key is pressed.
    // if not it returns a value of -1 because -1 is not a valid value
    if(validLetters.indexOf(userGuess) === -1) return false;

    // This condition Makes sure key cant be guessed again.
    // makes sure that any indexOf value that is 0  and above (example 0=a, 1=b...) does not get used again.
    if(wGuesses.indexOf(userGuess) >= 0) return false;

    // This condition Makes sure hangman keys cant be pressed again
    // makes sure that any indexOf value that is 0  and above (example 0=a, 1=b...) does not get used again. 
    if(randAnim.indexOf(userGuess) >= 0) return false;
    return true;
}


function updateScore(){
    if (CorrGuessesandUnders.indexOf('_') === -1){
        updateWin();
    }

    else if (guessesL === 0){
        updateLoss();
    }
}

function updateWin (){
    wins++
    //prints message to board
    document.getElementById('msg').textContent = 'Winner!';
    gameStart();
    

}

function updateLoss() {
    losses++
    //print message to board
    document.getElementById('msg').textContent = 'Loser';
    gameStart();
    
}


//get/store input from user
document.onkeyup = function compareGuess(event) {
    var userGuess = event.key;
    console.log (userGuess)
    
    if (validateInput(userGuess)) {
        //this whole second if statement is not working; all letters being passed to else and printed as wrong guesses 
        if (randAnim.indexOf(userGuess) > -1) {
            for (var j = 0; j < randAnim.length; j++) {
                if (randAnim[j] === userGuess) {
                    CorrGuessesandUnders[j] = userGuess; 
                
                }
            }
            document.getElementById('word-blanks').innerHTML = CorrGuessesandUnders;

        } 
        
        else {
            wGuesses.push(userGuess);
            guessesL--;
            }
            document.getElementById('word-blanks').innerHTML = CorrGuessesandUnders.join(' ');
            document.getElementById('guesses-left').innerHTML = guessesL
            document.getElementById('wrong-guesses').innerHTML = wGuesses
            document.getElementById('win-counter').innerHTML = wins
            document.getElementById('loss-counter').innerHTML = losses

            updateScore()
        }

    }
          
    gameStart ();



    
    
    
    
    
    
    
    
    

    





