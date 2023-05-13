import { distinctArray } from '../../index';
import { myAssertEqual } from '../util/assert/myAssert';

describe('distinctArray', () => {
  it('test1', () => {
    const array = [1, 2, 3, 5, 2, 3, 6, 5];
    const exp = [1, 2, 3, 5, 6];
    myAssertEqual(exp, distinctArray(array));
  });
});
