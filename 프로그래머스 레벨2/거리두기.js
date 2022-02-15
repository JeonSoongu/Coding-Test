function solution(places) {
  var answer = [];
  let location = [];

  places.map((x, i) => {
    let violation = 0;
    location = [];

    x.map((y, j) => {
      y.split("").map((ele, k) => {
        if (ele === "P") {
          location.push([j, k]);
        }
      });
    });

    for (let num1 = 0; num1 < location.length; num1++) {
      violation = 0;

      for (let num2 = num1 + 1; num2 < location.length; num2++) {
        const r1 = location[num1][0];
        const r2 = location[num2][0];

        const c1 = location[num1][1];
        const c2 = location[num2][1];

        const t1 = r1 - r2;
        const t2 = c1 - c2;

        if (Math.abs(t1) + Math.abs(t2) <= 2) {
          if (t1 < 0 && t2 < 0) {
            const [x1, y1] = [r1 + 1, c1];
            const [x2, y2] = [r2 - 1, c2];

            if ((x[x1][y1] === "X" && x[x2][y2]) === "X") {
              continue;
            } else {
              violation = 1;
            }
          } else if (t1 >= 0 && t2 < 0) {
            const [x1, y1] = [r1, c1 + 1];

            if (x[x1][y1] === "X") {
              continue;
            } else {
              violation = 1;
            }
          } else if (t1 < 0 && t2 >= 0) {
            const [x1, y1] = [r1 + 1, c1];
            const [x2, y2] = [r2 - 1, c2];

            if (x[x1][y1] === "X" && x[x2][y2] === "X") {
              continue;
            } else {
              violation = 1;
            }
          }
        }
      }

      if (violation >= 1) break;
    }

    if (violation >= 1) {
      answer.push(0);
    } else {
      answer.push(1);
    }
  });

  return answer;
}
