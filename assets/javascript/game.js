var wordBank = [
	'gunter',
	'finn',
	'lemongrab',
	'prismo',
	'marceline',
	'jake',
	'beemo',
	'memow',
]

var wordChoice = "";
var wordChoiceLetters = [];
var numberOfBlanks = 0;
var blanksWins = [];
var wrongLetters = [];
// 	correct letters??
//  repeat letters??

// show guessed, correct, wrong letters on page (add to HTML)
// show blanks for word pick and change to letters in word pick as user guesses letters

//score keeping
var winCount = 0;
var lossCount = 0;
var guessesLeft = 10;


function start() {
	wrongLetters = [];
	guessesLeft = 10;
	blanksWins = [];
	//pick word from word bank
	wordChoice = wordBank[Math.floor(Math.random() * wordBank.length)];
	//split word into letters
	wordChoiceLetters = wordChoice.split("");
	//determine # blanks for each letter in random word by finding length of lettersInSelected
	numberOfBlanks = wordChoiceLetters.length;
	console.log (wordChoice);
	console.log (numberOfBlanks);

	for( var i = 0; i < numberOfBlanks; i++) {
		blanksWins.push("_");
	}
	console.log(blanksWins);
	document.getElementById('blanks').innerHTML=blanksWins.join(" ");
	document.getElementById('guesses').innerHTML=guessesLeft;
}
/*runs start function*/
start();

function checkLetters(letters) {

	// if correct change blanks to user selections
	
	// compare user selections against chosen word
	var letterChoice = false;
	for (i=0; i<numberOfBlanks; i++) {
		if (letters===wordChoice[i]){
			letterChoice = true;
		}
	}
	// if user letter matches, then the above loop assigns true to if the above loop is true run this
	if (letterChoice) {
		for (i=0; i<numberOfBlanks; i++) {
			if (letters===wordChoice[i]){
			blanksWins[i] = letters;
		}	
	}
	console.log('inside check letter ', blanksWins);
	// if incorrect guessed letter goes to wrong letters array
	// if incorrect also subtract 1 from guessesLeft
	} else {
		guessesLeft --;
		wrongLetters.push(letters);
	}
	console.log('wrong guess in check letter', wrongLetters);
}

function addHTML() {
	//letters that are in word
	//guesses left
	//wrongly guessed letters
	//determine win or lose
}

document.onkeyup = function() {
	//takes user input
	//runs through checkLetters
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log("typed letter: "+ userGuess);
	checkLetters(userGuess);

}

function restart() {
	//call start function when player wins or loses
}
