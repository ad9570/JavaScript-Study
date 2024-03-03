const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';

const DRAW = 'DRAW';
const WIN = 'PLAYER_WINS';
const LOSE = 'PLAYER_LOST';

let isRunning = false;

const getPlayerChoice = () => {
    let selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '');
    if (selection) {
        selection = selection.toUpperCase();
    }

    if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
        const randomChoice = getRandomChoice();

        alert(`Invalid choice! We chose ${randomChoice} for you!`);
        return randomChoice;
    }

    return selection;
};

const getComputerChoice = () => getRandomChoice();

const getRandomChoice = () => {
    const randomInteger = Math.floor(Math.random() * 3);

    return randomInteger === 0 ? ROCK : randomInteger === 1 ? PAPER : SCISSORS;
};

const getWinner = (plyrChoice, compChoice) =>
    plyrChoice === compChoice ?
        DRAW :
    plyrChoice === PAPER && compChoice === ROCK ||
    plyrChoice === SCISSORS && compChoice === PAPER ||
    plyrChoice === ROCK && compChoice === SCISSORS ?
        WIN :
        LOSE;

startGameBtn.addEventListener('click', () => {
    if (isRunning) {
        return;
    }

    isRunning = true;
    console.log('Game is starting...');

    const playerSelection = getPlayerChoice();
    let message = `playerSelection : ${playerSelection}`;
    message += '\n';

    const computerSelection = getComputerChoice();
    message += `computerSelection : ${computerSelection}`;
    message += '\n';

    const result = getWinner(playerSelection, computerSelection);
    message += `result : ${result}`;

    alert(message);
    isRunning = false;
    console.log('Game has ended...');
});