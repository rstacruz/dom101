/**
 * removeClass : removeClass(el, className)
 * Removes a classname.
 *
 *     var removeClass = require('mindom/remove-class');
 *
 *     el.className = 'selected active';
 *     removeClass(el, 'active');
 *     el.className; //=> "selected"
 */

module.exports = function (el, className) {
  if (el.classList)
    el.classList.remove(className);
  else {
    var expr =
      new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi');

    el.className = el.className.replace(expr, ' ');
  }
};
