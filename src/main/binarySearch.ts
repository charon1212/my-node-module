/**
 * 二分探索を実行する。
 *
 * ```ts
 * binarySearch([1,2,3,4,5], (t) => t <= 3)  // 2
 * binarySearch([1,2,3,4,5], (t) => t < 3)  // 1
 * binarySearch([1,2,3,4,5], (t) => t > 3)  // !!未定義!!　…　第1引数はcompareに対して、sortしてください。降順ソートは認められません。
 * binarySearch([5,10,15,20,25,30], (t) => t <= 23)  // 3
 * binarySearch([5,10,15,20,25,30], (t) => t <= 0)  // -1
 * ```
 *
 * @param arr 対象の配列。compareで指定する比較について昇順でソート済みであるとする。つまり、arrの各要素にcompareを適用した時、`[true, true,...,true,false,false,...,false]`といったように、左側にtrue、右側にfalseが寄るようにソートする。
 * @param compare 比較方法を指定する。
 * @returns compare(arr[i])がtrueとなるiのうち最大の値を返却する。compare(arr[0])の場合は-1を返却する。
 */
export const binarySearch = <T>(arr: T[], compare: (t: T) => boolean) => {
  if (arr.length === 0) return -1;
  let iMin = 0;
  let iMax = arr.length - 1;
  while (iMax - iMin > 1) {
    const iMid = Math.floor((iMin + iMax) / 2);
    if (compare(arr[iMid])) {
      iMin = iMid;
    } else {
      iMax = iMid;
    }
  }
  return compare(arr[iMin]) ? compare(arr[iMax]) ? iMax : iMin : -1;
};
