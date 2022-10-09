import { pipe, p_sum } from '../../index';

it('pipe1', () => {
  expect(
    pipe(5)(
      (x) => x * x,
      (x) => x + 1,
    )
  ).toBe(26);
});

it('pipe2', () => {
  expect(
    pipe([1, 5, 9])(
      (x) => x.map((v) => v + 2),
      p_sum,
    )
  ).toBe(21);
});
