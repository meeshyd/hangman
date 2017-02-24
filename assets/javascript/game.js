var wordBank = [
	'gunter',
	'finn',
	'lemongrab',
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
var picChoice = '';
var winCount = 0;
var lossCount= 0;
var guessesLeft = 10;
var charImg = document.getElementById('characterImg');
var randomMsg = document.getElementById('random-msg');
var blanksHTML = document.getElementById('blanks');
var soundHTML = document.getElementById('sound');
var songHTML = document.getElementById('song');

//RUN START FUNCTION - this calls the start function, which starts the game.
start();

//RECORD USER KEY PRESS FUNCTION
//get user input and store in userGuess variable. 
//run through check function. also calls gameOver function
//to check for win/lose with every key press
document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	document.getElementById('invalid-char').innerHTML = ('');
	checkLetters(userGuess);
	gameOver();
}

//START FUNCTION - resets variables from prior round, 
//generates random word and splits into array of letters and array of blanks based on length
function start() {
	//using the following array until I figure out a better way to display correct images :) :) 
	var picBank = [
	'assets/images/gunter.png',
	'assets/images/finn.png',
	'assets/images/lemongrab.png',
	'assets/images/marceline.png',
	'assets/images/jake.png',
	'assets/images/beemo.png',
	'assets/images/memow.png'
	];
	//resets image, clears win message & variables
	// soundHTML.src ='assets/sounds/Adventure-Time-Manlorette-Party.mp3';
	soundHTML.src ='';
	charImg.src = 'assets/images/questionMark.png';
	randomMsg.innerHTML = "";
	wrongLetters = [];
	guessesLeft = 10;
	blanksWins = [];
	//pick word from word bank
	wordChoice = wordBank[Math.floor(Math.random() * wordBank.length)];
	//find image that corresponds to wordChoice
	picChoice = picBank[wordBank.indexOf(wordChoice)];
	//split word into letters
	wordChoiceLetters = wordChoice.split('');
	//determine # blanks for each letter in random word by finding length of lettersInSelected
	numberOfBlanks = wordChoiceLetters.length;
	//fills blanksWins array with # of blanks per wordChoiceletters length
	for( var i = 0; i < numberOfBlanks; i++) {
		blanksWins.push('_');
	}
	blanksHTML.innerHTML=blanksWins.join(" ");
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
		// alert ('Letters only!');
		document.getElementById('invalid-char').innerHTML = ('What the lump?! Invalid character!');
	}

}

// END OF GAME FUNCTION - DETERMINES WIN/LOSE, UPDATES HTML, RESETS GAME
function gameOver() {
	
	//Array of favorite Adventure Time phrases to display on wins
	var winMsg = [
	'Mathematical!',
	'Slamacow!',
	'Tops blueby!',
	'Lumping Righteousness!'
	];
	var wrongHTML = document.getElementById('wrong');

	//update HTML with letters in word and guess left
    document.getElementById('guesses-left').innerHTML = guessesLeft;
    wrongHTML.innerHTML = wrongLetters.join(" ");
    blanksHTML.innerHTML = blanksWins.join(" ");
    //determine win or loss
	if(wordChoiceLetters.join(" ") === blanksWins.join(" ")){
        winCount++;
        soundHTML.src ='assets/sounds/win.wav';
        //update win counter & reset wrong letters bank
        document.getElementById('wins').innerHTML = winCount;
        wrongHTML.innerHTML = "";
        //display Adventure Time character image that corresponds to wordChoice and a win message 
        charImg.src = picChoice;
        randomMsg.innerHTML = winMsg[Math.floor(Math.random() * winMsg.length)];
        //reset game by calling start function
        //also added delay to allow final letter to display before reset
        setTimeout(function() { start(); }, 1500);
    }
    if (guessesLeft === 0){
        lossCount++;
        soundHTML.src ='assets/sounds/lose.wav';
        charImg.src = 'assets/images/lemongrab.gif';
        document.getElementById('losses').innerHTML = lossCount;
        wrongHTML.innerHTML = "";
        //reset game by calling start function
        //also added delay to allow final letter to display before reset
        setTimeout(function() { start(); }, 1500);	
	}
}


