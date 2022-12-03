const player = document.getElementById("player");
const attack = document.getElementById("attack");
const heal = document.getElementById("heal");
const enemy = document.getElementById("enemy");
const playerHp = document.getElementById("playerHp");
const playerAttack = document.getElementById("playerAttack");
const enemyHp = document.getElementById("enemyHp");
const enemyAttack = document.getElementById("enemyAttack");
const info = document.getElementById("info");
const kalasSFX = document.getElementById("fireSFX");
const pnineSFX = document.getElementById("enemyfireSFX");

attack.onmousedown = () => {
    if (enemyHp.innerHTML > 0 && playerHp.innerHTML > 0) {
        enemyHp.innerHTML --;
        enemyHp.style.color = "red";
        enemyHp.style.fontSize = "50px";
        player.style.display = "none";
        playerAttack.style.display = "flex"
        playerAttack.style.display = "flex";
        kalasSFX.play();
        kalasSFX.volume = 1.5;
        kalasSFX.currentTime = 0,5;
    }
    if (enemyHp.innerHTML == 0) {
        info.innerHTML = "Info: Nepřítel zemřel";
        clearInterval(enemyAttackInterval);
    }
    
};

attack.onmouseup = () => {
    player.style.display = "flex";
    playerAttack.style.display = "none";
    enemyHp.style.color = "white";
    enemyHp.style.fontSize = "50px";
};

    heal.onclick = () => {
        if (playerHp.innerHTML > 0) {
        playerHp.innerHTML = "20";
    };
}

const enemyAttackInterval = setInterval(() => {
    if (playerHp.innerHTML <= 0) {
        clearInterval(enemyAttackInterval);
        info.innerHTML = "Info: Hráč zemřel"
    }
    playerHp.innerHTML --;
    enemy.style.display = "none";
    enemyAttack.style.display = "flex";
    pnineSFX.play();
    pnineSFX.volume = 0.01;
    pnineSFX.currentTime = 0;
}, 800);

const enemyMoveInterval = setInterval(() => {
    enemy.style.display = "flex";
    enemyAttack.style.display = "none";
}, 900);