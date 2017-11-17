export default (arr) => {
  if (arr.length === 0) {
    return [];
  }
  const sortedArr = arr.reduce((acc, str, index) => {
    const newStr = str.split('').sort().join('');

    return acc.has(newStr) ?
      acc.set(newStr, [...acc.get(newStr), index]) : acc.set(newStr, [index]);
  }, new Map());

  return [...sortedArr.values()].reduce((acc, indices) =>
    (indices.length > 1 ? [...acc, indices] : acc), []);
};
