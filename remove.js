/**
 * remove : remove(el)
 * Removes an element from the DOM.
 *
 *     var remove = require('mindom/remove');
 *
 *     remove(el);
 */

module.exports = function (el) {
  el && el.parentNode && el.parentNode.removeChild(el);
};
