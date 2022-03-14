function solution(nodeinfo) {
  // y값이 큰 값으로 정렬한다. 만약 y값이 같다면 x가 작은 값으로 정렬한다.
  nodeinfo = nodeinfo
    .map((v, i) => [...v, i + 1])
    .sort((a, b) => (a[1] - b[1] === 0 && a[0] - b[0]) || b[1] - a[1]);

  const pre = [];
  const post = [];

  // 왼쪽, 오른쪽 트리를 나누는 재귀함수.
  function split(arr) {
    if (arr.length === 0) return;
    else {
      const parent = arr.shift(); // 제일 상단의 노드가 부모 노드이다.
      pre.push(parent[2]); // 전위 순회 (위에서부터 순회한다.)
      const left = arr.filter((v) => v[0] < parent[0]); // 왼쪽 노드를 나눈다.
      const right = arr.filter((v) => v[0] > parent[0]); // 오른쪽 노드를 나눈다.
      split(left); // 왼쪽 노드만 재귀
      split(right); // 오른쪽 노드만 재귀
      post.push(parent[2]); // 후위 순회
    }
  }
  split(nodeinfo);
  return [pre, post];
}
