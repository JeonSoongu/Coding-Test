function solution(board, skill) {
  var answer = 0;
  const y = board.length;
  const x = board[0].length;
  const arr = Array.from(new Array(y + 1), () => Array(x + 1).fill(0));
  function build(type, ...skill) {
    let degree = skill.pop();
    if (type === 1) {
      degree = -degree;
    }

    const [r1, c1, r2, c2] = skill;
    arr[r1][c1] += degree;
    arr[r1][c2 + 1] -= degree;
    arr[r2 + 1][c1] -= degree;
    arr[r2 + 1][c2 + 1] += degree;
  }

  skill.map((x) => {
    build(...x);
  });
  for (let i = 0; i < arr[0].length; i++) {
    for (let j = 1; j < arr.length; j++) {
      arr[j][i] += arr[j - 1][i];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr[0].length; j++) {
      arr[i][j] += arr[i][j - 1];
    }
  }

  const result = Array.from(new Array(y), () => Array(x).fill(0));
  board.map((ele, i) => {
    ele.map((x, j) => {
      result[i][j] = x + arr[i][j];
    });
  });

  let cnt = 0;
  result.map((x) => {
    x.map((ele) => {
      if (ele > 0) {
        cnt++;
      }
    });
  });
  return cnt;
}
