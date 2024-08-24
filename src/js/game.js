import Character from './domain';

export default class Game {
	start() {
		console.log('game started');
	}
}

export class GameSavingData {
}

function readGameSaving() {
}

function writeGameSaving() {
}

export {readGameSaving, writeGameSaving}