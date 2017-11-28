function prepareGameField() {
    var gameTable = document.createElement('div');
    gameTable.classList.add('game-table');
    gameTable.id = 'game-table';

    for(var i = 0; i < FIELD_SIZE_X; i++){
        var row = document.createElement('div');
        row.classList.add('game-table-row');

        for(var j = 0; j < FIELD_SIZE_Y; j++){
            var cell = document.createElement('div');
            cell.classList.add('game-table-cell');

            row.appendChild(cell);
        }
        gameTable.appendChild(row);
    }
    document.getElementById('snake-field').appendChild(gameTable);
}