import merge from '../src/merge/merge';

test('merge', () => {
  expect(merge([], [])).toEqual([]);
  expect(merge([1, 2], [])).toEqual([1, 2]);
  expect(merge([1, 5, 10], [5, 6, 15, 100])).toEqual([1, 5, 5, 6, 10, 15, 100]);
})
