import curry from '../src/curry/curry';

test('curry', () => {
  const abc = (a, b, c) => [a, b, c];
  const curried = curry(abc);

  expect(curried(1)(2)(3)).toEqual([1, 2, 3]);
  expect(curried(1, 2)(3)).toEqual([1, 2, 3]);
  expect(curried(1, 2, 3)).toEqual([1, 2, 3]);
});
