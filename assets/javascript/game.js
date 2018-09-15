var crystalRed = 0;
var crystalBlue = 0;
var crystalYellow = 0;
var crystalGreen = 0;
var gamePoints = 0;
var randomNumbGoal = 0;
var gameOver = true;
var Wins = 0 ;
var Losses = 0;

$(document).ready(function() {

	function resetGame(){
		
		// Generate a random number between 19 and 120 to be shown at start of game
	
		randomNumbGoal = Math.floor(Math.random() * 102) + 19;
		$("#randomNumber").text(String(randomNumbGoal));

		// Generate random numbers between 1 and 12 for each of the crystals
		crystalRed = Math.floor(Math.random() * 12) + 1;
		crystalBlue = Math.floor(Math.random() * 12) + 1;
		crystalYellow = Math.floor(Math.random() * 12) + 1;
		crystalGreen = Math.floor(Math.random() * 12) + 1;
		
		// Restart the game
		$("#crystalTotal").text(String(0));
		gamePoints = 0;
		gameOver = false;
	};

	// After each click on a crystal, check the score to see if a Win or Loss
	// has occured. If so, increment wins or losses and then reset the game.
	function checkScore(){
		if (gamePoints > randomNumbGoal) {
			Losses++;
			$("#gameCounters").html("<p>You lose!</p><p>Wins: " + Wins + "</p><p>Losses: " + Losses + "<p>");
			gameOver = true;
			resetGame();
		} else if (gamePoints === randomNumbGoal){
			Wins++;
			$("#gameCounters").html("<p>You win!</p><p>Wins: " + Wins + "</p><p>Losses: " + Losses + "<p>");
			gameOver = true;
			resetGame();
		};
	};
	

	// Initialize the game by calling resetGame every time the page is refreshed();
	if (gameOver === true){
		resetGame();
	}

	// Red Crystal Button 
		$("#buttonRed").click (function() {
		gamePoints = gamePoints + crystalRed;
		$("#crystalTotal").text(String(gamePoints));
		checkScore();
		});
	// Blue Crystal Button
		$("#buttonBlue").click (function() {
		gamePoints = gamePoints + crystalBlue;
		$("#crystalTotal").text(String(gamePoints));
		checkScore();
		});
	// Yellow Crystal Button
		$("#buttonYellow").click (function() {
		gamePoints = gamePoints + crystalYellow;
		$("#crystalTotal").text(String(gamePoints));
		checkScore();
		});
	// Green Crystal Button
		$("#buttonGreen").click (function() {
		gamePoints = gamePoints + crystalGreen;
		$("#crystalTotal").text(String(gamePoints));
		checkScore();
        });
});