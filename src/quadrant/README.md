Create and export following function for working with points:
quadrant - function, which calculates a quadrant in which a point is located.
```js
        +
      2 | 1
        |
+----------------+
        |
      3 | 4
        +
const point = makePoint(1, 5);
quadrant(point); // 1
quadrant(makePoint(3, -3)); // 4
```
If dots doesn't belong to any quadrant, when function should return `null`.
