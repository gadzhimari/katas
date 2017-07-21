import mergeSort from '../src/mergeSort/mergeSort';

test('mergeSort', () => {
  expect(mergeSort([])).toEqual([]);
  expect(mergeSort([2, 1])).toEqual([1, 2]);
  expect(mergeSort([7, 2, 5, 10, 1])).toEqual([1, 2, 5, 7, 10]);
  expect(mergeSort([3, 4, 7, 3])).toEqual([3, 3, 4, 7]);
})
