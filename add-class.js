/**
 * addClass : addClass(el, className)
 * Adds a class name to an element. Compare with `$.fn.addClass`.
 *
 *     var addClass = require('mindom/add-class');
 *     addClass(el, 'active');
 */

module.exports = function (el, className) {
  if (el.classList)
    el.classList.add(className);
  else
    el.className += ' ' + className;
};
