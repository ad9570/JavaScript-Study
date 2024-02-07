const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';

let isRunning = false;

const getPlayerChoice = function () {
    let selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '');
    if (selection) {
        selection = selection.toUpperCase();
    }

    if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
        const randomInteger = Math.floor(Math.random() * 3);
        const randomChoice = randomInteger === 0 ? ROCK : randomInteger === 1 ? PAPER : SCISSORS;

        alert(`Invalid choice! We chose ${randomChoice} for you!`);
        return randomChoice;
    }

    return selection;
}
startGameBtn.addEventListener('click', function () {
    if (isRunning) {
        return;
    }

    isRunning = true;
    console.log('Game is starting...');
    const playerSelection = getPlayerChoice();
    console.log('playerSelection : ' + playerSelection);
});