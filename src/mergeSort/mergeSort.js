export default (left, right) => {
  const iter = (acc, list1, list2) => {
    if (list1.length === 0) {
      return [...acc, ...list2];
    }
    if (list2.length === 0) {
      return [...acc, ...list1];
    }
    const [a, ...rest1] = list1;
    const [b, ...rest2] = list2;

    return a > b ? iter([...acc, b], list1, rest2) : iter([...acc, a], rest1, list2);
  }

  return iter([], left, right);
}
