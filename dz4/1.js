


function numToObj(x) {
    var num = String(x);
    var arr = num.split('');
    var object = {};

    if (arr.length > 3) {
        console.log('Введенное число: ' + x + ' > 999');
    } else if (arr.length === 3){
        object['единицы'] = arr[2];
        object['десятки'] = arr[1];
        object['сотни'] = arr[0];
    } else if(arr.length === 2){
        object['единицы'] = arr[1];
        object['десятки'] = arr[0];
    } else {
        object['единицы'] = arr[0];
    }
    console.log(object);
}
numToObj(458);


/*
1) Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
 */

/*
var object = {
     ed: 5,
    des: 4,
    sot: 2};

    var arr = [
    {
        ed: 5,
        des: 4,
        sot: 2},
    {
        ed: 6,
        des: 4,
        sot: 2}
];

console.log(arr[1].des);

function Div( src ) {
    var keys = 'единицы десятки сотни'.split(' ');
    var src = (src+'')||'0';
    var div = src.split('');
    for (var i = keys.length, ln = div.length; i--;){
        this[keys[i]] = (+div[ln - 1 - i])||0;
    };
console.log(src);
};

 */