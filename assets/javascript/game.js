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

var wordChoice = "";
var wordChoiceLetters = [];
var numberOfBlanks = 0;
var blanksWins = [];
var wrongLetters = [];
//score keeping
var winCount = 0;
var lossCount= 1;
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

	for( var i = 0; i < numberOfBlanks; i++) {
		blanksWins.push("_");
	}
	document.getElementById('blanks').innerHTML=blanksWins.join(" ");
	document.getElementById('guesses-left').innerHTML=guessesLeft;
}

function checkLetters(letters) {

	// if correct change blanks to user selections
	
	// compare user selections against chosen word
	var letterChoice = false;

	for (var i=0; i<numberOfBlanks; i++) {
		if (letters===wordChoice[i]){
			letterChoice = true;
		}
	}
	// if user letter matches, then the above loop assigns true to if 
	// the above loop is true run this
	if (letterChoice) {
		for (i=0; i<numberOfBlanks; i++) {
			if (letters===wordChoice[i]){
			blanksWins[i] = letters;
		}	
	}
	// if incorrect guessed letter goes to wrong letters array
	// if incorrect also subtract 1 from guessesLeft
	} else {
		guessesLeft--;
		wrongLetters.push(letters);
	}

	//to check if letter is already in wrong guesses what we want to do is 
	//set up if else so that will run a for loop that will iterate over all
	//the wrong letters and then use the if else to check if already exists

	// console.log('wrong guess', wrongLetters);
}


function gameOver() {
	//write wins/losses to HTML
	//update HTML with letters in word and guess left
    document.getElementById('guesses-left').innerHTML = guessesLeft;
    document.getElementById('wrong').innerHTML = wrongLetters.join(" ");
    document.getElementById('blanks').innerHTML = blanksWins.join(" ");
    //determine win or loss
	if(wordChoiceLetters.join(" ") === blanksWins.join(" ")){
        winCount++;
        document.getElementById('wins').innerHTML = winCount;
        alert("Mathematical! You Win!");
        //reset game by calling start function
        start();
    }
    if (guessesLeft === 0){
        lossCount++;
        document.getElementById('losses').innerHTML = lossCount;
        document.getElementById('wrong').innerHTML = "";
        alert("UNACCEPTABLE! No guesses left!");        
        //reset game by calling start function
        start();	
	}
}

/*runs start function*/
start();
/*get user input and store in userGuess variable. 
run through check function. also calls gameOver function*/
document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetters(userGuess);
	gameOver();
}
