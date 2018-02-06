
// Set the global variables
var computerLetterBank = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var roundsWon = 0;
var roundsLost = 0;
var remainingGuesses = 9;
var letterArray = [];
var lettersGuessed = [];

// Play volume for winning and losing
var audioWin = new Audio('./assets/Sound/sound1.mp3');
var audioLost = new Audio('./assets/Sound/sound2.mp3');

// Run Game Function on user's key up
document.onkeyup = function(pressKey) {
	// Store the user's guess in the lowercase letter form
	var userGuess = String.fromCharCode(pressKey.keyCode).toLowerCase(); 
	// Have the computer pick a random letter 
	var computerGuess = computerLetterBank[(Math.floor(Math.random()*computerLetterBank.length)+1)]; 

	// If the letter guessed from the user equals the guess of the computer, add 1 to the wins score, reset the variables, play ... 
	// .. the win music and alert the user that they won
	if(userGuess === computerGuess) {
		roundsWon++;
		remainingGuesses = 9;
		lettersGuessed.length = 0;
		letterArray = [];
		audioWin.play();
		alert("Great Work! You Guessed Right!");
	
	// Else the user didn't guess right and as such, subtract 1 from the total guesses left and push the letter the user guessed ...
	// ... incorrectly onto the screen for them to see.	
	} else {
		remainingGuesses--;
		lettersGuessed.push(userGuess); 
		letterArray = lettersGuessed.join(' '); // Joins the letters together but spaced out
	}	

	// If the user does not guess correctly AND their total guesses reaches the vale of 0, then add 1 to their loss count and ...
	// ... reset the variables for another game, play the lost music and alert the user they lost.
	if (remainingGuesses === 0) {
		roundsLost++;
		remainingGuesses = 9;
		lettersGuessed.length = 0;
		letterArray = [];	
		audioLost.play();
		alert("Hah! The Computer Won That Game!");
	}

	// Set the game stats to the user in the Bootsrap-Pannel
	var displayToUser =
		"Rounds Won: " + roundsWon + 
		"<br>Rounds Lost: " + roundsLost + 
		"<br>Remaining Guesses: " + remainingGuesses + 
		"<br>Letters Guessed: " + letterArray;

	// Push the game stats to the html document 	
	document.querySelector("#gameStats").innerHTML = displayToUser;
};


