import { binarySearch } from '../../index';

describe('binarySearch', () => {
  it('binarySearch1', () => {
    expect(binarySearch([1, 2, 3, 4, 5], (t) => t <= -1)).toBe(-1);
    expect(binarySearch([1, 2, 3, 4, 5], (t) => t <= 0)).toBe(-1);
    expect(binarySearch([1, 2, 3, 4, 5], (t) => t <= 1)).toBe(0);
    expect(binarySearch([1, 2, 3, 4, 5], (t) => t <= 2)).toBe(1);
    expect(binarySearch([1, 2, 3, 4, 5], (t) => t <= 3)).toBe(2);
    expect(binarySearch([1, 2, 3, 4, 5], (t) => t <= 4)).toBe(3);
    expect(binarySearch([1, 2, 3, 4, 5], (t) => t <= 5)).toBe(4);
    expect(binarySearch([1, 2, 3, 4, 5], (t) => t <= 6)).toBe(4);

    expect(binarySearch([1, 2, 3, 4, 5], (t) => t < 0)).toBe(-1);
    expect(binarySearch([1, 2, 3, 4, 5], (t) => t < 1)).toBe(-1);
    expect(binarySearch([1, 2, 3, 4, 5], (t) => t < 2)).toBe(0);
    expect(binarySearch([1, 2, 3, 4, 5], (t) => t < 3)).toBe(1);
    expect(binarySearch([1, 2, 3, 4, 5], (t) => t < 4)).toBe(2);
    expect(binarySearch([1, 2, 3, 4, 5], (t) => t < 5)).toBe(3);
    expect(binarySearch([1, 2, 3, 4, 5], (t) => t < 6)).toBe(4);
    expect(binarySearch([1, 2, 3, 4, 5], (t) => t < 7)).toBe(4);

    const arr2 = ['aaa', 'aab', 'aac', 'aba', 'abb', 'abc', 'aca', 'acb', 'acc'];
    expect(binarySearch(arr2, (t) => t < 'aaa')).toBe(-1);
    expect(binarySearch(arr2, (t) => t < 'aab')).toBe(0);
    expect(binarySearch(arr2, (t) => t < 'aac')).toBe(1);
    expect(binarySearch(arr2, (t) => t < 'aa')).toBe(-1);
    expect(binarySearch(arr2, (t) => t < 'ab')).toBe(2);
    expect(binarySearch(arr2, (t) => t < 'ac')).toBe(5);

  });
});
