//create an array of Australian animals
var AusAnimals = ['kookaburra', 'wombat', 'platypus', 'wallaby', 'echidna', 'quokka', 'dingo', 'bilby', 'crocodile']; 
//valid characters accepted
var validLetters = ["a", 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var randAnim = AusAnimals [Math.floor(Math.random() * AusAnimals.length)];
var wins = 0;
var losses = 0;
//holds number of underscores
var underscores = 0;
var lettersinAnim = [];
var userGuess = [];
var wGuesses = [];
//holds underscores and correct guesses
var CorrGuessesandUnders = [];
var guessesL = 0;
var counterCorrGuesses = 0;

function gameStart () { 
    //computer chooses word from animal array randomly when prompted by first event listener
    //function determines length of word chosen by computer
    var randAnim = AusAnimals [Math.floor(Math.random() * AusAnimals.length)];
    console.log('random word: ' + randAnim);
    //splits the randomly chosen word into array of letters
    var lettersinAnim = randAnim.split('');
    //get the number of underscores/word-blanks
    underscores = lettersinAnim.length;
    //change underscore 'Word to Guess' to match word from animal array chosen randomly (id="word-blanks")
    
    //set beginning of game wrong guesses and guesses left
    wGuesses = [];
    guessesL = 10;
    
    for(var i = 0; i< underscores; i++)
    {
        CorrGuessesandUnders.push('_');
        document.getElementById('word-blanks').innerHTML = CorrGuessesandUnders;
      }
      document.getElementById('word-blanks').innerHTML = CorrGuessesandUnders.join(" ");
      document.getElementById("guesses-left").innerHTML = guessesL
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
    if (updateWin()){ 
        wins++;
        document.getElementById("win-counter").innerHTML = wins; 
        gameStart()  

}
else (updateLoss());{
    
        losses++;
        document.getElementById("loss-conter").innerHTML = losses;
        gameStart()
        
        

    }
}

function updateWin (underscores = lettersinAnim.length){
    //document.getElementById("word-blanks").innerHTML = clear "word-blanks"
    gameStart();
    

}

function updateLoss(guessesL= 0) {
   
    gameStart();
    
}







 

//get/store input from user
document.onkeyup = function compareGuess(event)
{
    userGuess = event.key;
    console.log (userGuess)
    
    if (randAnim.indexOf(userGuess) > -1) {
         
        for (var j=0; j<randAnim.length; j++) {
            if (randAnim[j] === userGuess) {
                CorrGuessesandUnders[j] = userGuess;
                document.getElementById("word-blanks").innerHTML = CorrGuessesandUnders
               // updateScore()
                
            }}
        }

        else {//??this else function worked when I had a different function for the if??
            wGuesses.push(userGuess);
            guessesL--;
            document.getElementById("guesses-left").innerHTML = guessesL;
            document.getElementById("wrong-guesses").innerHTML = wGuesses;
            console.log ('wrong guesses:' + wGuesses);
            //updateScore();
            
          }

          updateScore()
          
          
            

            gameStart ();


    
    
    
    
    
    
    
    
    

    





}