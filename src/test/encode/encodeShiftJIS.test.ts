import * as fs from 'fs';
import { decodeShiftJIS } from '../..';

describe('encodeShiftJIS', () => {
  it('test-1', () => {
    const exp = 'Shift-JIS encoded text. SJISエンコードのテキスト。';
    const buf = fs.readFileSync('src/test/encode/sjis.txt');
    const utf8 = decodeShiftJIS(buf);
    expect(buf.toString()).not.toBe(exp);
    expect(utf8).toBe(exp);
  });
});
