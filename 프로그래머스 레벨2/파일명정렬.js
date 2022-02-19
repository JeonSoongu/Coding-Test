function solution(files) {
  let answer = [];
  const regex = /[a-zA-Z .-]+|\d{1,5}/g;

  files.sort((x, y) => {
    let str1 = x.match(regex)[0].toLowerCase();
    let str2 = y.match(regex)[0].toLowerCase();
    return str1 < str2
      ? -1
      : str1 > str2
      ? 1
      : x.match(regex)[1] - y.match(regex)[1];
  });

  return files;
}
