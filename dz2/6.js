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

