import st from 'smart-table-core';
import perf from '../index';

const data = [
  {foo: 'bar'},
  {foo: 'woot'},
  {foo: 'blah'},
  {foo: 'na'}
];
const table = st({data}, perf());

table.sort({pointer: 'foo'});
table.eval();

setTimeout(() => table.search({scope: ['foo'], value: 'b'}), 200);