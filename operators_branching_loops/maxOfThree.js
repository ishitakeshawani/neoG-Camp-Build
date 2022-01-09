// Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.

const num1 = 8,
  num2 = 23,
  num3 = 17;

const maxOfThree = (num1, num2, num3) => {
  if (num1 > num2 && num1 > num3) {
    console.log(`Maximum of three is ${num1}`);
  } else if (num3 > num2 && num3 > num1) {
    console.log(`Maximum of three is ${num3}`);
  } else {
    console.log(`Maximum of three is ${num2}`);
  }
};

maxOfThree(num1, num2, num3);

// console.log(Math.max(8,5,89))
