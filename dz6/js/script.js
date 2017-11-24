window.onload = function () {
    init();
    cleanBasketInit();
    basketInit();
    initArrow();
};

function initArrow(){
    var arrow = document.getElementsByClassName('arrow');
        arrow.onclick = changeArrow;

    for (var i = 0; i < arrow.length; i++) {
        arrow[i].onclick = changeArrow;
    }
}
function changeArrow(event){
    var bigDiv = document.getElementById('big_pic');
    var dataPic = document.querySelector('#big_pic img').getAttribute('data-pic');
    var dataArrow = event.target.getAttribute('data-arrow');
    console.log(dataPic);
    bigDiv.innerHTML = "";

    if ( +dataArrow === 0){
        if (+dataPic === 0){
            bigDiv.innerHTML = bigPicImg[bigPicImg.length - 1]
        }else{
            bigDiv.innerHTML = bigPicImg[+dataPic - 1];
        }


    }else{
        if (+dataPic + 1 === bigPicImg.length){
            bigDiv.innerHTML = bigPicImg[bigPicImg.length - 4]
        }else{
            bigDiv.innerHTML = bigPicImg[+dataPic + 1];
        }

    }


    event.preventDefault();
}



function init(){
    var images = document.getElementsByClassName('galleryImg');
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = changeBigPicture;
    }
}
function changeBigPicture(event){
    var bigDiv = document.getElementById('big_pic');
    bigDiv.innerHTML = "";
    var smallSrc = event.target.getAttribute('src');

    var newImg = document.createElement('img');
    newImg.src = smallSrc.replace('small', 'big');
    bigDiv.appendChild(newImg);


}


function basketInit() {
    var a = document.getElementsByClassName('add-button');
    for (var i = 0; i < a.length; i++){
        a[i].onclick = basketPicture;
    }
}
function  basketPicture() {
    var basketBall = document.getElementById('basketBall');
    var vendorСode = event.target.getAttribute('data-code');

    var basketTovar = document.createElement('div');
        basketTovar.className = 'basketTovar';
        basketTovar.innerHTML = tovar[vendorСode].img +
                                tovar[vendorСode].name +
                                tovar[vendorСode].pricer;
        basketBall.appendChild(basketTovar);

        var sumNo = document.getElementById('sumNo');
        var sumNoNumber = document.getElementById('sumNo').textContent;
            sumNo.innerHTML = +sumNoNumber + 1;

        var sumRub = document.getElementById('sumRub');
        var sumRubNumber = document.getElementById('sumRub').textContent;
            sumRub.innerHTML = +sumRubNumber + tovar[vendorСode].price;

    event.preventDefault();
}


function cleanBasketInit() {
    var a = document.getElementById("cleanBasket");
    a.onclick = cleanBasket;
}
function cleanBasket() {
    var basketBall = document.getElementById("basketBall");
        basketBall.innerHTML = "";

    var sumNo = document.getElementById("sumNo");
        sumNo.innerHTML = "0";

    var sumRub = document.getElementById("sumRub");
        sumRub.innerHTML = "0";

    event.preventDefault();
}

var bigPicImg = [
    '<img src="img/gallery/big/1.jpg" data-pic="0">',
    '<img src="img/gallery/big/2.jpg" data-pic="1">',
    '<img src="img/gallery/big/3.jpg" data-pic="2">',
    '<img src="img/gallery/big/4.jpg" data-pic="3">'
];



/*

    var bigDivImg = document.querySelector('#big_pic img');
    var bigDivSrc = bigDivImg.getAttribute('src');
    console.log(bigDivSrc);
    var newImg = document.createElement('img');
        newImg.src = smallSrc.replace('small', 'big');
        bigDiv.appendChild(newImg);


 */