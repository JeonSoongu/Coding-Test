function solution(A) {
  let sum = 0;
  let Asum = 0;
  for (let i = 1; i <= A.length + 1; i++) {
    sum += i;
  }
  for (let j = 0; j < A.length; j++) {
    Asum += A[j];
  }
  return sum - Asum;
}
