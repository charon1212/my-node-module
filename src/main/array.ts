type OuterProd<T extends (readonly unknown[])[]> = number extends T['length'] ? T : OuterProdTuple<T>[];
type OuterProdTuple<T extends (readonly unknown[])[]> = T extends [infer P extends (readonly unknown[]), ...infer Q extends (readonly unknown[])[]] ? [P[number], ...OuterProdTuple<Q>] : [];

/**
 * Create array's outer product.  
 * e.g. outerProd(['a','b'], [1,2]) returns [['a',1],['a',2],['b',1],['b',2]].
 * @param arr Source array of outer product.
 * @returns Outer product result.
 */
export const outerProd = <T extends (readonly unknown[])[]>(...arr: T): OuterProd<T> => {
  if (arr.length === 0) return [] as any;
  if (arr.length === 1) return arr[0].map((a) => [a]) as any;
  const first = arr.shift()!;
  const rest = outerProd(...arr);
  const result = [] as any;
  first.forEach((f) => rest.forEach((r) => {
    result.push([f, ...r]);
  }));
  return result;
};

type InnerProd<T extends (readonly unknown[])[]> = number extends T['length'] ? T : InnerProdTuple<T>[];
type InnerProdTuple<T extends (readonly unknown[])[]> = T extends [infer P extends (readonly unknown[]), ...infer Q extends (readonly unknown[])[]] ? [P[number], ...InnerProdTuple<Q>] : [];

/**
 * Create array's inner product.  
 * e.g. innerProd(['a','b'], [1,2], [true,false]) returns [['a',1,true],['b',2,false]].
 *
 * This method DO NOT checks that all array's length are same each other. Return array's length is maximum size of input array.
 * @param arr Source array of inner product.
 * @returns Inner product result.
 */
export const innerProd = <T extends (readonly unknown[])[]>(...arr: T): InnerProd<T> => {
  if (arr.length === 0) return [] as any;
  const n = Math.max(...arr.map((a) => a.length));
  const result = [] as any;
  for (let i = 0; i < n; i++) result.push(arr.map((a) => a[i]));
  return result;
};

/**
 * Create number array.
 *
 * - Arr(4) => [0,1,2,3]
 * - Arr(2,7) => [2,3,4,5,6]
 * - Arr(5,30,5) => [5,10,15,20,25]
 */
export const Arr = (start?: number, last?: number, step?: number): number[] => {
  if (start === undefined) return [];
  if (last === undefined) return [...Array(start)].map((_, i) => i);
  if (step === undefined) return [...Array(last - start)].map((_, i) => i + start);
  const arr = [] as number[];
  for (let i = start; i < last; i += step)arr.push(i);
  return arr;
};
