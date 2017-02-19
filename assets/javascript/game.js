// array with list of possible words
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

// someway to isolate one word for user guesses
//identify chosen word with a randomizing function
var wordChoice = "";

//array with letters in selectedWord
var lettersInSelected = [];

//# of letters in SelectedWord
var numberOfBlanks = 0;
var blanksWins = [];

// onkey function for user letter guess
// store user letter guess and compare to computer word
// 	guessed letters
var correctLetters = [];
// 	wrong letters
var wrongLetters = [];
// 	correct letters??
//  repeat letters??

// show guessed, correct, wrong letters on page (add to HTML)
// show blanks for word pick and change to letters in word pick as user guesses letters

//score keeping
var winCount=0;
var lossCount=0;
var guessesLeft=10;


function start() {
	//pick word from word bank
	wordChoice = wordBank[Math.floor(Math.random() * wordBank.length)];
	//split word into letters
	lettersInSelected = wordChoice.split("");
	//determine # blanks for each letter in random word by finding length of lettersInSelected
	numberOfBlanks = lettersInSelected.length;
	//for loop runs if i is less than # of blanks
	console.log (wordChoice);
	console.log (numberOfBlanks);

	for( var i = 0; i < numberOfBlanks; i++) {
		blanksWins.push("_");
	}
	console.log (blanksWins);
}

function checkLetters(letters) {
	// compare user selections against chosen word
	// if correct change blanks to user selections
	// if incorrect guessed letter goes to wrong letters array
	// if incorrect also subtract 1 from guessesLeft
}

function updateHTML() {
	//letters that are in word
	//guesses left
	//wrongly guessed letters
	//determine win or lose
}
start();

document.onkeyup = function(event) {
	//takes user input
	//runs through checkLetters
}
