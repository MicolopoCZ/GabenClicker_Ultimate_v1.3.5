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


// DMG zbraní
const akDMG = 36;
const pDMG = 25;

// DMG zbraní proti kevlaru
const akDMGA = 27;
const pDMGA = 17;


// hráčova střelba
attack.onmousedown = () => {
    let firing = hitChance[Math.floor(Math.random() * hitChance.length)];

    if (firing == 1) {
        if (enemyHp.innerHTML > 0 && playerHp.innerHTML > 0) {
            enemyHp.innerHTML = enemyHp.innerHTML - akDMGA;
            enemyHp.style.color = "red";
            enemyHp.style.fontSize = "50px";
            player.style.display = "none";
            playerAttack.style.display = "flex"
            playerAttack.style.display = "flex";
            kalasSFX.play();
            kalasSFX.volume = 1.5;
            kalasSFX.currentTime = 0,5;
        }

        if (enemyHp.innerHTML <= 0) {
            clearInterval(enemyAttackInterval);
            enemyHp.innerHTML = "0";
            info.innerHTML = "Terroristé vyhráli";
            info.style.display = "block";
        }
    }
    
    if (firing == 0) {
        player.style.display = "none";
        playerAttack.style.display = "flex"
        playerAttack.style.display = "flex";
        kalasSFX.play();
        kalasSFX.volume = 1.5;
        kalasSFX.currentTime = 0,5;
    }
};

attack.onmouseup = () => {
    player.style.display = "flex";
    playerAttack.style.display = "none";
    enemyHp.style.color = "white";
    enemyHp.style.fontSize = "50px";
};


// NPC střelba
const enemyAttackInterval = setInterval(() => {
    if (playerHp.innerHTML <= 0) {
        clearInterval(enemyAttackInterval);
        info.innerHTML = "Counter Terroristé vyhráli"
    }
    let firing = hitChance[Math.floor(Math.random() * hitChance.length)];
    if (firing == 1) {
        playerHp.innerHTML = playerHp.innerHTML - pDMGA;
        enemy.style.display = "none";
        enemyAttack.style.display = "flex";
        pnineSFX.play();
        pnineSFX.volume = 0.01;
        pnineSFX.currentTime = 0;
    }
    if (firing == 0) {
        enemy.style.display = "none";
        enemyAttack.style.display = "flex";
        pnineSFX.play();
        pnineSFX.volume = 0.01;
        pnineSFX.currentTime = 0;
    }
}, 300);

const enemyFireInterval = setInterval(() => {
    enemy.style.display = "flex";
    enemyAttack.style.display = "none";
}, 400);


// šance na hit
let hitChance = [
    0, 0, 0, 0, 0, 0, 1, 1, 1
];