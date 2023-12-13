// 개발자가 하드코딩한 상수값은 대문자로 작성, _로 단어를 구분해 표기하는것이 일반적
const PLAYER_ATTACK_DAMAGE = 11;
const PLAYER_STRONG_ATTACK_DAMAGE = 17;
const MONSTER_ATTACK_DAMAGE = 20;
const HEAL_VALUE = 14;

let maxLife = 100;
let monsterHealth = maxLife;
let playerHealth = maxLife;
let hasBonusLife = true;

adjustHealthBars(maxLife);

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
    playerHealth -= monsterDamage;

    // bonus life
    if (playerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        playerHealth = previousPlayerHealth;
        setPlayerHealth(previousPlayerHealth);
        alert('You would be dead, but the bonus life saved you!');
    }

    // finish if health is zero
    if (playerHealth > 0 && monsterHealth <= 0) {
        alert('You won!');
    } else if (playerHealth <= 0 && monsterHealth > 0) {
        alert('You lost!');
    } else if (playerHealth <= 0 && monsterHealth <= 0) {
        alert('You have a draw!');
    }

    // reset if finished
    if (playerHealth <= 0 || monsterHealth <= 0) {
        resetGame();
    }
}

function attackMonster(mode) {
    let maxDamage;
    if (mode === 'NORMAL') {
        maxDamage = PLAYER_ATTACK_DAMAGE;
    } else if (mode === 'STRONG') {
        maxDamage = PLAYER_STRONG_ATTACK_DAMAGE;
    }

    const playerDamage = dealMonsterDamage(maxDamage);
    monsterHealth -= playerDamage;
    endRound();
}

function attackHandler() {
    attackMonster('NORMAL');
}

function strongAttackHandler() {
    attackMonster('STRONG');
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
    endRound();
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healHandler);