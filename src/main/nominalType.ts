declare const __brand_nominal_type: unique symbol;

/**
 * example:
 *
 * ```ts
 * // definition
 * type T1 = NominalType<'sample-t1', 'id1' | 'id2' | 'id3'>;
 * const createT1 = createNominalType<T1>();
 *
 * // usage
 * const t1: T1 = createT1('id2');
 * ```
 */
export type NominalType<Key extends string, Type> = Type & {
  readonly [__brand_nominal_type]: Key,
};
export const createNominalType = <N extends NominalType<any, any>>() => (t: Omit<N, typeof __brand_nominal_type>) => t as N;
