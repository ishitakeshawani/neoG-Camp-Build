let num = prompt("add number");
let res = "";

for (let i = 1; i <= 12; i++) {
  res += `${num} x ${i}  =  ${num * i} \n`;
  // res + num + " X " + i + " = " + num*i + "\n";;
}

console.log(res);
