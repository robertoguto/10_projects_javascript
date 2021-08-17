console.clear();

const areaOutput = document.querySelector('[data-output]');
const areaInput = document.querySelector('[data-input]');
const checkUpperCase = document.querySelector('#uppercase');
const checkLowerCase = document.querySelector('#lowercase');
const checkNumbers = document.querySelector('#number');
const checkSymbols = document.querySelector('#symbol');
const buttonGenerate = document.querySelector('#button-generate');
const clickToCopy = document.querySelector('#click-to-copy');
const copied = document.querySelector('#copied');

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '1234567890';
const symbols = '!@#$%¨&*()_+=';

function generateUpperCase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function generateLowerCase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function generateNumbers() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function generateSymbols() {
    return symbols[Math.floor(Math.random() * symbols.length)]
}

function generatePassword(){
    const passLength = areaInput.value;

    let password = '';

    if(checkUpperCase.checked){
        password += generateUpperCase();
    }

    if(checkLowerCase.checked){
        password += generateLowerCase();
    }
    
    if(checkNumbers.checked){
        password += generateNumbers();
    }

    if(checkSymbols.checked){
        password += generateSymbols();
    }

    for (let i = password.length; i < passLength; i++) {
        const rest = generateRest();
        password += rest;
    }

    areaOutput.innerText = password;

    copied.classList.remove('left--done');
    clickToCopy.classList.add('right--done');

}

function generateRest(){
    const arrayRest = [];

    if(checkUpperCase.checked){
        arrayRest.push(generateUpperCase());
    }

    if(checkLowerCase.checked){
        arrayRest.push(generateLowerCase());
    }

    if(checkNumbers.checked){
        arrayRest.push(generateNumbers());
    }

    if(checkSymbols.checked){
        arrayRest.push(generateSymbols());
    }

    if(arrayRest.length === 0){
        return '';
    }

    return arrayRest[Math.floor(Math.random() * arrayRest.length)];
}

buttonGenerate.addEventListener('click', generatePassword);

areaOutput.parentElement.addEventListener('click', () => {
    const textArea = document.createElement('textarea');
    const password = areaOutput.innerText;

    if(!password) {
        return;
    }

    textArea.value = password;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    textArea.remove();

    clickToCopy.classList.remove('right--done');
    copied.classList.add('left--done');
}); 
