export class MyDate {
  /** private field */
  private t: number;
  private date: Date;
  /** constructor */
  constructor(t?: number | Date) {
    if (typeof t === 'number') {
      this.t = t;
    } else if (typeof t === 'object') {
      this.t = t.getTime();
    } else {
      this.t = Date.now();
    }
    this.date = new Date(this.t);
  }
  get S() { return this.date.getMilliseconds(); }
  get s() { return this.date.getSeconds(); }
  get m() { return this.date.getMinutes(); }
  get h() { return this.date.getHours(); }
  get d() { return this.date.getDate(); }
  get M() { return this.date.getMonth(); }
  get y() { return this.date.getFullYear(); }
  get dayOfWeek() { return this.date.getDay(); }
  get utc_S() { return this.date.getUTCMilliseconds(); }
  get utc_s() { return this.date.getUTCSeconds(); }
  get utc_m() { return this.date.getUTCMinutes(); }
  get utc_h() { return this.date.getUTCHours(); }
  get utc_d() { return this.date.getUTCDate(); }
  get utc_M() { return this.date.getUTCMonth(); }
  get utc_y() { return this.date.getUTCFullYear(); }
  get utc_dayOfWeek() { return this.date.getUTCDay(); }
  get Date() { return this.date; }

  format(format: string, utc?: boolean) {
    return utc ?
      format
        .replace(/yyyy/g, `${this.utc_y}`.padStart(4, '0'))
        .replace(/MM/g, `${this.utc_M + 1}`.padStart(2, '0'))
        .replace(/dd/g, `${this.utc_d}`.padStart(2, '0'))
        .replace(/hh/g, `${this.utc_h}`.padStart(2, '0'))
        .replace(/mm/g, `${this.utc_m}`.padStart(2, '0'))
        .replace(/ss/g, `${this.utc_s}`.padStart(2, '0'))
        .replace(/SSS/g, `${this.utc_S}`.padStart(3, '0'))
        .replace(/y/g, `${this.utc_y}`)
        .replace(/M/g, `${this.utc_M + 1}`)
        .replace(/d/g, `${this.utc_d}`)
        .replace(/h/g, `${this.utc_h}`)
        .replace(/m/g, `${this.utc_m}`)
        .replace(/s/g, `${this.utc_s}`)
        .replace(/S/g, `${this.utc_S}`)
      :
      format
        .replace(/yyyy/g, `${this.y}`.padStart(4, '0'))
        .replace(/MM/g, `${this.M + 1}`.padStart(2, '0'))
        .replace(/dd/g, `${this.d}`.padStart(2, '0'))
        .replace(/hh/g, `${this.h}`.padStart(2, '0'))
        .replace(/mm/g, `${this.m}`.padStart(2, '0'))
        .replace(/ss/g, `${this.s}`.padStart(2, '0'))
        .replace(/SSS/g, `${this.S}`.padStart(3, '0'))
        .replace(/y/g, `${this.y}`)
        .replace(/M/g, `${this.M + 1}`)
        .replace(/d/g, `${this.d}`)
        .replace(/h/g, `${this.h}`)
        .replace(/m/g, `${this.m}`)
        .replace(/s/g, `${this.s}`)
        .replace(/S/g, `${this.S}`)
  };

  static ms1s = 1000;
  static ms1m = 60 * 1000;
  static ms1h = 60 * 60 * 1000;
  static ms1d = 24 * 60 * 60 * 1000;
  static ms1w = 7 * 24 * 60 * 60 * 1000;
  static ms1y = 365 * 24 * 60 * 60 * 1000;

};
