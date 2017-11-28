window.onload = init;

var FIELD_SIZE_X = 20;  //20
var FIELD_SIZE_Y = 30; //30
var SNAKE_SPEED = 300;
var gameStarting = false;

var snake = []; // массив где мы храним всю змемйку и ее положение
var snakeCoorX; // координаты змейки
var snakeCoorY;
var snakeDirection = 'right'; // возможные направления змейки: rigth, left, up, down

var gameTable; // таблица для игры,  которую мы создадим в функции prepareGameField()
var snakeScoreId = document.querySelector('#snake-score'); //контейнер куда мы помещаем текущий счет
var lifeCountContainer = document.querySelector('.life-count-container'); //контейнер куда мы помещаем жизни
var i; //переменная счетчика
var intervalMove; // переменная для setInterval, что бы прерывать ее, если змейка все
var intervalCreateFood; // переменная для создания еды
var intervalCreateBlock;

var score = 0; // ведение счета
var life = 3; //кол-во жизней

//Инициализация игры
function init() {
  prepareGameField();

  var buttonStart = document.querySelector('#game-start');
  var buttonReload = document.querySelector('#game-reload');

  buttonStart.addEventListener('click', gameStartHandler);
  buttonReload.addEventListener('click', gameReloadHandler);
  window.addEventListener('keydown', changeDirectionHandler);
}

//Построение поля
function prepareGameField() {
  gameTable = document.createElement('table');
  gameTable.classList.add('game-field__table');

  for (i = 0; i < FIELD_SIZE_X; i++) { // построение строк и ячеек
    var row = document.createElement('tr');
    row.classList.add('game-field__table-row');

    for (var j = 0; j < FIELD_SIZE_Y; j++) {
      var cell = document.createElement('td');
      cell.classList.add('game-field__table-cell');
      row.appendChild(cell);
    }
    gameTable.appendChild(row);
  }
  var gameField = document.querySelector('.game-field');
  gameField.insertBefore(gameTable, gameField.firstChild);

  //выводим в сердечках кол-во жизней
  snakeScoreId.innerText = 0;
  for (i = 0; i < life; i++) {
    var oneLife = document.createElement('span');
    oneLife.classList.add('life-count');
    lifeCountContainer.appendChild(oneLife);
  }
}

//Начало игры
function gameStartHandler() {
  gameStarting = true;
  respawn();

  intervalMove = setInterval(move, SNAKE_SPEED);

  intervalCreateFood = setInterval(createFood, 2000); //setTimeout функция запускается через опред. время
  intervalCreateBlock = setInterval(createBlock, 3000);
}

//Перезагрузка окна
function gameReloadHandler() {
  window.location.reload();
}

//установка точки появления змейки
function respawn() {
  /* Метод Math.floor() возвращает наибольшее целое число, меньшее, либо равное указанному числу.
     Таким образом, данные переменные это просто числа */
  snakeCoorX = Math.floor(FIELD_SIZE_X / 2);
  snakeCoorY = Math.floor(FIELD_SIZE_Y / 2);

  var snakeTail = gameTable.children[snakeCoorX].children[snakeCoorY];
  snakeTail.classList.add('snake-unit');
  var snakeHead = gameTable.children[snakeCoorX].children[++snakeCoorY];
  snakeHead.classList.add('snake-unit');

  snake.push(snakeTail);
  snake.push(snakeHead);
}

