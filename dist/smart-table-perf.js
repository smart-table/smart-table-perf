(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global['smart-table-perf'] = factory());
}(this, (function () { 'use strict';

var index = function () {
  return function ({table}) {
    const ev = table.eval.bind(table);
    table.eval = function (...args) {
      console.time('smart-table:eval');
      return ev(...args)
        .then(result => {
          console.timeEnd('smart-table:eval');
          return result;
        });
    };

    table.on('EXEC_CHANGED', ({working}) => {
      working === true ? console.time('smart-table:exec') : console.timeEnd('smart-table:exec');
    });

    return table;
  }
};

return index;

})));
