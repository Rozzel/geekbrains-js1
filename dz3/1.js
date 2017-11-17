function isPrime(number) {
    var j = 2;
    while (j < number){
        if(number % j === 0 ) return false;
        j++;
    }
    return true;
}

var i = 1;
while (i <= 100){
        if (isPrime(i)){
            console.log('Простое число - ', i);
        }
        i++;
}

/*
С помощью цикла while вывести все простые числа в промежутке от 0 до 100

var i = 0;
var count = 100;
while (i <= count){
    console.log(i++);
}
 */