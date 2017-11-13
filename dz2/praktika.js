// Тернарный оператор
// (Условие) ? (Оператор по истине) : (Оператор по лжи);
var x = 10;
var y = 15;
var max = (x > y) ? x : y;
console.log(max);

// Комбинации условий
/*
ИЛИ (x || y) - если хотя бы один из аргументов true, то возвращает true, иначе – false;
И (x && y) - возвращает true, если оба аргумента истинны, а иначе – false;
НЕ (!x) - возвращает противоположное значение.
 */
console.log(true  || true  ); // true
console.log(false || true  ); // true
console.log(true  || false ); // true
console.log(false || false ); // false
console.log(true && true); // true
console.log(false && true  ); // false
console.log(true  && false ); // false
console.log( false && false ); // false
console.log( !true ); // false
console.log( !0 ); // true

// Давайте создадим функцию, которая будет сравнивать числа

function compare_numbers(x, y){
    if (x > y)
        console.log(x + ' > '+  y);
    else if (x < y)
        console.log(x + ' < ' + y);
    else
        console.log(x + ' = '+  y);
}
compare_numbers(10, 20);
compare_numbers(20, 10);
compare_numbers(20, 20);

// Оператор return позволяет завершить выполнение функции, вернув конкретное значение.

function average(x, y)
{
    return (x + y)/2;
}
avg = average(6, 8);
console.log(avg);


// commit git через консоль