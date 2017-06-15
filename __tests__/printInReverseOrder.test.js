import printInReverseOrder from '../src/printInReverseOrder/printInReverseOrder';

test('printInReverseOrder', () => {
  expect(printInReverseOrder(211)).toBe('1 1 2');
  expect(printInReverseOrder(4317)).toBe('7 1 3 4');
  expect(printInReverseOrder(51239991)).toBe('1 9 9 9 3 2 1 5');
});
