import { myAssertEqual } from "../util/assert/myAssert";
import { convertCsvString } from '../../main/csv';

describe('convertCsvString', () => {
  const testData = [
    {
      input: 'aaa,"bbb",ccc,"ddd""",\r\n\r\ntest-1,"line1\r\n\r\nline3\r\nline4"\r\n',
      expectData: [['aaa', 'bbb', 'ccc', 'ddd"', ''], ['test-1', 'line1\r\n\r\nline3\r\nline4']],
    },
  ];
  it.each(testData)('test-1', ({ input, expectData }) => {
    const data = convertCsvString(input);
    myAssertEqual(expectData, data);
  });
});
