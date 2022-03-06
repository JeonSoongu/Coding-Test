function solution(A) {
  let odd = A[0];

  for (let i = 1; i < A.length; i++) {
    odd = odd ^ A[i];
  }
  return odd;
}

console.log(solution([3, 3, 7, 9, 9, 9]));
