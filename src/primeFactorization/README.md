In number theory, the prime factors of a positive integer are the prime numbers
that divide that integer exactly.[1] The prime factorization of a positive integer
is a list of the integer's prime factors, together with their multiplicities; the
process of determining these factors is called integer factorization. The fundamental
theorem of arithmetic says that every positive integer has a single unique prime
factorization.

```js
To shorten prime factorizations, factors are often expressed in powers (multiplicities).
For example,

360 = 2 x 2 x 2 x 2 x 3 x 3 x 5
```

Write and export by default function that takes number and return array of prime
multiplicities using recursion. Algorithm must have a O(logn) complexity.

```js
primeFactorization(100) // [2, 2, 5, 5]
```

Hint. Use the function called generatePrimeNumbers which generate list of prime numbers.
```js
generatePrimeNumbers(10); // [2, 3, 5, 7];
```
