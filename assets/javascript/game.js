
// Set the global variables
var computerLetterBank = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var wins = 0;
var losses = 0;
var remainingGuesses = 9;
var audioWin = new Audio('./assets/Sound/sound1.mp3');
var audioLost = new Audio('./assets/Sound/sound2.mp3');


// Store Letter(s) Guessed Into Array
var lettersGuessed = [];

// Run Game Function

document.onkeyup = function(pressKey) {
	var userGuess = pressKey.key;
	var computerGuess = computerLetterBank[(Math.floor(Math.random() * computerLetterBank.length)+1)];
	var key = String.fromCharCode(pressKey.keyCode).toLowerCase(); 

	if(userGuess === computerGuess) {
		wins++;
		remainingGuesses = 9;
		string = [];
		lettersGuessed.length = 0;
		audioWin.play();
		alert("Great Work! You Guessed Right");
		
	} else {
		remainingGuesses--;
		lettersGuessed.push(key);
		var string = lettersGuessed.join(',');
	}	
		
	if (remainingGuesses === 0) {
		losses++;
		remainingGuesses = 9;
		string = [];
		lettersGuessed.length = 0;	
		audioLost.play();
		alert("Hah! The Computer One That Game");
	}


	var displayToUser =
		"<p>wins: " + wins + "</p>" +
		"<p>losses: " + losses + "</p>" +
		"<p>number of guesses left: " + remainingGuesses + "</p>" +
		"<p>Letters Guesses: " + string + " </p>";

	document.querySelector("#gameStats").innerHTML = displayToUser;
};


