import binarySearch from '../src/binarySearch/binarySearch';

test('binarySearch', () => {
  expect(binarySearch([], 1)).toBeNull();
  expect(binarySearch([1, 3, 5, 7, 9], -1)).toBeNull();
  expect(binarySearch([1, 3, 5, 7, 9], 3)).toBe(1);
});
