// Write program to take a month as an input from the user and find out whether the month has 31 days or not.

const month = prompt("enter month");

const checkDays = (month) => {
  if (
    month === 1 ||
    month === 3 ||
    month === 5 ||
    month === 7 ||
    month === 8 ||
    month === 10 ||
    month === 12
  ) {
    console.log("yes");
  } else {
    console.log("no");
  }
};

checkDays(month);
