/**
 * ready : ready(fn)
 * Executes `fn` when the DOM is ready.
 *
 *     var ready = require('mindom/ready');
 *
 *     ready(function () {
 *       ...
 *     });
 */

function ready (fn) {
  if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState === 'interactive') fn();
    });
  }
}

module.exports = ready;
