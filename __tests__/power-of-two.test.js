import { pow } from '../src/power-of-two/power-of-two';

test('pow', () => {
  expect(pow(0)).toBe('NO');
  expect(pow(1)).toBe('YES');
  expect(pow(2)).toBe('YES');
  expect(pow(3)).toBe('NO');
  expect(pow(7)).toBe('NO');
  expect(pow(22)).toBe('NO');
});
