function solution(msg) {
  var answer = [];
  let newWord = "";

  const alphabet = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10,
    K: 11,
    L: 12,
    M: 13,
    N: 14,
    O: 15,
    P: 16,
    Q: 17,
    R: 18,
    S: 19,
    T: 20,
    U: 21,
    V: 22,
    W: 23,
    X: 24,
    Y: 25,
    Z: 26,
  };

  const lastWord = msg.split("").reduce((acc, curr, idx) => {
    newWord = acc + curr;

    if (alphabet[newWord] >= 1) {
      return acc + curr;
    } else {
      alphabet[newWord] = Math.max.apply(null, Object.values(alphabet)) + 1;
    }

    if (alphabet[acc] >= 1) answer.push(alphabet[acc]);
    return curr;
  });

  answer.push(alphabet[lastWord]);
  return answer;
}
