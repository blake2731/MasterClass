
//DOM: Document Object Model
const clickArea = document.querySelector(" .click-area");
const cashTxt = document.querySelector(" .cash-txt");
const navItems = document.querySelectorAll("nav h1");
const menus = document.querySelectorAll(".menu");
const plusOneBtn = document.querySelector(".plus-one-btn");
const plusCritBtn = document.querySelector(".plus-crit-btn");
const plusCritPwr = document.querySelector(".plus-crit-power")
const clickValueHint = document.querySelector(".click-value-hint");
const critChanceHint = document.querySelector(".crit-chance-hint");
const critPowerHint = document.querySelector(".crit-power-hint")

clickArea.onclick = function() {
    
    if (Math.random() * 101 <= critChance){
        cash += cashPerClick * critPower;
    }
    else {
        cash += cashPerClick;
    }
    updateGui();
}

let cash = 0;
let cashPerClick = 1;
let critChance = 0;
let critPower = 2;


navItems[0].onclick = () => showMenu(0);
navItems[1].onclick = () => showMenu(1);
navItems[2].onclick = () => showMenu(2);

plusCritBtn.onclick = function(){
    if (cash < 25) return;
    cash -= 25;
    critChance += 0.5;
    updateGui();
}

plusOneBtn.onclick = function() {
    if (cash < 10) return;
    cash -= 10;
    cashPerClick += 1;
    updateGui();
}

function updateGui(){
    cashTxt.innerText = "$" + cash.toLocaleString();
    clickValueHint.innerText = `(+${cashPerClick} Cash)`;
    critChanceHint.innerText = `(crit chance ${critChance}%)`;
    critPowerHint.innerText = `(crit power: ${critPower}x)`;

}

function showMenu(index = 0){
    for (let i = 0; i < menus.length; i++){
        menus[i].classList.remove("show");
    }

    menus.forEach(menu => menu.classList.remove("show"));

    menus[index].classList.add("show");
}
