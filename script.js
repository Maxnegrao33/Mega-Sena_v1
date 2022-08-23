var state = {board: [], currentGame: [], savedGames: []}

function start() {
	addNumberToGame(1);
	addNumberToGame(2);
	addNumberToGame(3);
	addNumberToGame(4);
	addNumberToGame(5);
	addNumberToGame(6);
	
	/*removeNumberFromGame(5);
	removeNumberFromGame(1);
	removeNumberFromGame(0);
	*/
	
	console.log(state.currentGame);
	console.log(state.savedGame);
}

function addNumberToGame(numberToAdd) {
	if (numberToAdd < 1 || numberToAdd > 60) {
	console.error('Número Inválido', numberToAdd);
	return;
}

	if (state.currentGame.length >= 6) {
	console.error('O Jogo já está completo.')
	return;
}
	if(isNumberInGame(numberToAdd)) {
	console.error('Este número já está no Jogo', numberToAdd);
}
	
state.currentGame.push(numberToAdd);
}

	function removeNumberFromGame(numberToRemove) {
		if (numberToRemove < 1 || numberToRemove > 60) {
			console.error('Número inválido', numberToRemove);
			return;
		}
	
	var newGame = []

		for(var i = 0; i < state.currentGame.length; i++) {
			var currentNumber = state.currentGame[i]

			if(currentNumber === numberToRemove) {
				continue;
			}
		newGame.push(currentNumber);	
		}
		state.currentGame = newGame;
	}

	function isNumberInGame(numberToCheck) {
		/*if(state.currentGame.includes(numberToCheck)) {
	return true;
}
		return false;*/
	return state.currentGame.includes(numberToCheck);
}
	function saveGame() {
		if (!isGameComplete()) {
			console.error('O Jogo não está completo')
			return;
		}

		state.savedGames.push(state.currentGame);
	}

	function isGameComplete() {
		return state.currentGame.length === 6;
	}
	
start();


















