const money = document.getElementById("money");
const counter = document.getElementById("counter");
const clickUpgrade = document.getElementById("clickUpgrade")
const autoclickerUpgrade = document.getElementById("autoclickerUpgrade")
const casesUpgrade = document.getElementById("casesUpgrade")
const collectionUpgrade = document.getElementById("collectionUpgrade")

const playTheme = document.getElementById("musicButton")
const muteTheme = document.getElementById("muteButton")
const theme = document.getElementById("themeMusic")

let dollars = localStorage.money;



money.onclick = () => {
    dollars += clickIncrease;
        if (localStorage.money) {
          localStorage.money = Number(localStorage.money)+clickIncrease;
        } else {
          localStorage.money = 1;
        }
    counter.innerHTML = localStorage.money;
}


/*animace dolaru*/
money.onmousedown = () => {
    money.style.fontSize = "30px";
}
money.onmouseup = () => {
    money.style.fontSize = "60px";
}




/*muzika*/
muteTheme.onclick = () => {
    muteTheme.style.display = "none";
    playTheme.style.display = "block";
    theme.play();
    theme.volume = 2.0;
    theme.currentTime = 0,1;
}
playTheme.onclick = () => {
    playTheme.style.display = "none";
    muteTheme.style.display = "block";
    theme.pause();
    theme.currentTime = 0;
}




/*vylepšení pro kliknutí (+1 pro klik)*/
let clickIncrease = 1;
let clickIncreasePrice = 100;
let clickIncreaseNumber = 1;

clickUpgrade.onclick = () => {
    if (localStorage.money >= clickIncreasePrice) {
        localStorage.money -= clickIncreasePrice;
        clickIncreasePrice += 100;
        clickUpgrade.innerHTML = `Buy Click Upgrade: ${clickIncreasePrice} dollars <br> (${clickIncreaseNumber})`
        counter.innerHTML = localStorage.money;
        clickIncrease++;
        clickIncreaseNumber ++;
    }
}




/*autoklicker (+1 za 1000 tiků)*/
let autoclickerIncrease = 0;
let autoclickerPrice = 200;
let autoclickerNumber = 1;

autoclickerUpgrade.onclick = () => {
    if (localStorage.money >= autoclickerPrice) {
        localStorage.money -= autoclickerPrice;
        counter.innerHTML = localStorage.money;
        autoclickerPrice += 200;
        autoclickerUpgrade.innerHTML = `Buy Autoclicker: ${autoclickerPrice} dollars <br> (${autoclickerNumber})`
        if (autoclickerIncrease == 0) {
            setInterval(() => {
                if (localStorage.money) {
                     localStorage.money = Number(localStorage.money)+autoclickerIncrease;
                } else {
                    localStorage.money = autoclickerIncrease;
                }
                counter.innerHTML = localStorage.money;
            }, 1000);
        }
        autoclickerIncrease++;
        autoclickerNumber ++;
    }
}







let casesUpgradeIncrease = 0;
let casesUpgradeModifier = 5;
let casesUpgradePrice = 400;
let casesUpgradeNumber = 1;

casesUpgrade.onclick = () => {
    if (localStorage.money >= casesUpgradePrice) {
        localStorage.money -= casesUpgradePrice;
        counter.innerHTML = dollars;
        casesUpgradePrice += 300;
        casesUpgrade.innerHTML = `Buy Cases: ${casesUpgradePrice} dollars <br> (${casesUpgradeNumber})`
        if (casesUpgradeIncrease == 0) {
            setInterval(() => {
                if (localStorage.money) {
                     localStorage.money = Number(localStorage.money)+casesUpgradeIncrease;
                } else {
                    localStorage.money = casesUpgradeIncrease;
                }
                counter.innerHTML = localStorage.money;
            }, 800);
        }
        casesUpgradeIncrease += casesUpgradeModifier;
        casesUpgradeNumber ++;
    }
}





let collectionUpgradeIncrease = 0;
let collectionUpgradeModifier = 16;
let collectionUpgradePrice = 1000;
let collectionUpgradeNumber = 1;

collectionUpgrade.onclick = () => {
    if (localStorage.money >= collectionUpgradePrice) {
        localStorage.money -= collectionUpgradePrice;
        counter.innerHTML = dollars;
        collectionUpgradePrice += 500;
        collectionUpgrade.innerHTML = `Buy Collections: ${collectionUpgradePrice} dollars <br> (${collectionUpgradeNumber})`
        if (collectionUpgradeIncrease == 0) {
            setInterval(() => {
                dollars += collectionUpgradeIncrease;
                if (localStorage.money) {
                    localStorage.money = Number(localStorage.money)+collectionUpgradeIncrease;
               } else {
                   localStorage.money = collectionUpgradeIncrease;
               }
               counter.innerHTML = localStorage.money;
            }, 500);
        }
        collectionUpgradeIncrease += collectionUpgradeModifier;
        collectionUpgradeNumber ++;
    }
}