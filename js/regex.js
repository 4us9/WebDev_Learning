console.log(/abc/.test("abcde"));

let nonBinary = /[^01]/;

let test1 = nonBinary.test("1100100010100110"); // false only 0s and 1s
let test2 = nonBinary.test("0111010112101001"); // true because of the '2'

console.log(test1);
console.log(test2);


const test3 = /\p{Script=Greek}/u.test("α");   // → true
const test4 = /\p{Script=Arabic}/u.test("α");  // → false

console.log("Test 3 is: ", test3);

console.log("Test 4 is: ", test4);




