function power(val, pow) {
    if (pow != 1) {
        return val * power(val, --pow);
    } else {
        return val;
    }
}


console.log(power(2, 3) ); // 2 * 2 * 2 = 8