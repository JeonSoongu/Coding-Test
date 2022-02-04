function solution(n) {
  let ans = 0;
  while (n) {
    if (n % 2 === 1) {
      ans++;
      n -= 1;
    } else {
      n /= 2;
    }
  }

  return ans;
}
