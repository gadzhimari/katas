export default(list, item) => {
  const iter = (low, high) => {
    if (high < low) {
      return null;
    }
    const mid = Math.floor((low + high) / 2);
    const guess = list[mid];
    if (guess > item) {
      return iter(low, mid - 1);
    }
    if (guess < item) {
      return iter(mid + 1, high);
    }

    return mid;
  }
  return iter(0, list.length - 1);
}
