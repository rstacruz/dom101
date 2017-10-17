var each = require('./each')

/**
 * addClass : addClass(el, className)
 * Adds a class name to an element. Compare with `$.fn.addClass`.
 *
 *     var addClass = require('dom101/add-class');
 *
 *     addClass(el, 'active');
 */

function addClass (el, className) {
  if (!className) return

  if (Array.isArray(className)) {
    each(className, function (className) {
      addClass(el, className)
    })

    return
  }

  if (el.classList) {
    var classNames = className.split(' ').filter(Boolean)
    each(classNames, function (className) {
      el.classList.add(className)
    })
  } else {
    el.className += ' ' + className
  }
}

module.exports = addClass
