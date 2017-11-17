export default (num) => {
  const iter = (step) => {
    if (step <= Math.sqrt(num)) {
      return (num % step === 0) ? false : iter(step + 1);
    }
    return true;
  };

  return num < 2 ? false : iter(2);
};
