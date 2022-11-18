const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const clickUpgrade = document.getElementById("clickUpgrade")
const autoclickerUpgrade = document.getElementById("autoclickerUpgrade")
const casesUpgrade = document.getElementById("casesUpgrade")

const csgoBuy = document.getElementById("csgoBuy")

let cookies = 0;

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

let csgoBuyPrice = 1000;

cookie.onclick = () => {
    cookies += clickIncrease;
    counter.innerHTML = cookies;
}
cookie.onmousedown = () => {
    cookie.style.fontSize = "30px";
}
cookie.onmouseup = () => {
    cookie.style.fontSize = "60px";
}

clickUpgrade.onclick = () => {
    if (cookies >= clickIncreasePrice) {
        cookies -= clickIncreasePrice;
        clickIncreasePrice += 100;
        clickUpgrade.innerHTML = `Buy Click Upgrade: ${clickIncreasePrice} dollars <br> (${clickIncreaseNumber})`
        counter.innerHTML = cookies;
        clickIncrease++;
        clickIncreaseNumber ++;
    }
}
autoclickerUpgrade.onclick = () => {
    if (cookies >= autoclickerPrice) {
        cookies -= autoclickerPrice;
        counter.innerHTML = cookies;
        autoclickerPrice += 100;
        autoclickerUpgrade.innerHTML = `Buy Autoclicker: ${autoclickerPrice} dollars <br> (${autoclickerNumber})`
        if (autoclickerIncrease == 0) {
            setInterval(() => {
                cookies += autoclickerIncrease;
                counter.innerHTML = cookies;
            }, 1000);
        }
        autoclickerIncrease++;
        autoclickerNumber ++;
    }
}

casesUpgrade.onclick = () => {
    if (cookies >= casesUpgradePrice) {
        cookies -= casesUpgradePrice;
        counter.innerHTML = cookies;
        casesUpgradePrice += 200;
        casesUpgrade.innerHTML = `Buy Cases: ${casesUpgradePrice} dollars <br> (${casesUpgradeNumber})`
        if (casesUpgradeIncrease == 0) {
            setInterval(() => {
                cookies += casesUpgradeIncrease;
                counter.innerHTML = cookies;
            }, 1000);
        }
        casesUpgradeIncrease += casesUpgradeModifier;
        casesUpgradeNumber ++;
    }
}

csgoBuy.onclick = () => {
    if (cookies >= csgoBuyPrice) {
        cookies -= csgoBuyPrice;
        csgoBuy.innerHTML = `Cancer Strike : Gamer Offence`
        counter.innerHTML = cookies;
    }
}