var num = 245;

numToObjString(num);
numToObjMath(num);
numToObjTest(num);


function numToObjString(x) {
    var arr = String(x).split(''); // преобразуем число в строку, перебираем строку по символам в массив
    var keys = 'единицы десятки сотни'.split(' '); // создаем массив с рязрядами
    var object = {}; // создаем пустой объект

    if (arr.length > 3) {
        console.log('Введенное число: ' + x + ' > 999'); // проводим проверку на количество введеных цифр и выводм в консоль лог
    } else {
        for (var i = arr.length; i !== 0 ; i--){
            object[keys[arr.length - i]] = +arr[i - 1]; // используя ключ для присвоения имен свойства и присваевываем значения преобразуя строку в число
        }
    }
    console.log(object);
}


function numToObjMath(x) {
    var keys = 'единицы десятки сотни'.split(' ');
    if(x > Math.pow(10, keys.length) - 1) {
        console.log('Number is too big');
        return {};
    } else {
        var digits = {};
        for(var i = 0; i < keys.length ; i++) {
            digits[keys[i]] = Math.floor(x / Math.pow(10, i) % 10);
            //console.log(digits);
        }
    }
    console.log(digits);
}


function numToObjTest(x) {
    var digit = {
        number: x,
        'единицы': 0,
        'десятки': 0,
        'сотни': 0
    };
    if (digit.number <= 9){
        digit['единицы'] = digit.number;
    } else if (digit.number <= 999){
        digit['единицы'] = Math.floor(digit.number % 10); // 5
        digit['десятки'] = Math.floor(digit.number / 10 % 10);
        digit['сотни'] = Math.floor(digit.number / 100 % 10);
        delete digit.number;
    }else {
        digit.number = 0;
        console.log('Вы ввели число за диапазоном 0 - 999');
    }
    console.log(digit);

}
console.log('*********************');
console.log(Math.floor(num % 10));
console.log(Math.floor(num / 10 % 10));
console.log(Math.floor(num / 100 % 10));
console.log('*********************');
console.log(Math.floor(num / Math.pow(10, 0) % 10));
console.log(Math.floor(num / Math.pow(10, 1) % 10));
console.log(Math.floor(num / Math.pow(10, 2) % 10));


/*
1) Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа
245
мы должны получить следующий объект:
{‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.



 */