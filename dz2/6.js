function mathOperation(arg1, arg2, operation){
    switch(operation){
        case '+':
            return arg1 + arg2;
            break;
        case '-':
            return arg1 - arg2;
            break;
        case '/':
            return arg1 / arg2;
            break;
        case '*':
            return arg1 * arg2;
            break;
        case '%':
            return arg1 % arg2;
            break;
    }
}

console.log(mathOperation(4, 6, '+'));

/*
fplus(arg1, arg2)
minus(arg1, arg2)
division(arg1, arg2)
multiplication(arg1, arg2)
module(arg1, arg2)
*/