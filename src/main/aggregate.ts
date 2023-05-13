/**
 * 配列を特定のキーに従って集約する。
 * 例えば、8桁のID文字列の配列を先頭2桁でグルーピングできる。
 *
 * ```ts
 * const agg = aggregateByKey(['11-12345', '11-23456', '23-12345', '34-12345'], (str) => str.substring(0,2));
 * console.log(agg); // [ {key: '11', values: ['11-12345', '11-23456']}, {key: '23', values: ['23-12345']}, {key: '34', values: ['34-12345']} ]
 * ```
 *
 * @param list 元になる配列。
 * @param getKey グループ化のキー
 * @param compareKey グループ化キーの等値判定。省略した場合、通常の比較(===)を使う。
 * @returns グループ化のキーに関する配列。
 */

export const aggregateByKey = <Key, O>(list: O[], getKey: (o: O) => Key, compareKey?: (k1: Key, k2: Key) => boolean): { key: Key, values: O[] }[] => {
  const result: { key: Key, values: O[] }[] = [];
  for (let item of list) {
    const k = getKey(item);
    const f = result.find(({ key }) => compareKey ? compareKey(key, k) : key === k);
    if (f) f.values.push(item);
    else result.push({ key: k, values: [item] });
  }
  return result;
};

/**
 * 配列から重複した値を削除する。
 * @param arr 元の配列。
 * @param compare 配列要素の比較方法。省略すると、array.includesを利用するため、通常の比較(===)が利用される。
 */
export const distinctArray = <T>(arr: T[], compare?: (t1: T, t2: T) => boolean): T[] => {
  if (compare) return arr.reduce((p: T[], c) => p.some((t) => compare(t, c)) ? p : [...p, c], []);
  else return arr.reduce((p: T[], c) => p.includes(c) ? p : [...p, c], []);
};
