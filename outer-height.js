/**
 * outerHeight : outerHeight(el, includeMargin)
 * Returns the outer height (height + padding [+margin]) of an element as an integer (IE8+) 
 *
 *     var outerHeight = require('dom101/outer-height');
 *
 *     outerHeight(el);
 */

function outerHeight (el, includeMargin) {
  var height = el.offsetHeight;
  var style = typeof getComputedStyle !== 'undefined' 
          && getComputedStyle(el)
          || {marginTop: el.currentStyle["marginTop"], marginBottom: el.currentStyle["marginBottom"]};

  height += includeMargin && (parseInt(style.marginTop) + parseInt(style.marginBottom)) || 0;
  return height;
}

module.exports = outerHeight;
