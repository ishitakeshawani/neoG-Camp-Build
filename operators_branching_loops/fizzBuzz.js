//  Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".

let arr = [];

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    arr.push("FizzBuzz");
  } else if (i % 5 == 0) {
    arr.push("Buzz");
  } else if (i % 3 == 0) {
    arr.push("Fizz");
  } else {
    arr.push(i);
  }
}

console.log(arr);
