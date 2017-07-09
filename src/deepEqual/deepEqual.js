const deepEqual = (a, b) => {
  if (a === b) {
    return true;
  }
  if (typeof a !== 'object' || typeof b !== 'object') {
    return false;
  }
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }
  return Object.keys(a).reduce((isEqual, key) => {
    if (isEqual) {
      return ((key in b) && deepEqual(a[key], b[key]));
    }
    return false;
  }, true);
};

export default deepEqual;
