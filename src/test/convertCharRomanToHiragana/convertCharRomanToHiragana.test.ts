import { convertCharRomanToHiragana } from '../../main/convertCharRomanToHiragana';

describe('convertCharRomanToHiragana.test', () => {
  const testData = [
    ['aiueo', 'あいうえお'],
    ['kakikukeko', 'かきくけこ'],
    [
      'haruhaakebono yauyausirokunariyukuyamagihasukosiakaritemurasakidatitarukumonohosokutanabikitaru',
      'はるはあけぼの やうやうしろくなりゆくやまぎはすこしあかりてむらさきだちたるくものほそくたなびきたる'
    ],
    ['nyawwnyiwwnyuwwnyewwnyo', 'にゃwwにぃwwにゅwwにぇwwにょ'],
  ];
  it.each(testData)('test-1', (roman, hiragana) => {
    expect(convertCharRomanToHiragana(roman)).toBe(hiragana);
  });
});
