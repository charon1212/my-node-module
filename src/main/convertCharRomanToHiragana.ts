export const convertCharRomanToHiragana = (value: string) => {
  let r = '', m = '';
  for (let i = 0; i < value.length; i++) {
    const result = converter(value[i], m);
    r += result.r;
    m = result.m;
  }
  return r + m;
};

type RomanMap = { key: string, kana: string[], y?: string[], w?: string[], h?: string[], s?: string[] };
type BoinIndex =
  | 0  // a
  | 1  // i
  | 2  // u
  | 3  // e
  | 4; // o

const romanMaps: RomanMap[] = [
  { key: 'y', kana: ['や', 'い', 'ゆ', 'いぇ', 'よ'], y: ['', '', '', '', ''], },
  { key: 'w', kana: ['わ', 'うぃ', 'う', 'うぇ', 'を'], y: ['', 'ゐ', '', 'ゑ', ''], h: ['うぁ', 'うぃ', 'う', 'うぇ', 'うぉ'], },
  { key: 'l', kana: ['ぁ', 'ぃ', 'ぅ', 'ぇ', 'ぉ'], y: ['ゃ', 'ぃ', 'ゅ', 'ぇ', 'ょ'], w: ['ゎ', '', '', '', ''], },
  { key: 'x', kana: ['ぁ', 'ぃ', 'ぅ', 'ぇ', 'ぉ'], y: ['ゃ', 'ぃ', 'ゅ', 'ぇ', 'ょ'], w: ['ゎ', '', '', '', ''], },
  { key: 'k', kana: ['か', 'き', 'く', 'け', 'こ'], y: ['きゃ', 'きぃ', 'きゅ', 'きぇ', 'きょ'], w: ['くぁ', '', '', '', ''], },
  { key: 'c', kana: ['か', 'し', 'く', 'せ', 'こ'], y: ['ちゃ', 'ちぃ', 'ちゅ', 'ちぇ', 'ちょ'], h: ['ちゃ', 'ち', 'ちゅ', 'ちぇ', 'ちょ'], },
  { key: 'q', kana: ['くぁ', 'くぃ', 'く', 'くぇ', 'くぉ'], y: ['くゃ', 'くぃ', 'くゅ', 'くぇ', 'くょ'], w: ['くぁ', 'くぃ', 'くぅ', 'くぇ', 'くぉ'], },
  { key: 'g', kana: ['が', 'ぎ', 'ぐ', 'げ', 'ご'], y: ['ぎゃ', 'ぎぃ', 'ぎゅ', 'ぎぇ', 'ぎょ'], w: ['ぐぁ', 'ぐぃ', 'ぐぅ', 'ぐぇ', 'ぐぉ'], },
  { key: 's', kana: ['さ', 'し', 'す', 'せ', 'そ'], y: ['しゃ', 'しぃ', 'しゅ', 'しぇ', 'しょ'], w: ['すぁ', 'すぃ', 'すぅ', 'すぇ', 'すぉ'], h: ['しゃ', 'し', 'しゅ', 'しぇ', 'しょ'], },
  { key: 'z', kana: ['ざ', 'じ', 'ず', 'ぜ', 'ぞ'], y: ['じゃ', 'じぃ', 'じゅ', 'じぇ', 'じょ'], },
  { key: 'j', kana: ['じゃ', 'じ', 'じゅ', 'じぇ', 'じょ'], y: ['じゃ', 'じぃ', 'じゅ', 'じぇ', 'じょ'], },
  { key: 't', kana: ['た', 'ち', 'つ', 'て', 'と'], y: ['ちゃ', 'ちぃ', 'ちゅ', 'ちぇ', 'ちょ'], w: ['とぁ', 'とぃ', 'とぅ', 'とぇ', 'とぉ'], h: ['てゃ', 'てぃ', 'てゅ', 'てぇ', 'てょ'], s: ['つぁ', 'つぃ', 'つ', 'つぇ', 'つぉ'] },
  { key: 'd', kana: ['だ', 'ぢ', 'づ', 'で', 'ど'], y: ['ぢゃ', 'ぢぃ', 'ぢゅ', 'ぢぇ', 'ぢょ'], w: ['どぁ', 'どぃ', 'どぅ', 'どぇ', 'どぉ'], h: ['でゃ', 'でぃ', 'でゅ', 'でぇ', 'でょ'], },
  { key: 'n', kana: ['な', 'に', 'ぬ', 'ね', 'の'], y: ['にゃ', 'にぃ', 'にゅ', 'にぇ', 'にょ'], },
  { key: 'h', kana: ['は', 'ひ', 'ふ', 'へ', 'ほ'], y: ['ひゃ', 'ひぃ', 'ひゅ', 'ひぇ', 'ひょ'], },
  { key: 'f', kana: ['ふぁ', 'ふぃ', 'ふ', 'ふぇ', 'ふぉ'], y: ['ふゃ', 'ふぃ', 'ふゅ', 'ふぇ', 'ふょ'], w: ['ふぁ', 'ふぃ', 'ふぅ', 'ふぇ', 'ふぉ'], },
  { key: 'b', kana: ['ば', 'び', 'ぶ', 'べ', 'ぼ'], y: ['びゃ', 'びぃ', 'びゅ', 'びぇ', 'びょ'], },
  { key: 'p', kana: ['ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ'], y: ['ぴゃ', 'ぴぃ', 'ぴゅ', 'ぴぇ', 'ぴょ'], },
  { key: 'm', kana: ['ま', 'み', 'む', 'め', 'も'], y: ['みゃ', 'みぃ', 'みゅ', 'みぇ', 'みょ'], },
  { key: 'r', kana: ['ら', 'り', 'る', 'れ', 'ろ'], y: ['りゃ', 'りぃ', 'りゅ', 'りぇ', 'りょ'], },
];
const boinKana = ['あ', 'い', 'う', 'え', 'お',];
const getBoin = (char: string): BoinIndex | -1 => char === 'a' ? 0 : char === 'i' ? 1 : char === 'u' ? 2 : char === 'e' ? 3 : char === 'o' ? 4 : -1;
const getKana = (siin: string, boin: BoinIndex) => romanMaps.find((i) => i.key === siin)?.kana[boin];

