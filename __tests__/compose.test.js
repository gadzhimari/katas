import compose from '../src/compose/compose';

describe('compose', () => {
  it('composes from right to left', () => {
    const sum = v => v + 2;
    const mul = v => v * 2;
    const sub = v => v - 2;

    expect(compose(sub, mul, sum)(2)).toBe(6);
  });

  it('composes functions from right to left', () => {
    const a = next => x => next(`${x}a`);
    const b = next => x => next(`${x}b`);
    const c = next => x => next(`${x}c`);
    const final = x => x;

    expect(compose(
      a,
      b,
      c,
    )(final)('')).toBe('abc');
    expect(compose(
      b,
      c,
      a,
    )(final)('')).toBe('bca');
    expect(compose(
      c,
      a,
      b,
    )(final)('')).toBe('cab');
  });

  it('throws at runtime if argument is not a function', () => {
    const square = x => x * x;
    const add = (x, y) => x + y;

    expect(() =>
      compose(
        square,
        add,
        false,
      )(1, 2)).toThrow();
    expect(() =>
      compose(
        square,
        add,
        undefined,
      )(1, 2)).toThrow();
    expect(() =>
      compose(
        square,
        add,
        true,
      )(1, 2)).toThrow();
    expect(() =>
      compose(
        square,
        add,
        NaN,
      )(1, 2)).toThrow();
    expect(() =>
      compose(
        square,
        add,
        '42',
      )(1, 2)).toThrow();
  });
});
