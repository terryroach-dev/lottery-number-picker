const lottoDiv = document.querySelector('.lotto-div-numbers');
const euroDiv = document.querySelector('.euro-millions-div-numbers');
const setForLifeDiv = document.querySelector('.set-for-life-div-numbers');
const lottoBtn = document.getElementById('lotto-btn');
const euroBtn = document.getElementById('euro-millions-btn');
const setForLifeBtn = document.getElementById('set-for-life-btn');

let lottoHTML = "";
let euroHTML = "";
let setForLifeHTML = "";

lottoBtn.addEventListener("click", () => {
    lottoDiv.textContent = "";
    let numArray = [];
    let numberPara;
    while(numArray.length < 6) {
        let ranNum = Math.floor(Math.random() * 59) + 1;
        if(!numArray.includes(ranNum)) {
            numArray.push(ranNum);
        };
    };
    let numArraySorted = numArray.sort(function(a,b) {
        return a-b;
    });
    for(let i = 0; i < numArraySorted.length; i++) { 
        numberPara =  document.createElement('p')
        numberPara.classList.add('lotto-number')
        numberPara.textContent = numArraySorted[i];
        lottoHTML += numberPara;
        lottoDiv.append(numberPara)
    };
});

euroBtn.addEventListener("click", () => {
    euroDiv.textContent = "";
    let numArray = [];
    let starArray = [];
    let numberPara;
    while(numArray.length < 5) {
        let ranNum = Math.floor(Math.random() * 50) + 1;
        if(!numArray.includes(ranNum)) {
            numArray.push(ranNum);
        };
    };
    while(starArray.length < 2) {
        let ranNum = Math.floor(Math.random() * 12) + 1;
        if(!starArray.includes(ranNum)) {
            starArray.push(ranNum);
        };
    };
    let numArraySorted = numArray.sort(function(a,b) {
        return a-b;
    });
    let starArraySorted = starArray.sort(function(a,b) {
        return a-b;
    });
    for(let i = 0; i < numArraySorted.length; i++) { 
        numberPara =  document.createElement('p')
        numberPara.classList.add('euro-number')
        numberPara.textContent = numArraySorted[i];
        euroHTML += numberPara;
        euroDiv.append(numberPara)
    };
    for(let i = 0; i <starArraySorted.length; i++) {
        numberPara =  document.createElement('p')
        numberPara.classList.add('euro-star-number')
        numberPara.textContent = starArraySorted[i];
        euroHTML += numberPara;
        euroDiv.append(numberPara)
    }
});

setForLifeBtn.addEventListener("click", () => {
    setForLifeDiv.textContent = "";
    let numArray = [];
    let lifeArray = [];
    let numberPara;
    while(numArray.length < 5) {
        let ranNum = Math.floor(Math.random() * 47) + 1;
        if(!numArray.includes(ranNum)) {
            numArray.push(ranNum);
        };
    };
    while(lifeArray.length < 1) {
        let ranNum = Math.floor(Math.random() * 10) + 1;
        if(!lifeArray.includes(ranNum)) {
            lifeArray.push(ranNum);
        };
    };
    let numArraySorted = numArray.sort(function(a,b) {
        return a-b;
    });
    let lifeArraySorted = lifeArray.sort(function(a,b) {
        return a-b;
    });
    for(let i = 0; i < numArraySorted.length; i++) { 
        numberPara =  document.createElement('p')
        numberPara.classList.add('set-for-life-number')
        numberPara.textContent = numArraySorted[i];
        setForLifeHTML += numberPara;
        setForLifeDiv.append(numberPara)
    };
    for(let i = 0; i <lifeArraySorted.length; i++) {
        numberPara =  document.createElement('p')
        numberPara.classList.add('set-for-life-life-number')
        numberPara.textContent = lifeArraySorted[i];
        setForLifeHTML += numberPara;
        setForLifeDiv.append(numberPara)
    }
});