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
};

const mergeSort = (list) => {
  const pivot = Math.floor(list.length / 2);
  if (pivot === 0) {
    return list;
  }
  const [left, right] = [list.slice(0, pivot), list.slice(pivot)];
  return merge(mergeSort(left), mergeSort(right));
};

export default mergeSort;
