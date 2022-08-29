import { outerProd } from '../..';
import { myAssertEqual } from '../util/assert/myAssert';

describe('outerProd', () => {
  it('test1', () => {
    const act = outerProd();
    const exp = [] as unknown[];
    myAssertEqual(exp, act);
  });
  it('test2', () => {
    const act = outerProd(['a', 'b'], [1, 2]);
    const exp = [['a', 1], ['a', 2], ['b', 1], ['b', 2]];
    myAssertEqual(exp, act);
  });
  it('test3', () => {
    const act = outerProd(['a', 'b', 'c'], [1, 2, 3] as const, [{ id: 'id-1', name: 'name-1' }, { id: 'id-2', name: 'name-2' }], [true, false, null, undefined]);
    const exp = [] as unknown[];
    ['a', 'b', 'c'].forEach((a) =>
      [1, 2, 3].forEach((b) =>
        [{ id: 'id-1', name: 'name-1' }, { id: 'id-2', name: 'name-2' }].forEach((c) =>
          [true, false, null, undefined].forEach((d) =>
            exp.push([a, b, c, d])
          )
        )
      )
    );
    myAssertEqual(exp, act);
  });
});
