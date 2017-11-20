window.onload = function () {

generateBoard();

function generateBoard() {
    var divBoard = document.createElement('div');
    divBoard.className = 'board';
    document.body.appendChild(divBoard);
    var keys = 'ABCDEFGH'.split('');
    var keysBoard = 'Ладья Конь Слон Ферзь Король Слон Конь Ладья Пешка б ч'.split(' ');
    window.leftNum = 8;
    window.RightNum = 8;

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
    function fiGure() {
      if (i < 19){
          divSquare.innerText = keysBoard[10] + keysBoard[i - 11];
        } else if (i < 29){
          divSquare.innerText = keysBoard[10] + keysBoard[8];
        } else if (i < 79){
          divSquare.innerText = keysBoard[9] + keysBoard[8];
      } else{
          divSquare.innerText = keysBoard[9] + keysBoard[i - 81];
      }
    }
    function black() {
        divSquare.className = 'square square-black';
        divBoardSel.appendChild(divSquare);
    }
    function white() {
        divSquare.className = 'square square-white';
        divBoardSel.appendChild(divSquare);
    }
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
}};