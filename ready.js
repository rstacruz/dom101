/**
 * ready : ready(fn)
 * Executes `fn` when the DOM is ready. If the DOM is already ready, the given
 * callback will be called immediately.
 *
 *     var ready = require('dom101/ready');
 *
 *     ready(function () {
 *       ...
 *     });
 */

function ready (fn) {
  if (isReady()) {
    return fn()
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn)
  } else {
    document.attachEvent('onreadystatechange', function () {
      if (isReady()) fn()
    })
  }
}

function isReady () {
  return (document.readyState === 'complete' || document.readyState === 'interactive')
}

module.exports = ready
