Export default function that checks if a number is prime (divisible only by 1 and
itself, except 1) then return true, otherwise false. Remember: 1 is not a prime
number. Note the that you can't use loops and only except recursion. The algorithm
must have a log(n) complexity.

Hint: because this problem is not pure recursive you should add the second argument
to the function which called recursively.

```js
isPrime(1) // false 
isPrime(4) // false
isPrime(7) // true
```
