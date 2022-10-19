const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const clickUpgrade = document.getElementById("clickUpgrade")
const autoclickerUpgrade = document.getElementById("autoclickerUpgrade")
const cases = document.getElementById("casesUpgrade")

let cookies = 0;

let clickIncrease = 1;
let clickIncreasePrice = 100;

let autoclickerIncrease = 0;
let autoclickerPrice = 200;

let casesIncrease = 1;
let casesUpgradeIncrease = 0;
let casesUpgradePrice = 400;

cookie.onclick = () => {
    cookies += clickIncrease;
    counter.innerHTML = cookies;
}

clickUpgrade.onclick = () => {
    if (cookies >= clickIncreasePrice) {
        cookies -= clickIncreasePrice;
        clickIncreasePrice += 100;
        clickUpgrade.innerHTML = `Buy Click Upgrade: ${clickIncreasePrice} dollars`
        counter.innerHTML = cookies;
        clickIncrease++;
    }
}

autoclickerUpgrade.onclick = () => {
    if (cookies >= autoclickerPrice) {
        cookies -= autoclickerPrice;
        counter.innerHTML = cookies;
        autoclickerPrice += 100;
        autoclickerUpgrade.innerHTML = `Buy Autoclicker: ${autoclickerPrice} dollars`
        if (autoclickerIncrease == 0) {
            setInterval(() => {
                cookies += autoclickerIncrease;
                counter.innerHTML = cookies;
            }, 1000);
        }
        autoclickerIncrease++;
    }
}

casesUpgrade.onclick = () => {
    if (cookies >= casesUpgradePrice) {
        cookies -= casesUpgradePrice;
        counter.innerHTML = cookies;
        casesUpgradePrice += 200;
        casesUpgrade.innerHTML = `Buy Cases: ${casesUpgradePrice} dollars`
    }
}