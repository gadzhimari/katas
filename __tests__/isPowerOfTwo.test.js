import isPowerOfTwo from '../src/isPowerOfTwo/isPowerOfTwo';

test('isPowerOfTwo', () => {
  expect(isPowerOfTwo(0)).toBe('YES');
  expect(isPowerOfTwo(1)).toBe('YES');
  expect(isPowerOfTwo(2)).toBe('YES');
  expect(isPowerOfTwo(3)).toBe('NO');
  expect(isPowerOfTwo(7)).toBe('NO');
  expect(isPowerOfTwo(22)).toBe('NO');
});
