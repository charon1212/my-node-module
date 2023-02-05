/**
 * Read text at specific format.
 *
 * @param text Target text.
 * @param format Given format. Use % for arbitrary string.
 * @returns If text don't match format, return undefined. Otherwise, return string array of %.
 * @example
 *
 * ```ts
 * formatInput('abcdefg', 'a%e%g'); // ['bcd', 'f']
 * formatInput('abcdefg', 'a%e%gh'); // undefined
 * ```
 */
export const formatInput = (text: string, format: string) => {
  return formatInputRecursive(text, format, []);
};

const formatInputRecursive = (text: string, format: string, arr: string[]): string[] | undefined => {
  if (format === '') return text === '' ? arr : undefined;
  if (format[0] !== '%') return format[0] === text[0] ? formatInputRecursive(text.slice(1), format.slice(1), arr) : undefined;
  // ここまで来ていれば、formatの1文字目は%。
  if (format[1] === '%') return undefined;
  let index = text.indexOf(format[1]);
  while (index !== -1) {
    const arr2 = [...arr, text.substring(0, index)];
    const a = formatInputRecursive(text.slice(index), format.slice(1), arr2);
    if (a) return a;
    index = text.indexOf(format[1], index + 1);
  }
  return undefined;
};
