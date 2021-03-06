import isPalindrome from '../src/isPalindrome/isPalindrome';

test('isPalindrome', () => {
  expect(isPalindrome('absba')).toBeTruthy();
  expect(isPalindrome('radar')).toBeTruthy();
  expect(isPalindrome('a')).toBeTruthy();
  expect(isPalindrome('404')).toBeTruthy();
  expect(isPalindrome('abba')).toBeTruthy();

  expect(isPalindrome('palindrome')).toBeFalsy();
  expect(isPalindrome('aashgkhdj')).toBeFalsy();
});
