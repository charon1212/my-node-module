import { innerProd } from '../..';
import { myAssertEqual } from '../util/assert/myAssert';

describe('innerProd', () => {
  it('test1', () => {
    const act = innerProd();
    const exp = [] as unknown[];
    myAssertEqual(exp, act);
  });
  it('test2', () => {
    const act = innerProd(['a', 'b'], [1, 2]);
    const exp = [['a', 1], ['b', 2]];
    myAssertEqual(exp, act);
  });
  it('test3', () => {
    const act = innerProd(['a', 'b', 'c'], [1, 2, 3] as const, [{ id: 'id-1', name: 'name-1' }, { id: 'id-2', name: 'name-2' }], [true, false, null, undefined]);
    const exp = [
      ['a', 1, { id: 'id-1', name: 'name-1' }, true],
      ['b', 2, { id: 'id-2', name: 'name-2' }, false],
      ['c', 3, undefined, null],
      [undefined, undefined, undefined, undefined],
    ];
    myAssertEqual(exp, act);
  });
});
