function solution(n, money) {
  const dp = [1, ...new Array(n).fill(0)];
  
  money.forEach((el, i) => {
      for (let j = el; j <= n; j++) {
          dp[j] += dp[j - money[i]];
      }       
  });

  return dp[n] % 1000000007;
}