//Постоянное движение змейки
function move() {
  var newUnit; // новая ячейка таблицы, которую мы будем закрашивать при движении змеи
  var snakeRemovedUnit;

  checkField();

  switch (snakeDirection) {
    case 'up':
      newUnit = gameTable.children[--snakeCoorX].children[snakeCoorY];
      break;
    case 'down':
      newUnit = gameTable.children[++snakeCoorX].children[snakeCoorY];
      break;
    case 'right':
      newUnit = gameTable.children[snakeCoorX].children[++snakeCoorY];
      break;
    case 'left':
      newUnit = gameTable.children[snakeCoorX].children[--snakeCoorY];
      break;
  }

  checkBlock(newUnit);
  if (!newUnit) return;// если newUnit undefined, то прерываем функцию, что бы не возникало ошибок

  if (newUnit.classList.contains('food-unit')) { //увеличение змейки, когда она ест еду
    addScore(newUnit);
    return;
  }

    newUnit.classList.add('snake-unit');
    snake.push(newUnit);

    snakeRemovedUnit = snake.shift(); // shift удаляет первый элемент массива и ВОЗВРАЩАЕТ его
    snakeRemovedUnit.classList.remove('snake-unit');
}
//смена направления по кнопкам
function changeDirectionHandler(event) {
  switch (event.keyCode) {
    case 37:
      if (snakeDirection !== 'right') snakeDirection = 'left';
      else {
        checkLife(error4);
      }
      break;
    case 38:
      if (snakeDirection !== 'down') snakeDirection = 'up';
      else {
        checkLife(error4);
      }
      break;
    case 39:
      if (snakeDirection !== 'left') snakeDirection = 'right';
      else {
        checkLife(error4);
      }
      break;
    case 40:
      if (snakeDirection !== 'up') snakeDirection = 'down';
      else {
        checkLife(error4);
      }
      break;
  }
}
//создание еды
function createFood() {
  var foodCreate = false;
  var foodCoorX;
  var foodCoorY;
  var foodCell;

  /* Метод Math.random() возвращает псевдослучайное число с плавающей запятой из диапазона [0, 1), то есть, от 0
  (включительно) до 1 (но не включая 1), которое затем можно отмасштабировать до нужного диапазона. */
  foodCoorX = Math.floor(Math.random() * FIELD_SIZE_X);
  foodCoorY = Math.floor(Math.random() * FIELD_SIZE_Y);

  foodCell = gameTable.children[foodCoorX].children[foodCoorY];
  if (!foodCell.classList.contains('snake-unit') || !foodCell.classList.contains('block-unit')) {
    foodCell.classList.add('food-unit');

    foodCreate = true;
  }

  setTimeout(removeFood, 5000);

  function removeFood() {
    if (foodCreate) {
      foodCell.classList.remove('food-unit');
    }
  }
}
// создаем препятствия
function createBlock() {
  var blockCreate = false;
  var blockCoorX;
  var blockCoorY;
  var blockCell;

  /* Метод Math.random() возвращает псевдослучайное число с плавающей запятой из диапазона [0, 1), то есть, от 0
  (включительно) до 1 (но не включая 1), которое затем можно отмасштабировать до нужного диапазона. */
  blockCoorX = Math.floor(Math.random() * FIELD_SIZE_X);
  blockCoorY = Math.floor(Math.random() * FIELD_SIZE_Y);

  blockCell = gameTable.children[blockCoorX].children[blockCoorY];
  if (!blockCell.classList.contains('snake-unit') || !blockCell.classList.contains('food-unit')) {
    blockCell.classList.add('block-unit');

    blockCreate = true;
  }

  setInterval(removeBlock, 5000);

  function removeBlock() {
    if (blockCreate) {
      blockCell.classList.remove('block-unit');
    }
  }
}

// счетчик и вывод очков
function addScore(newUnit) {
  newUnit.classList.remove('food-unit');
  newUnit.classList.add('snake-unit');
  snake.push(newUnit);
  score++;
  snakeScoreId.innerText = score;
}

//Умееньшение жизней
function checkLife(error) {
  if (life <= 0) {
    error();
    gameOver();
  } else {
    var lifeCount = document.querySelectorAll('.life-count');
    lifeCount[--life].classList.remove('life-count');
    alert('осталось:' + life);
  }
}

//Проверка не выходим ли мы за пределы поля
function checkField() {
  if ((snakeCoorY >= FIELD_SIZE_Y - 1) || (snakeCoorY <= 0) || (snakeCoorX <= 0) || (snakeCoorX >= FIELD_SIZE_X - 1)) {
    checkLife(error1);
  }
}

//Проверяем не съели ли мы блок или сами себя
function checkBlock(newUnit) {
  if (!newUnit) return; //если новый юнит у нас вне пределов таблицы
  if (newUnit.classList.contains('block-unit')) {
    checkLife(error2);
  }
  if (newUnit.classList.contains('snake-unit')) {
    checkLife(error3);
  }
}

// игра все
function gameOver() {
  gameStarting = false;
  clearInterval(intervalMove);
  clearInterval(intervalCreateFood);
  clearInterval(intervalCreateBlock);
  alert('Вы проиграли');
}
//виды ошибок
function error1() {
  alert('Вы зашли за поле');
}

function error2() {
  alert('Вы встретили песика');
}

function error3() {
  alert('Вы укусили себя за хвост');
}

function error4() {
  alert('Ваши указания противоречивы, человек! ');
}

//todo рандомный запуск создания блоков и еды
//todo рандомное удаления еды и блоков
//todo при релоад очищаются данные с таблицы, жизни и очки, а сама таблица остается
//todo скорость змейки увеличивается
//todo отловить ошибки когда когда змейка натыкается на препятсвие (частино есть, но так себе)
//todo когда змейка встречается с собачкой удалять класс собачки
//todo окна с картинками при сообщениях
//todo жизни и продолжение игры после работает как-то криво
//todo направление котика (картинки) меняется в зависимоти от направления змейки
//todo отдельный класс для головы и хвоста змейки (разные изображения)
//todo эффект перемещения котика (в css)
//todo если gameOver то кнопки не должны работать (убрать фокус?)