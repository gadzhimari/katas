## About

These are some basic (and advanced) coding challenges. The purpose of this project
is to help beginner hone their coding skills by solving basic programming problems.
The language is used javascript with es6 syntax.
This uses a TDD approach so take a look at the *.test.js file in __test__ directory
to see what needs to be implemented, write an [problems-name].js as the solution file.

## Development
**Install dev dependencies**
```bash
make install
```
**Transpile es6 syntax to es5**
```bash
make build
```
**To run tests**
```bash
make test
```

## Contribution
Fork the repo and make required changes. After that please follow the basic workflow:

1. Make a folder
2. Add new js file with name of your problem
3. Make a [name-of-your-file].test.js file
4. Provide a README.md with description
5. Before pushing to the repository run:
```bash
make build
make test
```

If the build is not successful fix your code in order the tests and eslint
validation and after that create a pull request.
