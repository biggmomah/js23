const now = 2023;
const ageRodri = now - 1993;

// console.log(ageRodri)
// console.log(ageRodri ** 2)
// 2 ** 3 means to the power of 3 = 2 * 2 *2 

let x = 10 + 5;
x += 10 // it means x = x + 10
x *= 2 // it means x = x * 2
x++ // it means x = x + 1
x-- // it means x = x + 1
console.log(x)

// comparisons operator <, >, <=, >=

// Operator precedence, for more information refer to https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Operator_precedence. This works as maths, we need to pay attention to the parenthesis if not the result is going to be different.
const averageAgeOne = 20 + 30 / 2
const averageAgeTwo = (20 + 30) / 2

console.log(averageAgeOne, averageAgeTwo)