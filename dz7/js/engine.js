function init() {
    prepareGameField();

    document.getElementById('snake-start').addEventListener('click', startGameHandler);
    document.getElementById('snake-renew').addEventListener('click', refreshGameHandler);
    window.addEventListener('keydown', changeDirectionHandler);
}


function startGameHandler(){
    isGameStarted = true;
    respawn();

    snakeTimer = setInterval(move, SNAKE_SPEED);
    setTimeout(createFood, FOOD_TIME);
}
function refreshGameHandler() {

}
function changeDirectionHandler(event) {
    switch(event.keyCode){
        case 37:
            direction = 'left';
            break;
        case 38:
            direction = 'top';
            break;
        case 39:
            direction = 'right';
            break;
        case 40:
            direction = 'bottom';
            break;
    }
}
function respawn() {
    snakeCoordX = Math.floor(FIELD_SIZE_X / 2);
    snakeCoordY = Math.floor(FIELD_SIZE_Y / 2);
    var gameTable = document.getElementById('game-table');
    // head
    var snakeHead = gameTable.children[snakeCoordX].children[snakeCoordY];
    snakeHead.classList.add('snake-unit');
    // tail
    var snakeTail = gameTable.children[snakeCoordX + 1].children[snakeCoordY];
    snakeTail.classList.add('snake-unit');

    snake.push(snakeHead);
    snake.push(snakeTail);
}
function move() {
    var gameTable = document.getElementById('game-table');
    var newUnnit;

    switch (direction){
        case 'top':
            newUnnit = gameTable.children[--snakeCoordX].children[snakeCoordY];
            break;
        case 'bottom':
            newUnnit = gameTable.children[++snakeCoordX].children[snakeCoordY];
            break;
        case 'right':
            newUnnit = gameTable.children[snakeCoordX].children[++snakeCoordY];
            break;
        case 'left':
            newUnnit = gameTable.children[snakeCoordX].children[--snakeCoordY];
            break;
    }
    if(!isSnakeUnit(newUnnit) && inBounds()){
        newUnnit.classList.add('snake-unit');
        snake.push(newUnnit);

        if(!isFood(newUnnit)){
            var snakeRemoved = snake.shift();
            snakeRemoved.classList.remove('snake-unit');
        }
    } else {
        gameOver();
    }
}
function isSnakeUnit(unit) {
    return snake.includes(unit);
    //Метод includes() определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false
}
function inBounds() {
    return snakeCoordX >= 0 && snakeCoordX < FIELD_SIZE_Y && snakeCoordY >= 0 && snakeCoordY < FIELD_SIZE_Y;

}
function isFood(unit) {
    if(unit.classList.contains('food-unit')){
        unit.classList.remove('food-unit');
        createFood();
        return true;
    } else {
        return false;
    }
}
function createFood() {
    var foodCreated = false;
    var gameTable = document.getElementById('game-table');

    while (!foodCreated) {
        var foodX = Math.floor(Math.random() * FIELD_SIZE_X);
        var foodY = Math.floor(Math.random() * FIELD_SIZE_Y);

        var foodCell = gameTable.children[foodX].children[foodY];
        if (!foodCell.classList.contains('snake-unit')){
            foodCell.classList.add('food-unit');
            foodCreated = true;
        }
    }
}
function gameOver() {

}


window.onload = init;