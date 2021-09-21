let divEnd = document.querySelector('.end');
let divStart = document.querySelector('.start');
let totalNumber = 0;
let infectedNumber = 0;
let totalSpan = document.querySelector('.total');
let infectedSpan = document.querySelector('.infected');
let percentageSpan = document.querySelector('.percentage');
const pandemicStartMap = "XX0X10010X000X010X0";

let arr = [];
let pandemicStr = '';

function showPandemicStartBoxes() {
    let startPandemic = pandemicStartMap.split('')
    for (let i = 0; i < startPandemic.length; i++) {
        let div = document.createElement('div');
        div.setAttribute('data-name', startPandemic[i]);
        div.className = 'box';
        divStart.append(div);
        paintOverTheBoxes(div);
    }
}
showPandemicStartBoxes();

function changePandemicStartMap() {
    let pandemicArray = pandemicStartMap.split('X');
    for (let i = 0; i < pandemicArray.length; i++) {
        totalNumber += pandemicArray[i].length;
        totalSpan.innerHTML = totalNumber;
        if (pandemicArray[i].includes(1) == true) {
            arr.push(pandemicArray[i].replaceAll('0', '1'));
            infectedNumber += pandemicArray[i].length;
            infectedSpan.innerHTML = infectedNumber;
        } else {
            arr.push(pandemicArray[i]);
        }
        pandemicStr = arr.join('X');
    }
    let newPandemicArr = pandemicStr.split('');
    createBoxes(newPandemicArr);
}
changePandemicStartMap();

function showPercentage() {
    let percentage = (infectedNumber / totalNumber) * 100;
    percentageSpan.innerHTML = percentage + '%';
}
showPercentage();

function createBoxes(newPandemicArr) {
    for (let i = 0; i < newPandemicArr.length; i++) {
        let div = document.createElement('div');
        div.setAttribute('data-name', newPandemicArr[i]);
        div.className = 'box';
        divEnd.append(div);
        paintOverTheBoxes(div);
    }
}

function paintOverTheBoxes(div) {
    let getAtributes = div.getAttribute('data-name');
    for (let i = 0; i < getAtributes.length; i++) {
        if (getAtributes[i] == 'X') {
            div.classList.add('box_ocean');
        } else if (getAtributes[i] == '0') {
            div.classList.add('box_uninfected');
        } else if (getAtributes[i] == '1') {
            div.classList.add('box_infected');
        }
    }

}