import printAllIndices from '../src/printAllIndices/printAllIndices';

test('printAllIndices', () => {
  expect(printAllIndices([])).toEqual([]);
  expect(printAllIndices(['abc', 'et', 'bac', 'd', 'acb', 'et'])).toEqual([[0, 2, 4], [1, 5]]);
  expect(printAllIndices(['abc', 'xyz', 'q', 'ash', 'andrew', 'brr'])).toEqual([]);
});
