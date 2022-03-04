function solution(n) {
  const answer = [];

  function hanoi(n, cur, next, sub) {
    if (n === 1) answer.push([cur, next]);
    // 원판이 1개라면 현재 위치에서 도착 위치로 이동
    else {
      hanoi(n - 1, cur, sub, next); // 원판을 도착지점이 아닌 중앙 위치로 이동
      answer.push([cur, next]);
      hanoi(n - 1, sub, next, cur); // 중앙 위치에 있던 원판을 도착지점으로 이동
    }
  }

  hanoi(n, 1, 3, 2); // 원판 갯수, 현재 위치, 다음 위치, 여분의 공간 위치
  return answer;
}
