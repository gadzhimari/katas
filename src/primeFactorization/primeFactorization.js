import { generatePrimeNumbers } from './math';

export default (number) => {
  const iter = (primeNumbers, integer, primeFactors) => {
    if (primeNumbers.includes(integer)) {
      return [...primeFactors, integer];
    }
    const factor = primeNumbers.find(num => integer % num === 0);
    const newInteger = integer / factor;

    return iter(generatePrimeNumbers(newInteger), newInteger, [...primeFactors, factor]);
  }

  return iter(generatePrimeNumbers(number), number, []);
}
