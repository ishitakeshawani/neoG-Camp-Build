// Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.

const num1 = 35,
  num2 = 29,
  num3 = 46;

const minOfThree = (num1, num2, num3) => {
  if (num1 < num2 && num1 < num3) {
    console.log(`Minimum of three is ${num1}`);
  } else if (num3 < num2 && num3 < num1) {
    console.log(`Minimum of three is ${num3}`);
  } else {
    console.log(`Minimum of three is ${num2}`);
  }
};

minOfThree(num1, num2, num3);
