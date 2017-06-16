import isPrime from '../src/isPrime/isPrime';

test('isPrime', () => {
  expect(isPrime(0)).toBe('NO');
  expect(isPrime(1)).toBe('NO');
  expect(isPrime(2)).toBe('YES');
  expect(isPrime(3)).toBe('NO');
  expect(isPrime(7)).toBe('YES');
  expect(isPrime(10)).toBe('NO');
});
