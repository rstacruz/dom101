/**
 * hasClass : hasClass(el, className)
 * Checks if an element has a given class name.
 *
 *     var hasClass = require('mindom/has-class');
 *
 *     el.className = 'selected active';
 *     hasClass(el, 'active') //=> true
 */

module.exports = function (el, className) {
  if (el.classList)
    return el.classList.contains(className);
  else
    return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
};
