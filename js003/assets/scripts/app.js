// 개발자가 하드코딩한 상수값은 대문자로 작성, _로 단어를 구분해 표기하는것이 일반적
const PLAYER_ATTACK_DAMAGE = 11;
const PLAYER_STRONG_ATTACK_DAMAGE = 17;
const MONSTER_ATTACK_DAMAGE = 20;
const HEAL_VALUE = 14;

const ATTACK_NORMAL = 'NORMAL';
const ATTACK_STRONG = 'STRONG';
const LOG_PLAYER_NORMAL_ATTACK = 'PLAYER_NORMAL_ATTACK';
const LOG_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_PLAYER_BONUS_LIFE = 'PLAYER_BONUS_LIFE';
const LOG_GAME_OVER = 'GAME_OVER';

const enteredValue = prompt('Maximum life for you and the monster.', '100');
let maxLife = parseFloat(enteredValue);

if (isNaN(maxLife) || maxLife <= 0) {
    maxLife = 100;
    alert("Invalid value. The maximum life will be 100(default value).");
}

let battleLog = [];

let monsterHealth = maxLife;
let playerHealth = maxLife;
let hasBonusLife = true;

adjustHealthBars(maxLife);

function writeLog(eventName, eventValue) {
    let logEntry;
    if (eventName === LOG_PLAYER_NORMAL_ATTACK) {
        logEntry = {
            event: eventName,
            value: eventValue,
            target: 'MONSTER',
            resultMonsterHealth: monsterHealth,
            resultPlayerHealth: playerHealth
        };
    } else if (eventName === LOG_PLAYER_STRONG_ATTACK) {
        logEntry = {
            event: eventName,
            value: eventValue,
            target: 'MONSTER',
            resultMonsterHealth: monsterHealth,
            resultPlayerHealth: playerHealth
        };
    } else if (eventName === LOG_MONSTER_ATTACK) {
        logEntry = {
            event: eventName,
            value: eventValue,
            target: 'PLAYER',
            resultMonsterHealth: monsterHealth,
            resultPlayerHealth: playerHealth
        };
    } else if (eventName === LOG_PLAYER_HEAL) {
        logEntry = {
            event: eventName,
            value: eventValue,
            target: 'PLAYER',
            resultMonsterHealth: monsterHealth,
            resultPlayerHealth: playerHealth
        };
    } else if (eventName === LOG_PLAYER_BONUS_LIFE) {
        logEntry = {
            event: eventName,
            value: eventValue,
            target: 'PLAYER',
            resultMonsterHealth: monsterHealth,
            resultPlayerHealth: playerHealth
        };
    } else if (eventName === LOG_GAME_OVER) {
        logEntry = {
            event: eventName,
            value: eventValue,
            resultMonsterHealth: monsterHealth,
            resultPlayerHealth: playerHealth
        };
    } else {    // invalid event name
        return;
    }

    battleLog.push(logEntry);
}

function resetGame() {
    monsterHealth = maxLife;
    playerHealth = maxLife;
    hasBonusLife = true;
    resetUI(maxLife);
}

function endRound() {
    const previousPlayerHealth = playerHealth;

    // monster attacks
    const monsterDamage = dealPlayerDamage(MONSTER_ATTACK_DAMAGE);
    if (playerHealth > monsterDamage) {
        playerHealth -= monsterDamage;
    } else {
        playerHealth = 0;
    }
    writeLog(LOG_MONSTER_ATTACK, monsterDamage);

    // bonus life
    if (playerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        playerHealth = previousPlayerHealth;
        setPlayerHealth(previousPlayerHealth);
        alert('You would be dead, but the bonus life saved you!');
        writeLog(LOG_PLAYER_BONUS_LIFE, -1)
    }

    // decide result if one of the participants' health is zero
    if (playerHealth > 0 && monsterHealth <= 0) {
        alert('You won!');
        writeLog(LOG_GAME_OVER, 'PLAYER WON');
    } else if (playerHealth <= 0 && monsterHealth > 0) {
        alert('You lost!');
        writeLog(LOG_GAME_OVER, 'MONSTER WON');
    } else if (playerHealth <= 0 && monsterHealth <= 0) {
        alert('You have a draw!');
        writeLog(LOG_GAME_OVER, 'A DRAW');
    }

    // finish the game if the result is decided
    if (playerHealth <= 0 || monsterHealth <= 0) {
        printLogHandler();
        if (confirm('Play again?')) {
            resetGame();
            battleLog = [];
        } else {
            disableAction();
        }
    }
}

function attackMonster(mode) {
    let maxDamage;
    let logEvnet;
    if (mode === ATTACK_NORMAL) {
        maxDamage = PLAYER_ATTACK_DAMAGE;
        logEvnet = LOG_PLAYER_NORMAL_ATTACK;
    } else if (mode === ATTACK_STRONG) {
        maxDamage = PLAYER_STRONG_ATTACK_DAMAGE;
        logEvnet = LOG_PLAYER_STRONG_ATTACK;
    }

    const playerDamage = dealMonsterDamage(maxDamage);
    if (monsterHealth > playerDamage) {
        monsterHealth -= playerDamage;
    } else {
        monsterHealth = 0;
    }
    writeLog(logEvnet, playerDamage);
    endRound();
}

function attackHandler() {
    attackMonster(ATTACK_NORMAL);
}

function strongAttackHandler() {
    attackMonster(ATTACK_STRONG);
}

function healHandler() {
    let healValue;
    if (playerHealth + HEAL_VALUE > maxLife) {
        alert("You can't heal to more than your max health.");
        healValue = maxLife - playerHealth;
    } else {
        healValue = HEAL_VALUE;
    }

    increasePlayerHealth(healValue);
    playerHealth += healValue;
    writeLog(LOG_PLAYER_HEAL, healValue);
    endRound();
}

function printLogHandler() {
    console.log(battleLog);
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healHandler);
logBtn.addEventListener('click', printLogHandler);