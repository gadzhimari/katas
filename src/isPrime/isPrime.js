export default (n) => {
  if (n < 2) return false;
  const iter = (acc, num) => {
    if (num > Math.sqrt(n)) {
      return (acc < 1);
    }
    const newAcc = (n % num === 0) ? acc + 1 : acc;
    return iter(newAcc, num + 1);
  }
  return iter(0, 2);
}
