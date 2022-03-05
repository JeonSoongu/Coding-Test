const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
const arr2 = [];

for (let i = 0, j = 2; i < Number(M); i++, j++) {
  arr2.push(input[j].split(" ").map(Number));
}

for (let i = 1; i < arr.length; i++) {
  arr[i] = arr[i] + arr[i - 1];
}

arr.unshift(0);
let str = "";
for (let [r1, c1] of arr2) {
  str += arr[c1] - arr[r1 - 1] + "\n";
}

console.log(str);
