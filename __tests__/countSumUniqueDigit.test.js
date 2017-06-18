import countSumUniqueDigit from '../src/countSumUniqueDigit/countSumUniqueDigit';

test('countSumUniqueDigit', () => {
  expect(countSumUniqueDigit(3, 2)).toBe(0);
  expect(countSumUniqueDigit(3, 3)).toBe(1);
  expect(countSumUniqueDigit(3, 6)).toBe(7);
});
