const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const noListenSee = {};

for (let i = 1; i < input.length - 1; i++) {
  noListenSee[input[i]] = (noListenSee[input[i]] || 0) + 1;
}
const answer = [];

for (let name in noListenSee) {
  if (noListenSee[name] >= 2) {
    answer.push(name);
  }
}

console.log(answer.length);
answer.sort().forEach((name) => {
  console.log(name);
});
