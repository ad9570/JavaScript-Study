// 개발자가 하드코딩한 상수값은 대문자로 작성, _로 단어를 구분해 표기하는것이 일반적
const PLAYER_NORMAL_ATTACK_DAMAGE = 11;
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

function getMaxLife() {
    const enteredValue = prompt('Maximum life for you and the monster.', '100');

    const parsedValue = parseFloat(enteredValue);
    if (isNaN(parsedValue) || parsedValue <= 0) {
        throw {message: "Invalid value. The maximum life should be a positive number.\nDefault value of '100' will be used."};
    }

    return parsedValue;
}

let maxLife;
try {
    maxLife = getMaxLife();
} catch (error) {
    console.log(error);
    alert(error.message);
    maxLife = 100;
} finally {

}

let battleLog = [];
let lastLoggedEntry = 0;

let monsterHealth = maxLife;
let playerHealth = maxLife;
let hasBonusLife = true;

adjustHealthBars(maxLife);

function writeLog(eventName, eventValue) {
    let logEntry;
    switch (eventName) {
        case LOG_PLAYER_NORMAL_ATTACK:
        case LOG_PLAYER_STRONG_ATTACK:
            logEntry = {
                event: eventName,
                value: eventValue,
                target: 'MONSTER',
                resultMonsterHealth: monsterHealth,
                resultPlayerHealth: playerHealth
            };
            break;
        case LOG_MONSTER_ATTACK:
            logEntry = {
                event: eventName,
                value: eventValue,
                target: 'PLAYER',
                resultMonsterHealth: monsterHealth,
                resultPlayerHealth: playerHealth
            };
            break;
        case LOG_PLAYER_HEAL:
        case LOG_PLAYER_BONUS_LIFE:
            logEntry = {
                event: eventName,
                value: eventValue,
                target: 'PLAYER',
                resultPlayerHealth: playerHealth
            };
            break;
        case LOG_GAME_OVER:
            logEntry = {
                event: eventName,
                value: eventValue,
                resultMonsterHealth: monsterHealth,
                resultPlayerHealth: playerHealth
            };
            break;
        default:    // invalid event name
            logEntry = {};
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
        if (confirm('Play again?')) {
            resetGame();
            battleLog = [];
            lastLoggedEntry = 0;
        } else {
            disableAction();
        }
    }
}

function attackMonster(mode) {
    const maxDamage = mode === ATTACK_NORMAL ? PLAYER_NORMAL_ATTACK_DAMAGE : PLAYER_STRONG_ATTACK_DAMAGE;
    const logEvent = mode === ATTACK_NORMAL ? LOG_PLAYER_NORMAL_ATTACK : LOG_PLAYER_STRONG_ATTACK;

    const playerDamage = dealMonsterDamage(maxDamage);
    if (monsterHealth > playerDamage) {
        monsterHealth -= playerDamage;
    } else {
        monsterHealth = 0;
    }
    writeLog(logEvent, playerDamage);
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
    for (let i = 0; i < 3; i++) {
        console.log('-------START-------');
    }

    let idx = 1;
    for (const logEntry of battleLog) {
        // do not print event log which is already printed
        if (!lastLoggedEntry || lastLoggedEntry < idx) {
            console.log(`#${idx}`);
            for (const key in logEntry) {
                console.log(`${key} ➔ ${logEntry[key]}`);
            }
            lastLoggedEntry = idx;
            break;  // print 1 log per button click
        }
        idx++;
    }

    let j = 0;
    while (j < 3) {
        console.log('--------END--------');
        j++;
    }
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healHandler);
logBtn.addEventListener('click', printLogHandler);