export default (num) => {
  const iter = step => (step <= Math.sqrt(num)) ? 
    ((num % step === 0) ? false : iter(step + 1)) : true;

  return (num < 2) ? false : iter(2);
}
