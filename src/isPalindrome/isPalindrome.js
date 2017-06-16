const isPalindrome = (str) => {
  if (str < 2) {
    return true;
  }
  if (str[0] !== str[str.length - 1]) {
    return false;
  }

  return isPalindrome(str.substr(1, str.length - 2));
};

export default isPalindrome;
