import * as iconv_lite from 'iconv-lite';

/**
 * convert sjis-encoded string to utf-8-encoded string.
 *
 * @param sjis sjis-encoded string.
 */
export const decodeShiftJIS = (sjis: Buffer): string => {
  return iconv_lite.decode(sjis, 'Shift_JIS');
};
