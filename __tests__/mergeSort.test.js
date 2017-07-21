import mergeSort from '../src/mergeSort/mergeSort';

test('mergeSort', () => {
  expect(mergeSort([], [])).toEqual([]);
  expect(mergeSort([1, 2], [])).toEqual([1, 2]);
  expect(mergeSort([1, 5, 10], [5, 6, 15, 100])).toEqual([1, 5, 5, 6, 10, 15, 100]);
})
