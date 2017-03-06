const st = require('smart-table-core')['default'];
const perf = require('../dist/smart-table-perf');
const data = [
  {foo: 'bar'},
  {foo: 'woot'},
  {foo: 'blah'},
  {foo: 'na'}
];
const table = st({data},perf());

table.sort({pointer: 'foo'});
table.eval();