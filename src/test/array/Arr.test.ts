import { Arr } from "../../index";
import { myAssertEqual } from "../util/assert/myAssert";

describe('Arr', () => {
  it('test1', () => {
    myAssertEqual([], Arr());
  });
  it('test2', () => {
    myAssertEqual([0, 1, 2, 3], Arr(4));
  });
  it('test3', () => {
    myAssertEqual([2, 3, 4, 5, 6], Arr(2, 7));
  });
  it('test4', () => {
    myAssertEqual([5, 10, 15, 20, 25], Arr(5, 30, 5));
  });
});
