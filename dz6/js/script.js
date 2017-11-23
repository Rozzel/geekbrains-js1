window.onload = function () {
    init();
    basketInit();
};


function init(){
    var images = document.getElementsByTagName("img");
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
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        a.onclick = basketPicture;
    }
}


function basketPicture(event) {
    var basketBall = document.getElementById("basketBall");
    basketBall.innerHTML = "";

    var newImg = document.createElement('img');
    basketBall.appendChild(newImg);
}