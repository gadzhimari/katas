Compute two given input m and n, and return the Ackermann number A(m, n) defined by:

```js
A(m, n) = n + 1                      if m = 0
A(m, n) = A(m - 1, 1)                if m > 0, n = 0 
A(m, n) = A(m - 1, A(m, n - 1))      if m,n > 0
```

