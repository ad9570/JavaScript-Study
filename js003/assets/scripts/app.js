// 개발자가 하드코딩한 상수값은 대문자로 작성, _로 단어를 구분해 표기하는것이 일반적
const PLAYER_ATTACK_DAMAGE = 10;
const MONSTER_ATTACK_DAMAGE = 14;

let maxLife = 100;
let monsterHealth = maxLife;
let playerHealth = maxLife;

adjustHealthBars(maxLife);

function attackHandler() {
    const playerDamage = dealMonsterDamage(PLAYER_ATTACK_DAMAGE);
    monsterHealth -= playerDamage;

    const monsterDamage = dealPlayerDamage(MONSTER_ATTACK_DAMAGE);
    playerHealth -= monsterDamage;

    if (monsterHealth <= 0 && playerHealth > 0)
        alert('You won!');
    else if (playerHealth <= 0 && monsterHealth > 0)
        alert('You lost!')
    else if (playerHealth <= 0 && monsterHealth <= 0)
        alert('You have a draw!');
}
attackBtn.addEventListener('click', attackHandler);