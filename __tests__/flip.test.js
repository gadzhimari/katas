import flip from '../src/flip/flip';

test('flip', () => {
  const wop = flip(Math.pow);
  expect(wop(1, 2)).toBe(2);
  expect(wop(3, 2)).toBe(8);

  const sub = (a, b, c, d) => a - b - c - d;
  const reverseSub = flip(sub);
  expect(reverseSub(50, 15, 10, 5)).toBe(-70);
});
