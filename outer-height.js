/**
 * outerHeight : outerHeight(el, includeMargin)
 * Returns the outer height (height + padding [+margin]) of an element as an
 * integer. Supports IE8+.
 *
 * If `includeMargin` is true, then margins will be part of the computation.
 *
 *     var outerHeight = require('dom101/outer-height');
 *     var height = outerHeight(el);
 *     var fullHeight = outerHeight(el, true);  // include margins
 */

function outerHeight (el, includeMargin) {
  var style = typeof window.getComputedStyle !== 'undefined'
    ? window.getComputedStyle(el)
    : el.currentStyle;

  return el.offsetHeight + (includeMargin && (parseInt(style['marginTop'], 10) + parseInt(style['marginBottom'], 10)) || 0);
}

module.exports = outerHeight;
