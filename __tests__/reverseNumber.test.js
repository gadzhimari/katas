import reverseNumber from '../src/reverseNumber/reverseNumber';

test('reverseNumber', () => {
  expect(reverseNumber(21)).toBe(12);
  expect(reverseNumber(134)).toBe(431);
  expect(reverseNumber(525)).toBe(525);
  expect(reverseNumber(892391)).toBe(193298);
});
