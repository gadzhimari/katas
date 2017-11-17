const printNumsBetween = (a, b) => {
  if (a < b) {
    return `${a} ${printNumsBetween(a + 1, b)}`;
  } else if (a > b) {
    return `${a} ${printNumsBetween(a - 1, b)}`;
  }

  return a;
};

export default printNumsBetween;
