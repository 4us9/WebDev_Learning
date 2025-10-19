function noisy(f) {
  return (...args) => {
    console.log("calling with", args);
    let result = f(...args);
    console.log("called with", args, ", returned", result);
    return result;
  };
}
let hi = noisy(Math.min)(3, 2, 4);

debugger;

console.log(hi);
// → calling with [3, 2, 1]
// → called with [3, 2, 1] , returned 1

function dw(f)
{
    console.log("hi");
    console.log(f);
}

dw(Math.min)(1);

