// Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....

let num = 12;

const fibonaciSeries = (num) => {
  if (num == 1) {
    return [0, 1];
  } else {
    // it continuously calls the recur function till n-1
    total = fibonaciSeries(num - 1);
    /* push function add previous two terms and returns store the result into the total variable. */
    total.push(total[num - 1] + total[num - 2]);
    return total;
  }
};

let num1 = 0,
  num2 = 1;

const fibonaci = (num) => {
  console.log(num1);
  console.log(num2);
  for (let i = 2; i <= num; i++) {
    sum = num1 + num2;
    console.log(sum);
    num1 = num2;
    num2 = sum;
  }
};

fibonaci(num);
