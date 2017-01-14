# tuple-map [![Build Status](https://img.shields.io/circleci/project/bcherny/tuple-map.svg?branch=master&style=flat-square)](https://circleci.com/gh/bcherny/tuple-map) [![NPM](https://img.shields.io/npm/v/tuple-map.svg?style=flat-square)](https://www.npmjs.com/package/tuple-map) [![MIT](https://img.shields.io/npm/l/tuple-map.svg?style=flat-square)](https://opensource.org/licenses/MIT)

> ES6 Map where keys are 2-tuples

## Installation

```sh
npm install tuple-map --save
```

## Usage

```js
import { TupleMap } from 'tuple-map'

const map = new TupleMap

map.set([1, 2], 'a')
   .set([3, 4], 'b')

map.get([1, 2]) // 'a'
map.get([3, 4]) // 'b'
map.get([5, 6]) // undefined
```

## Tests

```sh
npm test
```

## License

MIT