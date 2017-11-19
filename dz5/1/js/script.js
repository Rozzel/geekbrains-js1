window.onload = function () {


var divBoard = document.createElement('div');
divBoard.className = 'board';
document.body.appendChild(divBoard);
var keys = ' ABCDEFGH '.split('');
var keysBoard = '           A8 B8 C8 D8 E8 F8 G8 H8   A7 B7 C7 D7 E7 F7 G7 H7   A6 B6 C6 D6 E6 F6 G6 H6   A5 B5 C5 D5 E5 F5 G5 H5   A4 B4 C4 D4 E4 F4 G4 H4   A3 B3 C3 D3 E3 F3 G3 H3   A2 B2 C2 D2 E2 F2 G2 H2   A1 B1 C1 D1 E1 F1 G1 H1'.split(' ');
window.leftNum = 8;
window.RightNum = 8;

for (var i = 0; i < 100 ; i++) {
    var divBoardSel = document.querySelector('.board');
    var divSquare = document.createElement('div');

    if (i < 10){
            outlineTop();

        } else if (i < 90) {
            if (i === 10||
                i === 20||
                i === 30||
                i === 40||
                i === 50||
                i === 60||
                i === 70||
                i === 80
            ) {
                outlineleftNum();
        }else if (  i === 19||
                    i === 29||
                    i === 39||
                    i === 49||
                    i === 59||
                    i === 69||
                    i === 79||
                    i === 89
            ){
                outlineRightNum();
            }else if (  i < 21){
                chetno();
            }else if ( i < 31) {
                nechetno();
            }else if ( i < 41){
                chetno();
            }else if(i < 51){
                nechetno();
            }else if(i < 61){
                chetno();
            }else if (i < 71){
                nechetno();
            }else if (i < 81){
                chetno();
            }else {
                nechetno();
            }
    } else {
        outlineBot();
    }

}

function black() {
    divSquare.className = 'square square-black';
    divBoardSel.appendChild(divSquare);
    divSquare.innerText = keysBoard[i];
}
function white() {
        divSquare.className = 'square square-white';
        divBoardSel.appendChild(divSquare);
        divSquare.innerText = keysBoard[i];
}
function outlineTop(){
        divSquare.className = 'square square-no-outline rotate';
        divBoardSel.appendChild(divSquare);
        divSquare.innerText = keys[i];
}
function outlineBot(){
    divSquare.className = 'square square-no-outline';
    divBoardSel.appendChild(divSquare);
    divSquare.innerText = keys[i - 90];
}
function outlineleftNum(){
    divSquare.className = 'square square-no-outline';
    divBoardSel.appendChild(divSquare);
divSquare.innerText = leftNum--;
}
function outlineRightNum(){
    divSquare.className = 'square square-no-outline rotate';
    divBoardSel.appendChild(divSquare);
    divSquare.innerText = RightNum--;
}
function chetno() {
    if (i % 2 === 0){
        black();
    }else {
        white();
    }
}
function nechetno() {
    if (i % 2 !== 0){
        black();
    }else {
        white();
    }
}
};