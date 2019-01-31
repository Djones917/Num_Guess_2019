//console.log('connected!');
// Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;


// UI Elements    
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input')
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess btn
// Note: black text means it is a string!!! so create a variable guess and use parseInt to change it to a number!
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);
    // console.log(guess) this would come back NaN or not a number!

    // Validate
    if (guess === NaN || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`);
    }

});


// Set message
function setMessage(msg) {
    message.textContent = msg;
}

