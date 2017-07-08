import { arrayToList, listToArray, prepend, nth } from '../src/linkedList/linkedList';

describe('LinkedList', () => {
  test('arrayToList', () => {
    expect(arrayToList([])).toEqual({});
    expect(arrayToList([1])).toEqual({value: 1, rest: null});
    expect(arrayToList([1, 2])).toEqual({value: 1, rest: {value: 2, rest: null}});
    expect(arrayToList([1, 2, 3])).toEqual({value: 1, rest: {value: 2, rest: {value: 3, rest: null}}});
  });
  test('listToArray', () => {
    expect(listToArray(arrayToList([]))).toEqual([]);
    expect(listToArray(arrayToList([1]))).toEqual([1]);
    expect(listToArray(arrayToList([1, 2]))).toEqual([1, 2]);
    expect(listToArray(arrayToList([1, 2, 3]))).toEqual([1, 2, 3]);
  });
  test('prepend', () => {
    expect(prepend(1, null)).toEqual({value: 1, rest: null});
    expect(prepend(1, prepend(2, null))).toEqual({value: 1, rest: {value: 2, rest: null}});
    expect(prepend(1, prepend(2, prepend(3, null)))).toEqual({value: 1, rest: {value: 2, rest: {value: 3, rest: null}}});
  });
  test('nth', () => {
    expect(nth(null, 1)).toBeUndefined();
    expect(nth(undefined, 1)).toBeUndefined();
    expect(nth(arrayToList([10, 20]), 1)).toBe(20);
    expect(nth(arrayToList([10, 20, 30, 40]), 0)).toBe(10);
    expect(nth(arrayToList([10, 20, 30, 40]), 1)).toBe(20);
    expect(nth(arrayToList([10, 20, 30, 40]), 2)).toBe(30);
    expect(nth(arrayToList([10, 20, 30, 40]), 3)).toBe(40);
  })
});
