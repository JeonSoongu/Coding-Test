function solution(tickets) {
  let answer = [];
  const len = tickets.length;
  const visited = [];
  const result = [];
  tickets.sort(([a1, b1], [a2, b2]) => b1.localeCompare(b2));

  function dfs(str, cnt) {
    result.push(str);

    // console.log([str, cnt]);
    if (len === cnt) {
      answer = result;
      return true;
    }

    for (let i = 0; i < len; i++) {
      if (tickets[i][0] === str && !visited[i]) {
        visited[i] = true;
        if (dfs(tickets[i][1], cnt + 1)) return true;
        visited[i] = false;
      }
    }
    console.log(result);
    result.pop();
    console.log(result);
    return false;
  }

  dfs("ICN", 0);

  console.log(answer);
  return answer;
}
