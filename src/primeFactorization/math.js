import isPrime from '../isPrime/isPrime';

export default number =>
  [...Array(number + 1).keys()].slice(2).filter(num => isPrime(num));

