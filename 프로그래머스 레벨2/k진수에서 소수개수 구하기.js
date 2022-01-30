function solution(n, k) {
  const radix = n.toString(k);
  const primeNumArray = radix.split("0").filter((x) => Number(x) > 1);

  function isPrimeNumber(primeNumArray) {
    for (let i = 0; i < primeNumArray.length; i++) {
      const end = Math.sqrt(parseInt(primeNumArray[i]));
      for (let j = 2; j <= end; j++) {
        if (parseInt(primeNumArray[i]) % j === 0) return false;
      }
      return true;
    }
  }
  let num = 0;
  for (let i = 0; i < primeNumArray.length; i++) {
    if (isPrimeNumber(primeNumArray)) {
      num++;
    }
  }
  return num;
}
