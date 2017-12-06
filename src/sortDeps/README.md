Dependency management is very important task when developing software. Usually in apps using many third-party components, which itself depends on other components. One of task is to include dependencies in right order. Libraries, on which dependends other should includes before. The definition of this sequence is reduced to the task of sorting graph.

Implement and export by default sortDeps function which accept list of dependencies and return array of sorted nodes.

```js
const deps1 = {
  mongo: [],
  tzinfo: ['thread_safe'],
  uglifier: ['execjs'],
  execjs: ['thread_safe', 'json'],
  redis: [],
};

console.log(sortDeps(deps1));
// => ['mongo', 'thread_safe', 'tzinfo', 'json', 'execjs', 'uglifier', 'redis'];
```

Independent libraries and library chains should appear in the order in which they were found in the source structure.

# Hint:

  - About algorithm: [topological sort](https://en.wikipedia.org/wiki/Topological_sorting)
