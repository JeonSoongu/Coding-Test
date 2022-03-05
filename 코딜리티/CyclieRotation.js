function solution(A, K) {
  const len = A.length;
  const arr = new Array(len);
  for (let i = 0; i < len; i++) {
    let idx = i + K;
    if (idx >= len) {
      idx = idx % len;
    }
    arr[idx] = A[i];
  }
  return arr;
}

console.log(solution([1, 2, 3, 4], 2));
