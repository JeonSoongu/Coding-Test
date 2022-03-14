function solution(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  let x1 = 1; // 정수 변수를 이용하는 이유는 배열을 이용해서 풀게된다면 배열의 길이가 600000까지 늘어나게 되어 공간복잡도에서 탈락하게 된다.
  let x2 = 2;
  let result = 0;
  for (let i = 3; i <= n; i++) {
    result = (x1 + x2) % 1000000007;
    x1 = x2;
    x2 = result;
  }

  return result;
}
