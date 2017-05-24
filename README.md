# smart-table-perf
[smart table](https://smart-table.github.io/www/dist/) extension to monitor performance (execution time of processing functions)

see [https://smart-table.github.io/smart-table-perf/example/](demo)

![./sc.png]

## Installation

### npm 

``npm install --save smart-table-perf``

### yarn 

``yarn add smart-table-perf``

## Usage

```Javascript
import st from 'smart-table-core';
import perf from 'smart-table-perf';

const data = [
  {foo: 'bar'},
  {foo: 'woot'},
  {foo: 'blah'},
  {foo: 'na'}
];
const table = st({data},perf());

table.sort({pointer: 'foo'});
table.eval();
// > smart-table:eval: 13.972ms
// > smart-table:exec: 27.652ms
```
