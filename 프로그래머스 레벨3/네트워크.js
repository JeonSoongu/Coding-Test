function solution(n, computers) {
  const graph = new Array(computers.length + 1);
  const visited = new Array(computers.length + 1).fill(false);
  let startNode = 1;
  let route = [];
  const result = [];

  for (let i = 0; i < computers.length; i++) {
    const arr = [];
    for (let j = 0; j < computers[i].length; j++) {
      if (computers[i][j] === 1 && i !== j) {
        arr.push(j + 1);
      }
    }
    graph[i + 1] = arr;
  }

  function dfs(graph, node, vistied) {
    visited[node] = true;
    route.push(node);
    graph[node].forEach((i) => {
      if (!visited[i]) {
        dfs(graph, i, visited);
      }
    });
    return route;
  }

  for (let i = 1; i < visited.length; i++) {
    if (visited[i] === false) {
      route = [];
      result.push(dfs(graph, i, visited));
    }
  }

  return result.length;
}
