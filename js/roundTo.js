const roundTo = function(n, step) {
    let remainder = n%step;

    //ternary operator. If remainder is less than step/2, then 0. If not, then return the step value instead.
    //remainder = 3 -> 23-3 + 0 = 20 as output. 
    //because 3 < 5, so it will give 0 instead of 10.
    return n - remainder + (remainder < step / 2 ? 0 : step);
}

console.log(roundTo(23, 10));

