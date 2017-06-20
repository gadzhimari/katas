import 'printNumsBetween' from '../src/printNumsBetween/printNumsBetween';

test('printNumsBetween', () => {
  expect(printNumsBetween(10, 15)).toBe('10 11 12 13 14 15');
  expect(printNumsBetween(15, 10)).toBe('15 14 13 12 11 10');
})
