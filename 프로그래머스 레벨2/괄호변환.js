function reverse(str) {
  return str
    .slice(1, str.length - 1)
    .split("")
    .map((c) => (c === "(" ? ")" : "("))
    .join("");
}

function solution(p) {
  if (p.length < 1) return "";

  let pivot = 0;
  let balance = 0;

  do {
    balance += p[pivot++] === "(" ? 1 : -1;
  } while (balance !== 0);
  let u = p.slice(0, pivot);
  let v = solution(p.slice(pivot, p.legnth));

  if (u[0] === "(" && u[u.length - 1] === ")") return u + v;
  else return "(" + v + ")" + reverse(u);
}
