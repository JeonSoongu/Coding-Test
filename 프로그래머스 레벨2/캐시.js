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
  cities.map((x) => {
    const idx = curr.indexOf(x);
    if (idx > -1) {
      const choiceCity = curr[idx];
      curr.splice(idx, 1);
      curr.unshift(choiceCity);
      answer += 1;
    } else {
      if (curr.length >= cacheSize) curr.splice(curr.length - 1, 1);
      curr.unshift(x);
      answer += 5;
    }
  });

  return answer;
}
