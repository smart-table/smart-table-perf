(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global['smart-table-perf'] = factory());
}(this, (function () { 'use strict';

const markStart = (name) => {
  if (performance && performance.mark) {
    performance.mark(name + ':start');
  } else {
    console.time(name);
  }
};

const markEnd = (name) => {
  if (performance && performance.measure) {
    performance.mark(name + ':end');
    performance.measure(name, name + ':start', name + ':end');
  } else {
    console.timeEnd(name);
  }
};

var index = function () {
  return function ({table}) {
    const ev = table.eval.bind(table);
    table.eval = function (...args) {
      markStart('smart-table:eval');
      return ev(...args)
        .then(result => {
          markEnd('smart-table:eval');
          return result;
        });
    };

    table.on('EXEC_CHANGED', ({working}) => {
      working === true ? markStart('smart-table:exec') : markEnd('smart-table:exec');
    });

    return table;
  }
};

return index;

})));
