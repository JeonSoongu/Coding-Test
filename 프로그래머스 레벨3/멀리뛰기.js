function solution(n) {
  const dp = [0, 1, 2];

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567; // 오버플로우 방지
  }

  return dp[n];
}
