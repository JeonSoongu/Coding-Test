function solution(X, Y, D) {
  if (X >= Y) return 0;
  let jump = X + D;
  if (jump >= Y) return 1;
  let cnt = Number.isInteger((Y - X) / D)
    ? parseInt((Y - X) / D)
    : parseInt((Y - X) / D) + 1;
  return cnt;
}
