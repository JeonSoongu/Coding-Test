function solution(begin, target, words) {
  if (!words.includes(target)) return 0;

  let answer = 0;
  const visited = [];
  const queue = [];

  queue.push([begin, answer]);

  while (queue) {
    let [v, cnt] = queue.shift();
    console.log([v, cnt]);
    if (v === target) return cnt;

    words.forEach((word) => {
      let notEqual = 0;

      if (visited.includes(word)) return;

      for (let i = 0; i < word.length; i++) {
        if (word[i] !== v[i]) notEqual++;
      }

      if (notEqual === 1) {
        queue.push([word, ++cnt]);
        visited.push(word);
      }
    });
  }
}
