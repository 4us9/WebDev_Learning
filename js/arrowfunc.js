const variable_name = (n, step) => {

    remainder = n % step;
    return n - remainder + (remainder < step / 2 ? 0 : step);
}

console.log(variable_name(23, 10)); // 20