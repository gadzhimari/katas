export default (num) => {
  const iter = (acc, i, k) => {
    if (num < 1 || num === acc.length) {
      return acc;
    }
    return (i === k) ? iter(acc, 0, k + 1) : iter([...acc, k], i + 1, k);
  };

  return iter([], 0, 1);
};
