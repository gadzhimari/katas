import triangularSequence from '../src/triangularSequence/triangularSequence';

test('triangularSequence', () => {
  expect(triangularSequence(0)).toEqual([]);
  expect(triangularSequence(1)).toEqual([1]);
  expect(triangularSequence(2)).toEqual([1, 2]);
  expect(triangularSequence(3)).toEqual([1, 2, 2]);
  expect(triangularSequence(4)).toEqual([1, 2, 2, 3]);
  expect(triangularSequence(5)).toEqual([1, 2, 2, 3, 3]);
});
