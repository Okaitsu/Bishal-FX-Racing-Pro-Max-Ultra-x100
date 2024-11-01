let score = 0;
let gameArea = document.querySelector('.game-area');
let playerCar = document.querySelector('.player-car');
let enemyCar = document.querySelector('.enemy-car');
let scoreDisplay = document.getElementById('score');

function moveEnemyCar() {
    let enemyPosition = enemyCar.offsetTop;
    enemyCar.style.top = enemyPosition + 2 + 'px';

    if (enemyPosition > gameArea.offsetHeight) {
        enemyCar.style.top = '-50px'; // Reset enemy car position
        score += 1;
        scoreDisplay.innerText = 'Score: ' + score;
    }
}

function movePlayerCar(event) {
    const carSpeed = 10;
    const leftLimit = 0;
    const rightLimit = gameArea.offsetWidth - playerCar.offsetWidth;

    if (event.key === 'ArrowLeft' && playerCar.offsetLeft > leftLimit) {
        playerCar.style.left = playerCar.offsetLeft - carSpeed + 'px';
    } else if (event.key === 'ArrowRight' && playerCar.offsetLeft < rightLimit) {
        playerCar.style.left = playerCar.offsetLeft + carSpeed + 'px';
    }
}

document.addEventListener('keydown', movePlayerCar);

setInterval(moveEnemyCar, 20);
