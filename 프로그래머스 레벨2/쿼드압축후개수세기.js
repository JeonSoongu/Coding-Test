function solution(arr) {
  const result = [0, 0];

  const compress = (arr, n) => {
    const value = arr[0][0];
    if (n <= 1) {
      result[value] += 1;
      return;
    }
    const sum = arr.reduce((sum, row) => sum + row.reduce((a, b) => a + b), 0);

    if (!sum || sum === n * n) {
      result[value] += 1;
      return;
    }

    const divide1 = arr.slice(0, n / 2);
    const divide2 = arr.slice(n / 2);

    compress(
      divide1.map((values) => values.slice(0, n / 2)),
      n / 2
    );
    compress(
      divide1.map((values) => values.slice(n / 2)),
      n / 2
    );
    compress(
      divide2.map((values) => values.slice(0, n / 2)),
      n / 2
    );
    compress(
      divide2.map((values) => values.slice(n / 2)),
      n / 2
    );
  };

  compress(arr, arr.length);
  return result;
}
