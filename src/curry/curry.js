const curry = (f, acc = []) => (...args) =>
  (a => (a.length === f.length ? f(...a) : curry(f, a)))([...acc, ...args]);

export default curry;
