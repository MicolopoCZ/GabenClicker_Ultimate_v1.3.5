const money = document.getElementById("money");
const counter = document.getElementById("counter");
const clickUpgrade = document.getElementById("clickUpgrade")
const autoclickerUpgrade = document.getElementById("autoclickerUpgrade")
const casesUpgrade = document.getElementById("casesUpgrade")
const collectionUpgrade = document.getElementById("collectionUpgrade")

const play = document.getElementById("musicButton")
const mute = document.getElementById("muteButton")

let dollars = localStorage.money;

let clickIncrease = 1;
let clickIncreasePrice = 100;
localStorage.clickNumber = 1;

let autoclickerIncrease = 0;
let autoclickerPrice = 200;
localStorage.autoNumber = 1;

let casesUpgradeIncrease = 0;
let casesUpgradeModifier = 2;
let casesUpgradePrice = 400;
localStorage.casesNumber = 1;

let collectionUpgradeIncrease = 0;
let collectionUpgradeModifier = 8;
let collectionUpgradePrice = 1000;
localStorage.collectionNumber = 1;




money.onclick = () => {
    dollars += clickIncrease;
        if (localStorage.money) {
          localStorage.money = Number(localStorage.money)+clickIncrease;
        } else {
          localStorage.money = 1;
        }
    counter.innerHTML = localStorage.money;
}

money.onmousedown = () => {
    money.style.fontSize = "30px";
}
money.onmouseup = () => {
    money.style.fontSize = "60px";
}





mute.onclick = () => {
    mute.style.display = "none";
    play.style.display = "block";
}
play.onclick = () => {
    play.style.display = "none";
    mute.style.display = "block";
}




clickUpgrade.onclick = () => {
    if (localStorage.money >= clickIncreasePrice) {
        localStorage.money -= clickIncreasePrice;
        clickIncreasePrice += 100;
        clickUpgrade.innerHTML = `Buy Click Upgrade: ${clickIncreasePrice} dollars <br> (${localStorage.clickNumber})`
        counter.innerHTML = localStorage.money;
        clickIncrease++;
        localStorage.clickNumber ++;
    }
}
autoclickerUpgrade.onclick = () => {
    if (localStorage.money >= autoclickerPrice) {
        localStorage.money -= autoclickerPrice;
        counter.innerHTML = localStorage.money;
        autoclickerPrice += 200;
        autoclickerUpgrade.innerHTML = `Buy Autoclicker: ${autoclickerPrice} dollars <br> (${localStorage.autoNumber})`
        if (autoclickerIncrease == 0) {
            setInterval(() => {
                localStorage.money += autoclickerIncrease;
                counter.innerHTML = localStorage.money;
            }, 1000);
        }
        autoclickerIncrease++;
        localStorage.autoNumber ++;
    }
}







casesUpgrade.onclick = () => {
    if (localStorage.money >= casesUpgradePrice) {
        localStorage.money -= casesUpgradePrice;
        counter.innerHTML = localStorage.money;
        casesUpgradePrice += 300;
        casesUpgrade.innerHTML = `Buy Cases: ${casesUpgradePrice} dollars <br> (${localStorage.casesNumber})`
        if (casesUpgradeIncrease == 0) {
            setInterval(() => {
                localStorage.money += casesUpgradeIncrease;
                counter.innerHTML = localStorage.money;
            }, 800);
        }
        casesUpgradeIncrease += casesUpgradeModifier;
        localStorage.casesNumber ++;
    }
}






collectionUpgrade.onclick = () => {
    if (localStorage.money >= collectionUpgradePrice) {
        localStorage.money -= collectionUpgradePrice;
        counter.innerHTML = localStorage.money;
        collectionUpgradePrice += 500;
        collectionUpgrade.innerHTML = `Buy Collections: ${collectionUpgradePrice} dollars <br> (${localStorage.collectionNumber})`
        if (collectionUpgradeIncrease == 0) {
            setInterval(() => {
                localStorage.money += collectionUpgradeIncrease;
                counter.innerHTML = localStorage.money;
            }, 500);
        }
        collectionUpgradeIncrease += collectionUpgradeModifier;
        localStorage.collectionNumber ++;
    }
}