function solution(line) {
  var answer = [];

  let meet = [];

  for (let i = 0; i < line.length; i++) {
    for (let j = i + 1; j < line.length; j++) {
      const [a, b, e] = line[i];
      const [c, d, f] = line[j];

      const denominator = a * d - b * c;

      if (denominator) {
        const x = (b * f - e * d) / denominator;
        const y = (e * c - a * f) / denominator;

        if (Number.isInteger(x) && Number.isInteger(y)) {
          meet.push([x, y]);
        }
      }
    }
  }

  let [maxX, maxY, minX, minY] = [-Infinity, -Infinity, Infinity, Infinity];

  meet.map(([a1, b1]) => {
    maxX = Math.max(maxX, a1);
    minX = Math.min(minX, a1);
    maxY = Math.max(maxY, b1);
    minY = Math.min(minY, b1);
  });

  let result = Array.from(Array(maxY - minY + 1), () =>
    new Array(maxX - minX + 1).fill(".")
  );

  meet.map((ele) => {
    let [x, y] = ele;
    result[maxY - y][x - minX] = "*";
  });

  result.map((x) => {
    answer.push(x.join(""));
  });

  return answer;
}
