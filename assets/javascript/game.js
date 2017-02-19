var wordBank = [
	'gunter',
	'finn',
	'lemongrab',
	'prismo',
	'marceline',
	'jake',
	'beemo',
	'memow'
];

var wordChoice = '';
var wordChoiceLetters = [];
var numberOfBlanks = 0;
var blanksWins = [];
var wrongLetters = [];
//score keeping
var winCount = 0;
var lossCount= 1;
var guessesLeft = 10;

//START FUNCTION - resets variables from prior round, 
//generates random word and splits into array of letters and array of blanks based on length
function start() {
	//reset variables
	wrongLetters = [];
	guessesLeft = 10;
	blanksWins = [];
	//pick word from word bank
	wordChoice = wordBank[Math.floor(Math.random() * wordBank.length)];
	//split word into letters
	wordChoiceLetters = wordChoice.split('');
	//determine # blanks for each letter in random word by finding length of lettersInSelected
	numberOfBlanks = wordChoiceLetters.length;
	//fills blanksWins array with # of blanks per wordChoiceletters length
	for( var i = 0; i < numberOfBlanks; i++) {
		blanksWins.push('_');
	}
	document.getElementById('blanks').innerHTML=blanksWins.join(" ");
	document.getElementById('guesses-left').innerHTML=guessesLeft;
}
//CHECKING FUNCTION - verifies user key press is a letter.
//If it is, checks if it is in computer word

function checkLetters(letters) {
//check is user input is a letter
//if it is, proceed to check letter against computer word. 
//if not, alert 'letters only'
	var goodLetters= /^[A-Za-z]+$/;
	if (letters.match(goodLetters)) {

	// compare user selections against chosen word
		// var letterChoice = false;
		var letterChoice = false;
		for (var i = 0; i<numberOfBlanks; i++) {
			if (letters===wordChoice[i]){
				letterChoice = true;
			}
		}
		// if user letter matches, then the above loop assigns true to if 
		// the above loop is true run this
		if (letterChoice) {

			for (i = 0; i<numberOfBlanks; i++) {
				if (letters===wordChoice[i]){
				blanksWins[i] = letters;	
			}	
		// if incorrect guessed letter goes to wrong letters array
		// if incorrect also subtract 1 from guessesLeft
		}
		}else {
			if(wrongLetters.indexOf(letters)> -1){
	              } else{
	          wrongLetters.push(letters);
	          guessesLeft--;
			}	
		}
	} else {
		alert ('Letters only!');
	}

}

// END OF GAME FUNCTION - DETERMINES WIN/LOSE, UPDATES HTML, RESETS GAME
function gameOver() {
	//write wins/losses to HTML
	//update HTML with letters in word and guess left
    document.getElementById('guesses-left').innerHTML = guessesLeft;
    document.getElementById('wrong').innerHTML = wrongLetters.join(" ");
    document.getElementById('blanks').innerHTML = blanksWins.join(" ");
    //determine win or loss
	if(wordChoiceLetters.join(" ") === blanksWins.join(" ")){
        winCount++;
        // alert("Mathematical! You Win!");
        document.getElementById('wins').innerHTML = winCount;
        document.getElementById('wrong').innerHTML = "";
        //reset game by calling start function
        //also added delay to allow final letter to display before reset
        setTimeout(function() { start(); }, 700);
    }
    if (guessesLeft === 0){
        lossCount++;
        // alert("UNACCEPTABLE! No guesses left!");   
        document.getElementById('losses').innerHTML = lossCount;
        document.getElementById('wrong').innerHTML = "";
        //reset game by calling start function
        //also added delay to allow final letter to display before reset
        setTimeout(function() { start(); }, 700);	
	}
}

//RUN START FUNCTION - this calls the start function, which starts the game.
start();

//RECORD USER KEY PRESS FUNCTION
//get user input and store in userGuess variable. 
//run through check function. also calls gameOver function
//to check for win/lose with every key press
document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetters(userGuess);
	gameOver();
}
