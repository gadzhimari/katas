import isPrime from '../isPrime/isPrime';

export const generatePrimeNumbers = (number) =>
  [...Array(number + 1).keys()].slice(2).filter(num => isPrime(num));

