function solution(N) {
  let cnt = 0;
  let min = 0;
  const binary = N.toString(2).split("").map(Number);
  binary.reduce((prev, cur) => {
    if (!(prev & cur)) {
      cnt++;
      return prev;
    } else {
      if (cnt > min) {
        min = cnt;
      }
      cnt = 0;
      return cur;
    }
  }, binary[0]);

  return min;
}

console.log(solution(74901729));

// 임의의 숫자 N이 들어올때 2진 바이너리로 바꿔서 1과 1 사이의 0의 갯수 중 큰 수를 구하는 문제
// ex.) 5 -> 1001   2가 리턴되야한다.
// ex.) 1041 -> 10000010001  5를 리턴
