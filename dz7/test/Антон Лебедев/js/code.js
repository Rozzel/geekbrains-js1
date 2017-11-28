var FIELD_X = 25;
var FIELD_Y = 25;
var speed = 100;
var cells = [];

var score = 0;
var time = 0;
var foundFood = 0;
var snakeLength = 2;

var maxScore = 0;
var maxTime = 0;
var maxFoundFood = 0;
var maxSnakeLength = 2;

var placedFood = [];

var snake = [ Math.floor(FIELD_X * FIELD_Y / 2 - 1) ,
    Math.floor(FIELD_X * FIELD_Y / 2) - FIELD_X - 1 ];

var selectedDirection = '+y';
var direction = '+y';

var gameStarted = false;
var resetButtonOn = false;

var snakeStepInterval;
var foodSpawnInterval;
var gameTimeInterval;

var flashingButton;
var startButtonFlashingInterval = {

    flashing: false,

    intervalFunction: function () {
        var flashingInterval = setInterval(function () {
            if (!this.flashing && !gameStarted ) {
                flashingButton.className = 'flash';
                this.flashing = true;
            } else if ( !gameStarted ) {
                flashingButton.classList.remove('flash');
                this.flashing = false;
            } else {
                this.flashing = false;
                flashingButton.classList.remove('flash');
                clearInterval(flashingInterval);
            }
        }, 500)
    }
};

window.onload = init;

function init() {

    gameStartButton.onclick = gameStart;
    restartButton.onclick = restart;
    resetStatisticsButton.onclick = resetStatistics;

    addEventListener('keydown', directionChanger);

    flashingButton = document.getElementById('gameStartButton');
    startButtonFlashingInterval.intervalFunction();

}


function gameStart() {
    if (!gameStarted ) {

        gameStarted = true;
        gameStartButton.onclick = '';

        gameTimeStart();
        fieldGenerator();
        startPosition();
        snakeLayer();
        snakeRun();
        foodSpawn();
    }
}


function restart() {
    if (!gameStarted && resetButtonOn) {

        clearInterval(gameTimeInterval);
        clearInterval(snakeStepInterval);
        clearInterval(foodSpawnInterval);

        placedFood = [];

        snake = [Math.floor(FIELD_X * FIELD_Y / 2), Math.floor(FIELD_X * FIELD_Y / 2) - FIELD_X];

        selectedDirection = '+y';
        direction = '+y';

        points.innerHTML = 0;
        gameTime.innerHTML = 0;
        foundFoodStat.innerHTML = 0;
        snakeLengthStat.innerHTML = 2;

        resetButtonOn = false;

        gameStart();

    } else {location.reload()}
}


function resetStatistics() {
    maxScore = score;
    maxPoints.innerHTML = score;
    maxTime = time;
    maxGameTime.innerHTML = time;
    maxFoundFood = foundFood;
    maxFoundFoodStat.innerHTML = foundFood;
    maxSnakeLength = snakeLength;
    maxSnakeLengthStat.innerHTML = snakeLength;
}

function gameTimeStart() {
    gameTimeInterval = setInterval(function () {
        time += 1 ;
        gameTime.innerHTML = time;
        if (time > maxTime) {
            maxTime = time;
            maxGameTime.innerHTML = maxTime;
        }
    }, 1000)
}


function fieldGenerator() {
    gameField.innerHTML = '';

    for ( var genX = 1 , genY = 1 , cell ; genY <= FIELD_Y ; genX++) {

        if ( genX > FIELD_X ) {
            genX = 1;
            genY++;
        }

        if ( genY > FIELD_Y ) {
            break;
        }

        cell = document.createElement('div');
        cell.className = 'cell';
        cell.positionX = genX;
        cell.positionY = genY;
        gameField.appendChild(cell);
    }

    cells = document.getElementsByClassName('cell');
}


function directionChanger(keyPress) {
    switch (keyPress.keyCode){
        case 37:
            if( direction !=='+x' && direction !=='-x') {
                selectedDirection = '-x';
        }
        break;

        case 38:
            if( direction !=='+y' && direction !=='-y') {
                selectedDirection = '-y';
            }
        break;

        case 39:
            if( direction !=='+x' && direction !=='-x') {
                selectedDirection = '+x';
            }
        break;

        case 40:
            if( direction !=='+y' && direction !=='-y') {
                selectedDirection = '+y';
        }
    }
}


function startPosition() {
    cells[snake[0]].classList.add('snakeHead');
    cells[snake[1]].classList.add('snakeBody');
}


function snakeRun() {
     snakeStepInterval = setInterval(function () {
        switch (direction) {
            case '+x':
                snake.unshift(snake[0] + 1);
                break;

            case '-x':
                snake.unshift(snake[0] - 1);
                break;

            case '+y':
                snake.unshift(snake[0] + FIELD_X);
                break;

            case '-y':
                snake.unshift(snake[0] - FIELD_X);
        }

        cells[snake[snake.length - 1]].classList.remove('snakeBody');
        snake.pop();

        direction = selectedDirection;

        abroadStep();
        onThingStep();
        if (gameStarted === false) {return;}
        snakeLayer();

    }, speed)
}


function snakeLayer() {
    for (var i = 0; i < snake.length; i++) {
        if (i === 0) {
            cells[snake[i]].classList.add('snakeHead');
        } else if (i === 1) {
            cells[snake[i]].classList.remove('snakeHead');
            cells[snake[i]].classList.add('snakeBody');
        } else {
            cells[snake[i]].classList.add('snakeBody');
        }
    }
}


