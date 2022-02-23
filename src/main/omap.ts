type Mapper<T, NV> = (key: keyof T, value: T[keyof T]) => NV;
/**
 * Mapping object to same key object.
 *
 * ```typescript
 * const newObject = omap({a: '1', b: '2', c: '3'}, (k,v) => k + v);   // => {a: 'a1', b: 'b2', c: 'c3'}
 * ```
 *
 * @param obj Mapped object.
 * @param map Mapping function. First arg is the key obj, second arg is the value of obj.
 * @template T The type of obj.
 * @template NewValue The type of return value of map, that is, new object's value type.
 * @returns Same-key object whose value is return value of map.
 */
export const omap = <T, NewValue>(obj: T, map: Mapper<T, NewValue>): { [key in keyof T]: NewValue } => {
  const result = {} as any;
  for (let key in obj) result[key] = map(key, obj[key]);
  return result;
};
