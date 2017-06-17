import primeFactorization from '../src/primeFactorization/primeFactorization';

test('primeFactorization', () => {
  expect(primeFactorization(7).toEqual([7]));
  expect(primeFactorization(10).toEqual([2, 5]));
  expect(primeFactorization(100).toEqual([2, 2, 5, 5]));
  expect(primeFactorization(144).toEqual([2, 2, 2, 2, 3, 3]));
  expect(primeFactorization(360).toEqual([2, 2, 2, 3, 3, 5]));
});
