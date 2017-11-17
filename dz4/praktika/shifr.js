function caesarsCodeDecoded(x) {

var symbols = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя .,—!'.split('');
var shift = 10;
var encodedMessage = x.split(' ');
var decodedMessage = '';

for(var i = 0; i < encodedMessage.length; i++){
    if(+encodedMessage[i] + shift > symbols.length){
        decodedMessage += symbols[+encodedMessage[i] + shift - symbols.length];
    } else {
        decodedMessage += symbols[+encodedMessage[i] + shift];
    }
}
    console.log(decodedMessage);
}

caesarsCodeDecoded('8 28 36 52 56 40 23 31 56 39 38 28 48 52 58 56 38 27 32 37 56 40 23 31 56 39 38 41 39 32 57');

/*

caesarsCodeEncoded('Семь раз поешь, один раз поспи.');

*/