/**
 * 1文字ずつローマ字から平仮名に変換する。
 * 引数のcは1文字を指定すること。
 * mはmemoryで、1文字前のconverter()実行結果の戻り値のmをそのまま指定すること。
 *
 * @example
 *
 * ```ts
 * converter('a', ''); // { r: 'あ', m: '' }
 * converter('b', ''); // { r: '', m: 'b' }
 * converter('c', 'b'); // { r: '', m: 'bc' }
 * converter('d', 'bc'); // { r: '', m: 'bcd' }
 * converter('e', 'bcd'); // { r: 'bcで', m: '' }
 * ```
 */
const converter = (c: string, m: string): { r: string, m: string } => {

  let r: string = '';
  const b = getBoin(c);
  const ml = m.length;
  const m1 = m[ml - 1]; // 最後から1文字目
  const m2 = m[ml - 2]; // 最後から2文字目
  const m3 = m[ml - 3]; // 最後から3文字目

  if (b === -1) { // i文字目がa,i,u,e,o以外
    if (c === 'n') {
      if (m.endsWith('n')) return { r: m.slice(0, ml - 1) + 'ん', m: '' };
      else return { r: '', m: m + c };
    }
    if (m.endsWith('n')) return { r: m.slice(0, ml - 1) + 'ん', m: c };
    else return { r: '', m: m + c };
  } else { // cが母音
    if (b === 2) { // cがuの場合、先に「っ」の処理をかませる。
      // めちゃくちゃJavaScriptチックな書き方。ifの中身は、lts,lt,xtについてループし、mがその文字で終わってる場合、rとmに変換をかませてtrueを返却する。
      // ループ全体からtrueが帰ってきたら、そのまま変換したr,mを関数の戻り値として戻す。
      // m,rの変換は、「{c='u', m='wwsxt'} => {r='wwsっ', m=''}  ※この時のvはxt」のような処理をしてる。
      if (['lts', 'lt', 'xt'].some((v) => (m.endsWith(v) && (r = m.slice(0, ml - v.length) + 'っ', m = '', true)))) return { r, m };
    }
    if ([{ v: 'y', f: (rm?: RomanMap) => rm?.y }, { v: 'w', f: (rm?: RomanMap) => rm?.w }, { v: 'h', f: (rm?: RomanMap) => rm?.h }, { v: 's', f: (rm?: RomanMap) => rm?.s },]
      .some(({ v, f }) => {
        if (m1 !== v) return false;
        if (m === v) {
          r = getKana(v, b) || '';
          m = '';
          return true;
        }
        const roman = f(romanMaps.find((i) => i.key === m2));
        if (roman && roman[b]) { // v='y'だと、m='krsy' や m='wwkky'等の場合。
          r = (m3 === m2 ? (m.slice(0, ml - 3) + 'っ') : m.slice(0, ml - 2)) + roman[b]; // m2=m3なら、「っ」の変換をいれる。
          m = '';
        } else { // v='y'だと、m='あy'や(m='wy'でboin=0)等の場合
          r = m.slice(0, ml - 1) + getKana(v, b);
          m = '';
        }
        return true;
      })) return { r, m };
    const roman = romanMaps.find((i) => i.key === m1)?.kana;
    if (roman && roman[b]) {
      r = (m2 === m1 ? (m.slice(0, ml - 2) + 'っ') : m.slice(0, ml - 1)) + roman[b]; // m1=m2なら、「っ」の変換をいれる。
      m = '';
    } else {
      r = m + boinKana[b];
      m = '';
    }
    return { r, m };
  }
};
