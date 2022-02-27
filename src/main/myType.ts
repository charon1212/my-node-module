// 参考：https://zenn.dev/kerukukku1/articles/b66844ba02bc8c
type Tup<N extends number, Arr extends unknown[] = []> = Arr['length'] extends N ? Arr : Tup<N, [...Arr, unknown]>;
export type AddNum<A extends number, B extends number> = [...Tup<A>, ...Tup<B>]['length'];
export type SubNum<A extends number, B extends number> = Tup<A> extends [...Tup<B>, ...infer R] ? R['length'] : never;


/**
 * Expand tuple type into union type.
 *
 * e.g.
 *
 * ```typescript
 * type Expanded = ExpandTuple<['a', 2, false, {c: number}, number[] ]> // 'a' | 2 | false | {c: number} | number[]
 * ```
*/
export type ExpandTuple<T extends any[]> = T extends [] ? never : T extends [infer P, ...infer Q] ? P | ExpandTuple<Q> : never;
