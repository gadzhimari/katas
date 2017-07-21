const merge = (left, right) => {
  if (left.length === 0) {
    return right;
  }
  if (right.length === 0) {
    return left;
  }
  const a = left[0];
  const b = right[0];

  return a < b
    ? [a, ...merge(left.slice(1), right)]
    : [b, ...merge(left, right.slice(1))];
}

export default merge;
