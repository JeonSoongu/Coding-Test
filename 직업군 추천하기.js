const table = [
  "SI JAVA JAVASCRIPT SQL PYTHON C#",
  "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++",
  "HARDWARE C C++ PYTHON JAVA JAVASCRIPT",
  "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP",
  "GAME C++ C# JAVASCRIPT C JAVA",
];

const languages = ["JAVA", "JAVASCRIPT"];
const preference = [7, 5];

function solution(table, languages, preference) {
  const langScore = Object.assign(
    languages.reduce((acc, cur, i) => {
      acc[cur] = preference[i];
      return acc;
    }, {})
  );

  const result = table
    .map((t) => t.split(" "))
    .reduce((acc, cur, tIndex) => {
      let [sum, count] = [0, 5];
      for (let i = 1; i <= 5; i++) {
        sum += langScore[cur[i]] ? langScore[cur[i]] * count : 0;
        --count;
      }
      acc[cur[0]] = sum;
      return acc;
    }, {});

  let arr = [];
  for (let key in result) {
    if (result[key] === Object.values(result).sort((a, b) => b - a)[0]) {
      arr.push(key);
    }
  }

  return arr.sort()[0];
}

console.log(solution(table, languages, preference));
