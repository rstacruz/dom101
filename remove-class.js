var each = require('./each')

/**
 * removeClass : removeClass(el, className)
 * Removes a classname.
 *
 *     var removeClass = require('dom101/remove-class');
 *
 *     el.className = 'selected active';
 *     removeClass(el, 'active');
 *
 *     el.className
 *     => "selected"
 */

function removeClass (el, className) {
  if (!className) return

  if (Array.isArray(className)) {
    each(className, function (className) {
      removeClass(el, className)
    })

    return
  }

  if (el.classList) {
    var classNames = className.split(' ').filter(Boolean)
    each(classNames, function (className) {
      el.classList.remove(className)
    })
  } else {
    var expr =
      new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi')

    el.className = el.className.replace(expr, ' ')
  }
}

module.exports = removeClass
