//  Print the following star pattern :-

// *
// * *
// * * *
// * * * *
// * * * * *

let res = "";

for (let i = 1; i <= 5; i++) {
  for (let j = 0; j < i; j++) {
    res += "*";
  }
  res += "\n";
}

console.log(res);
