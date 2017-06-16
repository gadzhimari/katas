import isPrime from '../src/isPrime/isPrime';

test('isPrime', () => {
  expect(isPrime(0)).toBeFalsy();
  expect(isPrime(1)).toBeFalsy();
  expect(isPrime(2)).toBeTruthy();
  expect(isPrime(3)).toBeTruthy();
  expect(isPrime(4)).toBeFalsy();
  expect(isPrime(7)).toBeTruthy();
  expect(isPrime(10)).toBeFalsy();
});
