// All code should be written in this file.

//player one move type variables
let playerOneMoveOneType;
let playerOneMoveTwoType;
let playerOneMoveThreeType;

//player one point values variables for move type
let playerOneMoveOneValue;
let playerOneMoveTwoValue;
let playerOneMoveThreeValue;

//player two move type variables
let playerTwoMoveOneType;
let playerTwoMoveTwoType;
let playerTwoMoveThreeType;

//player two point values variables for move type
let playerTwoMoveOneValue;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeValue;

//setting global variabls for getGameWinner function
let playerOneWins;
let playerTwoWins;

//robot moves types
let robotMoveOneType; 
let robotMoveTwoValue;
let robotMoveThreeValue;

//robot move values
let robotMoveOneValue; 
let robotMoveTwoType;
let	robotMoveThreeType;


//function that assigns player number to moves and move values
function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, 
	moveTwoValue, moveThreeType, moveThreeValue){
	if (!player || !moveOneType || !moveOneValue || !moveTwoType || 
		!moveTwoValue || !moveThreeType || !moveThreeValue ){
		return;
	} 

	//test if move type is either rock, paper, or scissors
	if(!isValidMoveType(moveOneType)){
		return;
	}
	if(!isValidMoveType(moveTwoType)){
		return;
	}
	if(!isValidMoveType(moveThreeType)){
		return;
	}

	//test if move value is a valid number between 0 and 100
	if(!isValidMoveValue(moveOneValue)){
		return;
	}
	if(!isValidMoveValue(moveTwoValue)){
		return;
	}
	if(!isValidMoveValue(moveThreeValue)){
		return;
	}


	if ((moveOneValue+moveTwoValue+moveThreeValue) > 99){
		return;
	}

	//sets the global values for correct player
	if (player === 'Player One'){
		playerOneMoveOneType = moveOneType;
		playerOneMoveOneValue = moveOneValue;
		playerOneMoveTwoType = moveTwoType;
		playerOneMoveTwoValue = moveTwoValue;
		playerOneMoveThreeType = moveThreeType;
		playerOneMoveThreeValue = moveThreeValue;

	} else if (player === 'Player Two'){
		playerTwoMoveOneType = moveOneType;
		playerTwoMoveOneValue = moveOneValue;
		playerTwoMoveTwoType = moveTwoType;
		playerTwoMoveTwoValue = moveTwoValue;
		playerTwoMoveThreeType = moveThreeType;
		playerTwoMoveThreeValue = moveThreeValue;
	}


}

function isValidMoveType(moveType){
	if(moveType === 'rock' || moveType === 'paper' || moveType === 'scissors'){
		return moveType;
	} else {
		return false;
	}
}

function isValidMoveValue(moveValue){
	if(moveValue >= 1 && moveValue <= 99){
		return moveValue;
	} else {
		return false;
	}
}

//find out the winner of each individual round
function getRoundWinner(roundNumber) {

//return null for an invalid roundNumber
if (roundNumber < 1 || roundNumber > 3){
	return null;
}

	//checks to see what round is being played, input the global move and valuable variables
	//into their corresponding round, use moveComparison to determine the winners
	//return winners for each case
	switch (roundNumber){
		case 1:
			return moveComparison(
				playerOneMoveOneType, 
				playerTwoMoveOneType, 
				playerOneMoveOneValue, 
				playerTwoMoveOneValue);
			break;
		case 2:
			return moveComparison(
				playerOneMoveTwoType,
				playerTwoMoveTwoType,
				playerOneMoveTwoValue,
				playerTwoMoveTwoValue);
			break;
		case 3:
			return moveComparison(
				playerOneMoveThreeType,
				playerTwoMoveThreeType,
				playerOneMoveThreeValue,
				playerTwoMoveThreeValue);
			break;
		default:
			return 'getRoundWinner failed';
	}
}

//compares each players move type and move value
//a winner is determined and returned
function moveComparison(playerOneMoveType, playerTwoMoveType, playerOneMoveValue, playerTwoMoveValue){
	if (!playerOneMoveType || !playerTwoMoveType || !playerOneMoveValue || !playerTwoMoveValue){
		return null;
	}

	//check if MoveTypes are equal
	//if they are equal, the MoveValue is compared and the higher value wins
	if (playerOneMoveType === playerTwoMoveType){
		if (playerOneMoveValue > playerTwoMoveValue) {
			return 'Player One';
		} else if (playerOneMoveValue < playerTwoMoveValue) {
			return 'Player Two';
		} else {
			return 'Tie';
		} 
	} else {
		if (playerOneMoveType === 'rock'){
			if (playerTwoMoveType === 'scissors') {
				return 'Player One';
			} else {
				return 'Player Two';
			} 
		} else if (playerOneMoveType === 'paper'){
			if (playerTwoMoveType === 'rock') {
				return 'Player One';
			} else {
				return 'Player Two';
			}
		} else if (playerOneMoveType === 'scissors'){
			if (playerTwoMoveType === 'paper') {
				return 'Player One';
			} else {
				return 'Player Two';
			} 
		} 
	}
}

getRoundWinner(1);
getRoundWinner(2);
getRoundWinner(3);


function getGameWinner(){
	if(!playerOneMoveOneType || !playerOneMoveTwoType || !playerOneMoveThreeType ||
		!playerTwoMoveOneType || !playerTwoMoveTwoType || !playerTwoMoveThreeType ||
		!playerOneMoveOneValue || !playerOneMoveTwoValue || !playerOneMoveThreeValue ||
		!playerTwoMoveOneValue || !playerTwoMoveTwoValue || !playerTwoMoveThreeValue){
			return null;
	}

	playerOneWins = 0;
	playerTwoWins = 0;

	const roundOneWinner = getRoundWinner(1);
	const roundTwoWinner = getRoundWinner(2);
	const roundThreeWinner = getRoundWinner(3);

	addWinner(roundOneWinner);
	addWinner(roundTwoWinner);
	addWinner(roundThreeWinner);

	if (playerOneWins > playerTwoWins){
		return 'Player One';
	} else if (playerOneWins < playerTwoWins){
		return 'Player Two';
	} else {
		return 'Tie';
	}

}

function addWinner(winner){
	if (winner === 'Player One'){
		playerOneWins++;
	} else if (winner === 'Player Two'){
		playerTwoWins++;
	} 
}

function setComputerMoves(){
	robotMoveOneType = assignComputerMoves();
	robotMoveTwoType = assignComputerMoves();
	robotMoveThreeType = assignComputerMoves();

	robotMoveOneValue = Math.floor(Math.random()*99);
	robotMoveTwoValue = Math.floor(Math.random()*(99-robotMoveOneValue));
	robotMoveThreeValue = 99 - robotMoveOneValue - robotMoveTwoValue;

	setPlayerMoves('Player Two', robotMoveOneType, robotMoveOneValue,
	robotMoveTwoType, robotMoveTwoValue, robotMoveThreeType, robotMoveThreeValue);
}

function assignComputerMoves(){
	let moveNumber = Math.floor(Math.random()*3);

	if (moveNumber = 0){
		return 'rock';
	} else if (moveNumber = 1){
		return 'paper';
	} else if (moveNumber = 2){
		return 'scissors';
	}
}

getGameWinner();