type OuterProd<T extends (readonly unknown[])[]> = OuterProdTuple<T>[];
type OuterProdTuple<T extends (readonly unknown[])[]> = T extends [infer P extends (readonly unknown[]), ...infer Q extends (readonly unknown[])[]] ? [P[number], ...OuterProdTuple<Q>] : [];

/**
 * Create array's outer product.  
 * e.g. outerProd(['a','b'], [1,2]) returns [['a',1],['a',2],['b',1],['b',2]].
 * @param arr Source array of outer product.
 * @returns Outer product result.
 */
export const outerProd = <T extends (readonly unknown[])[]>(...arr: T): OuterProd<T> => {
  if (arr.length === 0) return [];
  if (arr.length === 1) return arr[0].map((a) => [a]) as any;
  const first = arr.shift()!;
  const rest = outerProd(...arr);
  const result = [] as any;
  first.forEach((f) => rest.forEach((r) => {
    result.push([f, ...r]);
  }));
  return result;
};
