// Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.


let first = 129;
let second = 251;

const getMaxMin = (first, second) => {
  if (first > second) {
    console.log(`max is ${first}`);
    console.log(`min is ${second}`);
  } else {
    console.log(`max is ${second}`);
    console.log(`min is ${first}`);
  }
};

getMaxMin(first, second);
