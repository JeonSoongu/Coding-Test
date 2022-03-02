function solution(routes) {
  routes.sort(([a1, b1], [a2, b2]) => b1 - b2);
  let exit = -30001;
  let cnt = 0;

  for (let i = 0; i < routes.length; i++) {
    if (routes[i][0] > exit) {
      exit = routes[i][1];
      cnt++;
    }
  }

  return cnt;
}
