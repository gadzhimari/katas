Write and export by default a function, flip, which takes a function as parameter and return new function which run in reverse order of arguments. Note: the function should work with unlimited number of arguments.

```js
// exponentiation
const wop = flip(Math.pow);

Math.pow(1, 2); // 1
wop(1, 2); // 2

Math.pow(3, 2); // 9
wop(3, 2); // 8

// subtraction
const sub = (a, b, c) => a - b - c;
const reverseSub = flip(sub);

sub(5, 3, 1); // 1
reverseSub(5, 3, 1); // -7
```

