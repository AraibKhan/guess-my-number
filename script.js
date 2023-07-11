'use strict'

const generateNumber = () => {
    return Math.trunc(Math.random() * 20) + 1;
}

let randomNumber = generateNumber();
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', (e) => {
    e.preventDefault();

    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        document.querySelector('.message').textContent = '⛔ Enter number first!'
    } else if (score === 0) {
        document.querySelector('.message').textContent = '💥 You LOSE!!!'
    } else if (randomNumber === guess) {
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        document.querySelector('.number').textContent = guess;
        document.querySelector('.message').textContent = '🎉 Correct!'
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.check').disabled = true;
        
    } else if (guess !== randomNumber) {
        document.querySelector('.message').textContent = guess > randomNumber ? '📈Too High!' : '📉Too Low';
        score--;
        document.querySelector('.score').textContent = score;
    }
})

document.querySelector('.again').addEventListener('click', (e) => {
    score = 20;
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.check').disabled = false;
})