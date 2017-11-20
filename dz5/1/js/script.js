function generateBoard() {
    var divBoard = document.createElement('div');
    divBoard.className = 'board';
    document.body.appendChild(divBoard);
    var keys = 'a b c d e f g h'.split(' ');
    var keysBoard = 'l ko s f ka s ko l p w- b-'.split(' ');
    var leftNum = 8;
    var RightNum = 8;

    for (var i = 0; i < 100; i++) {
        var divBoardSel = document.querySelector('.board');
        var divSquare = document.createElement('div');

        if (i < 10 ) {
            outlineTop();
        } else if (i < 90) {
            if (i === 10 ||
                i === 20 ||
                i === 30 ||
                i === 40 ||
                i === 50 ||
                i === 60 ||
                i === 70 ||
                i === 80
            ) {
                outlineleftNum();
            } else if (i === 19 ||
                i === 29 ||
                i === 39 ||
                i === 49 ||
                i === 59 ||
                i === 69 ||
                i === 79 ||
                i === 89
            ) {
                outlineRightNum();
            } else if (i < 21) {
                chetno();
                fiGure();
            } else if (i < 31) {
                nechetno();
                fiGure();
            } else if (i < 41) {
                chetno();
            } else if (i < 51) {
                nechetno();
            } else if (i < 61) {
                chetno();
            } else if (i < 71) {
                nechetno();
            } else if (i < 81) {
                chetno();
                fiGure();
            } else {
                nechetno();
                fiGure();
            }
        } else {
            outlineBot();
        }
    }

// Раставляет фигуры
    function fiGure() {
      if (i < 19){
          var img = document.createElement('img');
          img.classList.add('figure');
          img.setAttribute('src', 'images/figure/' + keysBoard[10] + keysBoard[i - 11] + '.svg');
          img.setAttribute('alt', keysBoard[10] + keysBoard[i - 11]);
          divSquare.appendChild(img);
      } else if (i < 29){
          img = document.createElement('img');
          img.classList.add('figure');
          img.setAttribute('src', 'images/figure/' + keysBoard[10] + keysBoard[8] + '.svg');
          img.setAttribute('alt', keysBoard[10] + keysBoard[8]);
          divSquare.appendChild(img);

      } else if (i < 79){
          img = document.createElement('img');
          img.classList.add('figure');
          img.setAttribute('src', 'images/figure/' + keysBoard[9] + keysBoard[8] + '.svg');
          img.setAttribute('alt', keysBoard[9] + keysBoard[8]);
          divSquare.appendChild(img);

      } else{
          img = document.createElement('img');
          img.classList.add('figure');
          img.setAttribute('src', 'images/figure/' + keysBoard[9] + keysBoard[i - 81] + '.svg');
          img.setAttribute('alt', keysBoard[9] + keysBoard[i - 81]);
          divSquare.appendChild(img);

      }
    }
// Раскраск доски
    function black() {
        divSquare.className = 'square square-black';
        divBoardSel.appendChild(divSquare);
    }
    function white() {
        divSquare.className = 'square square-white';
        divBoardSel.appendChild(divSquare);
    }

// Растановка букв
    function outlineTop() {
        divSquare.className = 'square square-no-outline rotate';
        divBoardSel.appendChild(divSquare);
        if ( i > 0 && i < 9){
            divSquare.innerText = keys[i - 1];
        }
    }
    function outlineBot() {
        divSquare.className = 'square square-no-outline';
        divBoardSel.appendChild(divSquare);
        if ( i > 90 && i < 99){
            divSquare.innerText = keys[i - 91];
        }
    }
// Растановка цифр
    function outlineleftNum() {
        divSquare.className = 'square square-no-outline';
        divBoardSel.appendChild(divSquare);
        divSquare.innerText = leftNum--;
    }
    function outlineRightNum() {
        divSquare.className = 'square square-no-outline rotate';
        divBoardSel.appendChild(divSquare);
        divSquare.innerText = RightNum--;
    }

// Логика для раскраски
    function chetno() {
        if (i % 2 === 0) {
            black();
        } else {
            white();
        }
    }
    function nechetno() {
        if (i % 2 !== 0) {
            black();
        } else {
            white();
        }
    }
}


window.onload = function () {
    generateBoard();
};
