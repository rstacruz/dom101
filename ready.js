/**
 * ready : ready(fn)
 * On DOM ready.
 *
 *     var ready = require('mindom/ready');
 *     ready(function () { ... });
 */

module.exports = function (fn) {
  if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState === 'interactive') fn();
    });
  }
};
