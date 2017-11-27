var FIELD_SIZE_X = 20;
var FIELD_SIZE_Y = 20;
var SNAKE_SPEED = 300;

function init() {
    document.getElementById('snake-start').addEventListener('click', startGameHandler);
    document.getElementById('snake-renew').addEventListener('click', refreshGameHandler);
    window.addEventListener('keydown', changeDirectionHandler);
}

function prepareGameField() {
    var gameTable = document.createElement('table');
    gameTable.classList.add('game-table');

    for(var i = 0; i < FIELD_SIZE_X; i++){
        var row = document.createElement('tr');
        row.classList.add('game-table-row');

        for(var j = 0; j < FIELD_SIZE_Y; j++){
            var cell = document.createElement('td');
            cell.classList.add('game-table-cell');

            row.appendChild(row);
        }

        gameTable.appendChild(row);
    }
}
function startGameHandler(){

}
function refreshGameHandler() {

}
function changeDirectionHandler() {

}

