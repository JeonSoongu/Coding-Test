function getCombinations(arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, idx, origin) => {
    const rest = origin.slice(idx + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    results.push(...attached.map((x) => x.join("")));
  });

  return results;
}

function solution(orders, course) {
  var answer = [];
  let max = 2;
  const obj = {};
  orders = orders.map((x) => x.split("").sort().join(""));
  for (let i of course) {
    max = 2;
    for (let j = 0; j < orders.length; j++) {
      getCombinations(orders[j].split(""), i).map((x) => {
        obj[x] = (obj[x] || 0) + 1;
        max = max < obj[x] ? obj[x] : max;
      });
    }
    for (const [key, value] of Object.entries(obj)) {
      if (max === value && key.length === i) {
        answer.push(key);
      }
    }
  }

  return answer.sort();
}
