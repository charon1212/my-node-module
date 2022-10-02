export const timeMeasure = (proc: (complete: () => void) => {}) => {
  const hrStart = process.hrtime();
  return new Promise<{ s: number, ms: number }>((resolve, reject) => {
    proc(() => {
      const hrEnd = process.hrtime(hrStart);
      resolve({
        s: hrEnd[0],
        ms: hrEnd[1] / 1000000,
      });
    });
  });
};
