function solution(n, t, m, p) {
  let str = "";
  for (let i = 0; i < t * m; i++) {
    const notation = i.toString(n);
    str += notation;
  }

  const answer = [];
  let cnt = p - 1;

  while (answer.length < t) {
    answer.push(str[cnt].toUpperCase());
    cnt += m;
  }
  return answer.join("");
}
