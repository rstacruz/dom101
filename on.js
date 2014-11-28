/**
 * on : on(el, event, fn)
 * Adds an event handler.
 *
 *     var on = require('mindom/on');
 *     on(el, 'click', function () { ... });
 */

module.exports = function (el, event, handler) {
  if (el.addEventListener) {
    el.addEventListener(event, handler);
  } else {
    el.attachEvent('on' + event, function(){
      handler.call(el);
    });
  }
};
