const money = document.getElementById("money");
const counter = document.getElementById("counter");
const clickUpgrade = document.getElementById("clickUpgrade")
const autoclickerUpgrade = document.getElementById("autoclickerUpgrade")
const casesUpgrade = document.getElementById("casesUpgrade")
const collectionUpgrade = document.getElementById("collectionUpgrade")

const play = document.getElementById("musicButton")
const mute = document.getElementById("muteButton")

let dollars = 0;

let clickIncrease = 1;
let clickIncreasePrice = 100;
let clickIncreaseNumber = 1;

let autoclickerIncrease = 0;
let autoclickerPrice = 200;
let autoclickerNumber = 1;

let casesUpgradeIncrease = 0;
let casesUpgradeModifier = 2;
let casesUpgradePrice = 400;
let casesUpgradeNumber = 1;

let collectionUpgradeIncrease = 0;
let collectionUpgradeModifier = 8;
let collectionUpgradePrice = 1000;
let collectionUpgradeNumber = 1;

money.onclick = () => {
    dollars += clickIncrease;
    counter.innerHTML = dollars;
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
    if (dollars >= clickIncreasePrice) {
        dollars -= clickIncreasePrice;
        clickIncreasePrice += 100;
        clickUpgrade.innerHTML = `Buy Click Upgrade: ${clickIncreasePrice} dollars <br> (${clickIncreaseNumber})`
        counter.innerHTML = dollars;
        clickIncrease++;
        clickIncreaseNumber ++;
    }
}
autoclickerUpgrade.onclick = () => {
    if (dollars >= autoclickerPrice) {
        dollars -= autoclickerPrice;
        counter.innerHTML = dollars;
        autoclickerPrice += 200;
        autoclickerUpgrade.innerHTML = `Buy Autoclicker: ${autoclickerPrice} dollars <br> (${autoclickerNumber})`
        if (autoclickerIncrease == 0) {
            setInterval(() => {
                dollars += autoclickerIncrease;
                counter.innerHTML = dollars;
            }, 1000);
        }
        autoclickerIncrease++;
        autoclickerNumber ++;
    }
}

casesUpgrade.onclick = () => {
    if (dollars >= casesUpgradePrice) {
        dollars -= casesUpgradePrice;
        counter.innerHTML = dollars;
        casesUpgradePrice += 300;
        casesUpgrade.innerHTML = `Buy Cases: ${casesUpgradePrice} dollars <br> (${casesUpgradeNumber})`
        if (casesUpgradeIncrease == 0) {
            setInterval(() => {
                dollars += casesUpgradeIncrease;
                counter.innerHTML = dollars;
            }, 800);
        }
        casesUpgradeIncrease += casesUpgradeModifier;
        casesUpgradeNumber ++;
    }
}

collectionUpgrade.onclick = () => {
    if (dollars >= collectionUpgradePrice) {
        dollars -= collectionUpgradePrice;
        counter.innerHTML = dollars;
        collectionUpgradePrice += 500;
        collectionUpgrade.innerHTML = `Buy Collections: ${collectionUpgradePrice} dollars <br> (${collectionUpgradeNumber})`
        if (collectionUpgradeIncrease == 0) {
            setInterval(() => {
                dollars += collectionUpgradeIncrease;
                counter.innerHTML = dollars;
            }, 500);
        }
        collectionUpgradeIncrease += collectionUpgradeModifier;
        collectionUpgradeNumber ++;
    }
}