function abroadStep() {

    if (snake[0] % FIELD_X === 0 && direction === '+x' && snake[1] % FIELD_X !== 0 ) {
        snake[0] = snake[0] - FIELD_X;
    }

    if (snake[1] % FIELD_X === 0 && direction === '-x') {
        snake[0] = snake[0] + FIELD_X;
        }

    if (snake[0] > FIELD_X * FIELD_Y - 1) {
        snake[0] = snake[0] - (FIELD_X * FIELD_Y);
    }

    if  (snake[0] < 0) {
         snake[0] = snake[0] + (FIELD_X * FIELD_Y)
    }
}


function foodSpawn() {
    foodSpawnInterval = setInterval(function () {

        if (placedFood.length === 5) {
            var deletedFood = Math.floor(Math.random() * 5);
            placedFood[deletedFood].className = 'cell';
            placedFood.splice(deletedFood, 1);
            return;
        }

        var foodPosition;
        do {
            foodPosition = Math.floor(Math.random() * (FIELD_X * FIELD_Y));
        } while (cells[foodPosition].classList.value !== 'cell' ||
            cells[foodPosition].classList.contains('snakeHead') ||
            cells[foodPosition].classList.contains('snakeBody') ||
            foodPosition === snake[0] - FIELD_X ||
            foodPosition === snake[0] + FIELD_X ||
            foodPosition === snake[0] + 1 ||
            foodPosition === snake[0] + 2);

        var randomFood = Math.floor(Math.random() * 5);
        switch (randomFood){
            case 0: cells[foodPosition].classList.add('food');
            break;
            case 1: cells[foodPosition].classList.add('fatFood');
            break;
            case 2: cells[foodPosition].classList.add('greenFood');
            break;
            case 3: cells[foodPosition].classList.add('badFood');
            break;
            case 4:
                var trapType = Math.floor(Math.random() * 4);
                switch (trapType) {
                    case 0: cells[foodPosition].classList.add('trap', 'trapFood');
                    break;
                    case 1: cells[foodPosition].classList.add('trap', 'trapFatFood');
                    break;
                    case 2: cells[foodPosition].classList.add('trap', 'trapGreenFood');
                    break;
                    case 3: cells[foodPosition].classList.add('trap', 'trapBadFood');
                }
        }

        placedFood.push(cells[foodPosition]);

    }, speed * 10)
}


function onThingStep() {
    if (cells[snake[0]].classList.value !== 'cell snakeHead') {
        if (cells[snake[0]].classList.contains('snakeBody')) {
            gameOver('ВЫ СЪЕЛИ САМИ СЕБЯ!');
            return;
        }

        if (cells[snake[0]].classList.contains('trap')) {
            gameOver('ВЫ ПОПАЛИ В ЛОВУШКУ!');
            return;
        }

        if (cells[snake[0]].classList.contains('food')) {
            cells[snake[0]].classList.remove('food');
            snake.push(snake[snake.length - 1]);
            score += 10;
            foundFood += 1;
            statisticsAdder()
        }

        if (cells[snake[0]].classList.contains('fatFood')) {
            cells[snake[0]].classList.remove('fatFood');
            snake.push(snake[snake.length - 1],snake[snake.length - 1]);
            score += 30;
            foundFood += 1;
            statisticsAdder()
        }

        if (cells[snake[0]].classList.contains('greenFood')) {
            cells[snake[0]].classList.remove('greenFood');
            score += 50;
            foundFood += 1;
            statisticsAdder()
        }

        if (cells[snake[0]].classList.contains('badFood')) {
            cells[snake[0]].classList.remove('badFood');
            if (snake.length === 2) {
                gameOver('ЗМЕЙКА ПОГИБЛА ГОЛОДНОЙ СМЕРТЬЮ');
                return;
            }
            cells[snake[snake.length - 1]].classList.remove('snakeBody');
            snake.pop();
            score += 5;
            foundFood += 1;
            statisticsAdder()
        }
    }
}


function statisticsAdder() {
    points.innerHTML = score;
    if (maxScore < score) {
        maxScore = score;
        maxPoints.innerHTML = maxScore;

    }
    foundFoodStat.innerHTML = foundFood;
    if (maxFoundFood < foundFood) {
        maxFoundFood = foundFood;
        maxFoundFoodStat.innerHTML = maxFoundFood;

    }


    snakeLength = snake.length;
    snakeLengthStat.innerHTML = snakeLength;
    if ( maxSnakeLength < snakeLength ) {
        maxSnakeLength = snakeLength;
        maxSnakeLengthStat.innerHTML = maxSnakeLength;
    }
}


function gameOver(reason) {
    gameStarted = false;
    clearInterval(gameTimeInterval);
    clearInterval(snakeStepInterval);
    clearInterval(foodSpawnInterval);

    score = 0;
    time = 0;
    foundFood = 0;
    snakeLength = 2;

    resetButtonOn = true;
    flashingButton = document.getElementById('restartButton');
    startButtonFlashingInterval.intervalFunction();

    gameField.innerHTML = '';
    var gameOverString = document.createElement('span');
    gameOverString.id = 'gameOver';
    gameOverString.innerHTML = 'GAME OVER<br><br>' + reason;
    gameField.appendChild(gameOverString);
}
