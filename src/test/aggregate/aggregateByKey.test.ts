import { aggregateByKey } from '../../index';
import { myAssertEqual } from '../util/assert/myAssert';

describe('aggregateByKey', () => {
  it('test1', () => {
    const array = ['11-12345', '11-23456', '23-12345', '34-12345'];
    const exp = [
      { key: '11', values: ['11-12345', '11-23456'] },
      { key: '23', values: ['23-12345'] },
      { key: '34', values: ['34-12345'] },
    ]
    myAssertEqual(exp, aggregateByKey(array, (str) => str.substring(0, 2)));
  });
});
