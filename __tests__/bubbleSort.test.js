import bubbleSort from '../src/bubbleSort/bubbleSort';

test('bubbleSort', () => {
  expect(bubbleSort([])).toEqual([]);
  expect(bubbleSort([5, 3, 1, 6])).toEqual([1, 3, 5, 6]);
  expect(bubbleSort([3, 1, 6, 9, 3, 1])).toEqual([1, 1, 3, 3, 6, 9]);
});
