const lenEL = document.getElementById("len");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const generateEL = document.getElementById("generate");
const symbolsEL = document.getElementById("symbols");
const numbersEL = document.getElementById("numbers");
const pwEL = document.getElementById("pw");
const copyEl = document.getElementById("copy");

const numbers = '1234567890'
const UpperLetters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase()
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz'
const symbols = '!@#$%^&*()_+-='

function getUpper(){
    return (UpperLetters[Math.floor(Math.random() * UpperLetters.length)])
}
function getlower(){
    return (lowerLetters[Math.floor(Math.random() * lowerLetters.length)])
}
function getsymbol(){
    return (symbols[Math.floor(Math.random() * symbols.length)])
}
function getnumber(){
    return (numbers[Math.floor(Math.random() * numbers.length)])
}

function generatePassword(){
    const loopLength = lenEL.value
    let randomPool = []
    for (let i = 0; i < loopLength; i++){
        if(numbersEL.checked){
            randomPool.push(getnumber())
        }
        if(upperEl.checked){
            randomPool.push(getUpper())
        }
        if(lowerEl.checked){
            randomPool.push(getlower())
        }
        if(symbolsEL.checked){
            randomPool.push(getsymbol())
        }
    }
    if(randomPool.length === 0){
        return null;
    }
    
    let x = ''
    for (let i = 0; i < loopLength; i++){
        x += randomPool[Math.floor(Math.random() * randomPool.length)]
    }
    pwEL.innerText = ''
    pwEL.innerText = x
}

generateEL.addEventListener("click", generatePassword)


copyEl.addEventListener("click", () => {
    const password = pwEL.innerText
    if(!password){
        return null;
    }
    const textarea = document.createElement('textarea')
    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert("password copied successfully")
});