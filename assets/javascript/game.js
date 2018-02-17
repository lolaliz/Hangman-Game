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




function updateScore(){
    if (updateWin()){ 
        wins++;
        document.getElementById("win-counter").innerHTML = wins; 
        startGame()  

}
else (updateLoss());{
    
        losses++;
        document.getElementById("loss-conter").innerHTML = losses;
        startGame()
        
        

    }
}

function updateWin (underscores = lettersinAnim.length){
    
    startGame();
    //add what happens if the user wins code here

    //Make a call to the startGame function here. 
    //This call is here to start the game once a player wins.

}

function updateLoss(guessesL= 0) {
   
    startGame();
    //add what happens if the user loses code here

    //Make a call to the startGame function here.
    //This call is here to start the game once a player losses.

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
                updateScore()
                
            }}
        }

        else {
            wGuesses.push(userGuess);
            guessesL--;
            document.getElementById("guesses-left").innerHTML = guessesL;
            document.getElementById("wrong-guesses").innerHTML = wGuesses;
            console.log ('wrong guesses:' + wGuesses);
            updateScore();
            
          }


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
          
            

            gameStart ();


    
    
    
    
    
    
    
    
    

    





}