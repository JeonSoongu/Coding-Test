function solution(n, wires) {
  const trees = Array.from(new Array(n + 1), () => []);
  wires.map(([x, y]) => {
      trees[x].push(y);
      trees[y].push(x);
  });

const searchTree = (root, exception) => {
      let count = 0;
      const queue = [root];
      const visited = [];
      visited[root] = true;
      while(queue.length){
          const cur = queue.pop();
          trees[cur].map(next => {
              if(next !== exception && !visited[next]){
                  visited[next] = true;
                  queue.push(next);
              }
          })
          count++;
      }
      return count;
  }
  
  let answer = 100; 
  wires.map((w, i) => {
      const [a, b] = w;
      const dif = Math.abs(searchTree(a,b) - searchTree(b,a));
      answer = answer > dif ? dif : answer;
  })
  return answer;
}