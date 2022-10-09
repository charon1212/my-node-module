/**
 * example:
 *
 * ```ts
 * const [put, complete] = getOutputProgress();
 * setTimeout(() => put('One'), 1000);
 * setTimeout(() => put('Two'), 2000);
 * setTimeout(() => put('Three'), 3000);
 * setTimeout(() => put('Four'), 4000);
 * setTimeout(() => complete(), 5000);
 * ```
 */
export const getOutputProgress = (out: NodeJS.WriteStream = process.stdout): [put: (text: string) => void, complete: () => void] => {
  return [
    (text: string) => out.write(`\x1b[2K${text}\r`),
    () => out.write('\n'),
  ];
};

/**
 * example:
 *
 * ```ts
 * const [put, complete] = getOutputDefaultPercentProgress();
 * setTimeout(() => put(0.25), 1000);
 * setTimeout(() => put(0.5), 2000);
 * setTimeout(() => put(0.75), 3000);
 * setTimeout(() => put(1), 4000);
 * setTimeout(() => complete(), 5000);
 * ```
 */
export const getOutputDefaultPercentProgress = (countSquare: number = 20, out: NodeJS.WriteStream = process.stdout): [put: (percent: number) => void, complete: () => void] => {
  const [progress, complete] = getOutputProgress(out);
  return [
    (percent: number) => {
      const complete = Math.floor(countSquare * percent);
      const uncomplete = countSquare - complete;
      const roundPercent = Math.round(100 * percent);
      progress(`[${'o'.repeat(complete)}${'.'.repeat(uncomplete)}]  ${roundPercent}%`);
    },
    complete
  ];
};
