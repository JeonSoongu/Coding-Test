function solution(cacheSize, cities) {
  let answer = 0;
  cities = cities.map((x) => x.toUpperCase());
  if (!cacheSize) {
    let answer = 0;
    for (let i = 0; i < cities.length; i++) {
      answer += 5;
    }
    return answer;
  }

  const curr = [];
  cities.map((x, i) => {
    const idx = curr.indexOf(x);
    if (curr.includes(x)) {
      const choiceCity = curr[idx];
      curr.splice(idx, 1);
      for (let i = 0; i < cacheSize; i++) {
        curr.push(curr[i]);
        curr.pop();
      }
      curr.unshift(choiceCity);
      answer += 1;
    } else {
      if (curr.length === cacheSize) {
        curr.splice(curr.length - 1, 1);
      }
      curr.unshift(x);
      answer += 5;
    }
  });

  return answer;
}
