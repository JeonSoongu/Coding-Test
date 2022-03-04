const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const weight = input[0];
let count = BigInt(-1); // N의 범위가 100이기 때문에 N = 100 이라면 오버플로우가 발생할 수 있음.
// BigInt형으로 오버플로우를 방지.
let result = BigInt(2 ** weight) + count;
console.log(result.toString()); // BigInt형으로 출력하게 된다면 1n 식으로 출력되기 때문에 문자형으로 바꿔서 출력
const answer = [];

function hanoi(weight, cur, next, sub) {
  if (weight === 1) answer.push([cur, next]);
  else {
    hanoi(weight - 1, cur, sub, next);
    answer.push([cur, next]);
    hanoi(weight - 1, sub, next, cur);
  }
}

if (weight <= 20) {
  hanoi(weight, 1, 3, 2);
  console.log(answer.map((ele) => ele.join(" ")).join("\n")); // 한번에 콘솔로 출력해야 시간이 줄어듬
}
