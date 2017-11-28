function gameReloadHandler() {
  snake = [];
  score = 0;
  snakeScoreId.innerText = 0;
  life = 9;
  snakeCoorX = 0;
  snakeCoorY = 0;
  gameStarting = false;
  clearInterval(intervalMove);
  clearInterval(intervalCreateFood);
  clearInterval(intervalCreateBlock);

  var cells = gameTable.getElementsByTagName('td');
  function clearTableCell() {
    for (var i = 0; i < cells.length; i++) {
      cells[i].className = 'game-field__table-cell';
    }
  }
  clearTableCell();
  lifeCountContainer.innerHTML = '';

}