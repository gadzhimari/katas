const sumDigits = (str) =>
  str.split('').reduce((sum, num) => sum + Number(num), 0);

export default (num) => {
  const str = String(num);
  const leftPart = str.substr(0, 3);
  const rightPart = str.substr(3);

  return sumDigits(leftPart) === sumDigits(rightPart);
}
