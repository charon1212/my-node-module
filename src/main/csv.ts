
/**
 * CsvOptions.
 * divide char and escape char must be 1-char.
 */
export type ConvertCsvOptions = { divide: string, escape: string, newLine: string };

export const convertCsvString = (data: string | Buffer, options?: Partial<ConvertCsvOptions>): string[][] => {

  const opt: ConvertCsvOptions = {
    divide: options?.divide || ',', // デフォルトは「,」
    escape: options?.escape || '"', // デフォルトは「"」
    newLine: options?.newLine || '\r\n', // デフォルトは「\r\n」
  };
  const dataStr = typeof data === 'string' ? data : data.toString();
  if (opt.divide.length !== 1 || opt.escape.length !== 1) throw new Error('Divide-char and escape-char must be one-char.');

  const csvData = [] as string[][];
  let arr = [] as string[];
  let reading = '';
  let ln = 1;

  for (let line of dataStr.split(opt.newLine)) {
    const { result, cash } = importCsvLine({ line, cash: { arr, reading }, options: opt, ln });
    if (result) csvData.push(result);
    arr = cash.arr;
    reading = cash.reading;
    ln++;
  }
  if (arr.length !== 0 || reading) throw new Error('読み込み完了後にキャッシュが残っています。CSVデータが不正です。');

  return csvData;

};

const importCsvLine = (param: { line: string, cash: { arr: string[], reading: string }, options: ConvertCsvOptions, ln: number },): { result?: string[], cash: { arr: string[], reading: string } } => {

  const { line, cash, options, ln } = param;
  const { divide, escape, newLine } = options;
  const arr = cash.arr;
  let reading = cash.reading;

  if (!line && !reading) return { cash: { arr: [], reading: '' } }; // 空行で、キャッシュもない場合は、この行を無視するような戻り値とする。

  let flag = reading.length > 0; // escape文字列を読み取って読み込んでいる最中はtrue。
  let escaping = false; // 次の文字をエスケープする場合はtrue。
  let i = 0;
  while (i < line.length) {
    if (line[i] === divide && !flag) { // 分割文字に遭遇
      arr.push(reading);
      reading = '';
      i++;
      continue;
    } else if (line[i] === escape && !escaping) {
      if (flag) { // 読み込み中にescapeに到達するのは、次の文字をエスケープするか、読み込み終了点に到達するかの2択。
        if (line[i + 1] === escape) {
          escaping = true; i++; continue;
        } else if (line[i + 1] === undefined || line[i + 1] === divide) {
          flag = false; i++; continue;
        } else {
          throw new Error(`無効なescape-sequence「${escape}」を読み込みました。[occured at line:${ln}, char:${i + 1}]`);
        }
      } else { // 読み込み外でescapeに到達するのは、divideの次だけのはず。readingをチェックする。
        if (!reading) {
          flag = true; i++; continue;
        } else {
          throw new Error(`無効なescape-sequence「${escape}」を読み込みました。[occured at line:${ln}, char:${i + 1}]`);
        }
      }
    }
    // 通常通り、次の文字を読み込む。
    reading += line[i];
    escaping = false;
    i++;
  }
  if (flag) {
    return { cash: { arr, reading: reading + newLine }, };
  } else {
    arr.push(reading);
    return { result: arr, cash: { arr: [], reading: '' }, };
  }

};
