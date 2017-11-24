window.onload = function () {
    init();
    cleanBasketInit();
    basketInit();
};


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
