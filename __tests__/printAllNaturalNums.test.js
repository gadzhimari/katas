import printAllNaturalNums from '../src/printAllNaturalNums/printAllNaturalNums';

test('printAllNaturalNums', () => {
  expect(printAllNaturalNums(2)).toBe('1 2');
  expect(printAllNaturalNums(7)).toBe('1 2 3 4 5 6 7');
  expect(printAllNaturalNums(10)).toBe('1 2 3 4 5 6 7 8 9 10');
});
