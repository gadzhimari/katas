A linked list is a nested set of objects, with the first object holding
a reference to the second, the second to the third, and so on.

```js
var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

The resulting objects form a chain, like this:

value: 1
rest: -------->value: 2
               rest: --------> value: 3
                               rest: null

```
1. Write and export function arrayToList that builds up a data structure like the
previous one when given [1, 2, 3] as argument.
```js
arrayToList([1, 2]) // {value: 1, rest: {value: 2, rest: null}};
```

2. Write and export function listToArray that produces an array from a list.
```js
listToArray(arrayToList([1, 2])); // [1, 2];
```

3. Also write and export the helper functions prepend, which takes an element and
a list and creates a new list that adds the element to the front of the input list,
and nth, which takes a list and a number and returns the element at the given position
in the list, or undefined when there is no such element.

If you haven't already, also write a recursive version of nth.

```js
prepend(10, prepend(20, null)); // {value: 10, rest: {value: 20, rest: null}}
nth(arrayToList([10, 20, 30]), 1); // 20
```
