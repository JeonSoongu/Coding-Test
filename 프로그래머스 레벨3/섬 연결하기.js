function solution(n, costs) {
  let answer = 0;
  costs.sort((a, b) => a[2] - b[2]);
  const visited = new Array(n).fill(false);
  const bridge = new Array(costs.length).fill(false);

  visited[costs[0][0]] = true;
  visited[costs[0][1]] = true;
  answer += costs[0][2];
  let cnt = 1;
  while (cnt < n - 1) {
    for (let i = 0; i < costs.length; i++) {
      const [start, end, cost] = costs[i];
      if (bridge[i]) continue;
      if (
        (!visited[start] && visited[end]) ||
        (visited[start] && !visited[end])
      ) {
        cnt += 1;
        visited[start] = true;
        visited[end] = true;
        bridge[i] = true;
        answer += cost;
        break;
      }
    }
  }
  return answer;
}
