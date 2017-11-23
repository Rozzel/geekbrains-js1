window.onload = function () {
    init();
    cleanBasketInit();
    basketInit();
};


function init(){
    var images = document.getElementsByClassName("galleryImg");
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = changeBigPicture;
    }
}
function changeBigPicture(event){
    var bigDiv = document.getElementById("big_pic");
    bigDiv.innerHTML = "";
    var smallSrc = event.target.getAttribute('src');

    var newImg = document.createElement('img');
    newImg.src = smallSrc.replace('small', 'big');
    bigDiv.appendChild(newImg);


}


function basketInit() {
    var a = document.getElementsByClassName("add-button");
    for (var i = 0; i < a.length; i++){
        a[i].onclick = basketPicture;
    }
}
function  basketPicture() {
    var basketBall = document.getElementById("basketBall");

    var basketTovar = document.createElement('div');
        basketTovar.className = 'basketTovar';
        basketTovar.textContent = 'test';

    basketBall.appendChild(basketTovar);
    event.preventDefault();


    //var smallSrc = event.target.getAttribute('src');
    //var newImg = document.createElement('img');
    //newImg.src = smallSrc.replace('small', 'big');
    //basketBall.appendChild(newImg);
}


function cleanBasketInit() {
    var a = document.getElementById("cleanBasket");
    a.onclick = cleanBasket;
}
function cleanBasket() {
    var basketBall = document.getElementById("basketBall");
    basketBall.innerHTML = "<p>Карзина пуста</p>";
    var sumNo = document.getElementById("sumNo");
    sumNo.innerHTML = "0";
    var sumRub = document.getElementById("sumRub");
    sumRub.innerHTML = "0";
    event.preventDefault();
}