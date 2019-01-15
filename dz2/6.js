function mathOperation(arg1, arg2, operation){
    switch(operation){
        case '+':
            return arg1 + arg2;
        case '-':
            return arg1 - arg2;
        case '/':
            return arg1 / arg2;
        case '*':
            return arg1 * arg2;
        case '%':
            return arg1 % arg2;
    };
}

console.log(mathOperation(4, 6, '+'));