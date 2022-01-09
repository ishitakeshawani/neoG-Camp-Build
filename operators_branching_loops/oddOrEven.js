// Write a program to take a number input from user and determine whether the number is odd or even.


const checkOddOrEven = (num) => num % 2 === 0 ? 'Even' : 'Odd' 

let num = prompt("add input")
console.log(checkOddOrEven(num))
