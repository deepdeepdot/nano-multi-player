## Testing

Guide: https://jestjs.io/docs/en/getting-started.html


## Node setup

* Install `nvm`: https://github.com/nvm-sh/nvm

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.0/install.sh | bash

# Setup bash profile

nvm ls-remote
nvm install v10  # Node version 10
nvm install v12  # Node version 12
nvm ls
```

## Setup Jest

* Setup: https://jestjs.io/docs/en/getting-started.html

```sh
npm init
npm install --save-dev jest
```

* sum.js
```js
function sum(a, b) {
  return a + b;
}
module.exports = sum;
```

* sum.test.js
```js
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

* package.json
```
{
  "scripts": {
    "test": "jest"
  }
}
```

```sh
npm run test
```

