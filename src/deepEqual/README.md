Write and export by default a function, deepEqual, that takes two values and returns true only if they
are the same value or are objects with the same properties whose values are also
equal when compared with a recursive call to deepEqual.

```js
let obj = {here: {is: "an"}, object: 2};
deepEqual(obj, {here: {is: "an"}, object: 2}); // true
deepEqual(obj, {here: 1, object: 2}); // false
deepEqual(2, 2); // true
deepEqual(2, 4); // false
deepEqual('str', 'strr'); // false
```
