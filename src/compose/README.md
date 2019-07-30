Write and export by default compose function that composes single-argument functions from right to left. The rightmost function can take multiple arguments as it provides the signature for.

```js
const sum = v => v + 2;
const mul = v => v * 2;

compose(mul, sum)(2); // 8
```
