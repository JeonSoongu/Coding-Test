function solution(n, s) {
  if (s < n) return [-1];
  let quotient = parseInt(s / n);
  let rest = s % n;

  const answer = new Array(n).fill(quotient);

  for (let i = 0; i < rest; i++) {
    answer[answer.length - 1 - i]++;
  }

  return answer;
}
