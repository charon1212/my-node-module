const a = ['ff', 'df', 'bf', '9f', '7f', '5f', '3f', '1f', '00',];
export const getHtmlColor = (num: number) => {
  const [r, g, b] = get3divNumber(num);
  return `#${a[r]}${a[g]}${a[b]}`;
};
const get3divNumber = (num: number): [number, number, number] => {
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += i + 1;
    if (num >= sum) {
      num -= sum;
      continue;
    }
    // num < sum
    for (let j = 0; j <= i; j++) {
      if (num > j) {
        num -= j + 1;
        continue;
      }
      return [i - j, j - num, num];
    }
  }
  return [0, 0, 0];
};
