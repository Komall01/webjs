const submitButton = document.querySelector('.guessSubmit');
const inputElement = document.querySelector('.guessField');
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const resetDiv = document.querySelector('.resetDiv');

let counter = 0;
let randomNumber = Math.ceil(Math.random()*100);
console.log(randomNumber)
submitButton.addEventListener('click',checkGuess)


function checkGuess(){
    counter++;
    
    let inputValue = inputElement.value;
    if(counter === 10){
        lastResult.innerText = "GAME OVER!!!!";
        lowOrHi.innerText = ''
        gameOver();
        return;
    }
    if(counter === 1){
        guesses.innerHTML = "last guesses:"
    }
    guesses.innerHTML += " "+inputValue;
    // inputvlaue < randomnum
    if(Number(inputValue) === randomNumber){
        lastResult.innerText = "Congratulations! you have won!";
        lowOrHi.innerText = ''
        lastResult.style.backgroundColor = 'green';
        lastResult.style.color = 'white';
        
        gameOver();
        
    }
    else if(inputValue < randomNumber){
        lastResult.innerText = "Wrong";
        lastResult.style.backgroundColor = 'red';
        lastResult.style.color = 'white';

        lowOrHi.innerText = 'Too low!'
    }
    else{
        lastResult.innerText = "Wrong";
        lastResult.style.backgroundColor = 'red';
        lastResult.style.color = 'white';

        lowOrHi.innerText = 'Too high!'
    }

    inputElement.value = ''

}

function gameOver(){
    
    inputElement.disabled = true;
    submitButton.disabled = true;
    
    resetDiv.innerHTML = '<button id="reset">Reset game</button>'

    const resetButton = document.querySelector('#reset');
    resetButton.addEventListener('click',resetGame)
}

function resetGame(){
    inputElement.disabled = false;
    submitButton.disabled = false;
    lastResult.innerText = "";
    lowOrHi.innerText = ''
    guesses.innerText = ''
    resetDiv.innerHTML = '';

    counter = 0;
    randomNumber = Math.ceil(Math.random()*100);
console.log(randomNumber)
}