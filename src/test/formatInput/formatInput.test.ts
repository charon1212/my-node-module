import { formatInput } from '../../main/formatInput';
import { myAssertEqual } from '../util/assert/myAssert';

describe('convertCharRomanToHiragana.test', () => {
  const testData = [
    ['abcdefg', 'a%e%g', ['bcd', 'f']],
    ['abcdefg', 'a%e%gh', undefined],
  ] as const;
  it.each(testData)('test-1', (text, format, result) => {
    myAssertEqual(result, formatInput(text, format));
  });
});
