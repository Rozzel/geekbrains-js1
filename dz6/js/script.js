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
window.onload = init;
