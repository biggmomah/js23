// As a best practice it is recommended to always declare the variable as "const" and if we are sure that the variable is going to change then set it as "let"

// Is going to modify
let age = 30;
age = 31;

// Is not going to modify, we can see this error on the console
const birthYear = 1991;
birthYear = 1992

// Old way to declare variables, works similar to let but is not the same
var job = 'programmer'
job = "CS"