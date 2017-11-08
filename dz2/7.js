console.log( null > 0 ); // false
console.log( null == 0 ); // false
console.log(null >= 0); // true


console.log( undefined > 0 ); // false
console.log( undefined < 0 ); // false
console.log( undefined == 0 ); // false


/*
Алгоритмы проверки равенства == и сравнения >= > < <= работают по-разному.
Значения null и undefined равны == друг другу и не равны ничему другому. В других сравнениях (с участием >,<) их лучше не использовать, так как они ведут себя не как 0.
 */