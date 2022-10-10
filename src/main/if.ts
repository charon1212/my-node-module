export type IfResult<T, F> = { condition: true, value: T, } | { condition: false, value: F, };
export const IF = <T, F>(condition: boolean, func: { t: () => T, f: () => F }): IfResult<T, F> => {
  if (condition) return { condition, value: func.t() };
  else return { condition, value: func.f() };
};
