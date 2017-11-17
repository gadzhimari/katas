const printAllNaturalNums = n =>
  ((n === 1) ? 1 : `${printAllNaturalNums(n - 1)} ${n}`);

export default printAllNaturalNums;
