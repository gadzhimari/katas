export default (coll) => {
  const arr = [...coll];
  const size = coll.length;

  for (let i = 1; i < size; i++) {
    for (let j = size - 1; j >= i; j--) {
      if (arr[j - 1] > arr[j]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      }
    }
  }
  return arr;
}
