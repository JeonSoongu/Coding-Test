function solution(operations) {
  const queue = [];

  operations.map((oper) => {
    [oper.split(" ")].map(([o, num]) => {
      if (o === "I") {
        queue.push(num);
        queue.sort((a, b) => a - b);
      } else if (o === "D") {
        if (queue.length) {
          if (num >= 1) {
            queue.pop();
          } else {
            queue.shift();
          }
        }
      }
    });
  });

  let max =
    queue[queue.length - 1] == null ? 0 : Number(queue[queue.length - 1]);
  let min = queue[0] == null ? 0 : Number(queue[0]);

  return [max, min];
}
