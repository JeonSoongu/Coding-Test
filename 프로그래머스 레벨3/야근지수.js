function solution(n, works) {
  const sum = works.reduce((a, b) => a + b);
  if (sum <= n) return 0;

  works.sort((a, b) => b - a);

  while (n) {
    const max = works[0];

    for (let i = 0; i <= works.length; i++) {
      if (works[i] >= max) {
        works[i]--;
        n--;
      }
      if (!n) break;
    }
  }

  return works.map((x) => x * x).reduce((a, b) => a + b);
}
