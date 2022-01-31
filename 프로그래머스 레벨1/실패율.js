function solution(N, stages) {
  const failureRateArr = {};
  let personNum = stages.length;
  for (let i = 1; i < N + 1; i++) {
    const failureNum = stages.filter((x) => x === i).length;
    failureRateArr[i] = failureNum / personNum;
    personNum = personNum - failureNum;
  }
  let sortobj = [];
  for (let number in failureRateArr) {
    sortobj.push([Number(number), failureRateArr[number]]);
  }
  sortobj.sort((a, b) => b[1] - a[1]);
  return sortobj.map((x) => x[0]);
}
