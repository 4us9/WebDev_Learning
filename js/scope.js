let x = 10;

const test = function(va)
{
    let y = 20;
    let z = va; //local z
    return z;
};


z = 10;

console.log(z);

console.log(test(30));

console.log(z);


