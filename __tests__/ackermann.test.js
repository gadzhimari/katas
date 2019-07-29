import ackermann from '../src/ackermann/ackermann';

test('ackermann', () => {
  expect(ackermann(1, 1)).toBe(3);
  expect(ackermann(4, 0)).toBe(13);
});
