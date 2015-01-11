/**
 * toggleClass : toggleClass(el, className)
 * Adds a class name to an element. Compare with `$.fn.toggleClass`.
 *
 *     var toggleClass = require('dom101/toggle-class');
 *
 *     toggleClass(el, 'active');
 */

var
  addClass = require('./add-class'),
  removeClass = require('./remove-class'),
  hasClass = require('./has-class');

function toggleClass (el, className) {
  return hasClass(el, className) ?
    removeClass(el, className) :
    addClass(el, className);
}

module.exports = toggleClass;
