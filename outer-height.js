/**
 * outerHeight : outerHeight(el, includeMargin)
 * Returns the outer height (height + padding [+margin]) of an element as an integer (IE8+) 
 *
 *     var outerHeight = require('dom101/outer-height');
 *
 *     outerHeight(el);
 */

function outerHeight (el, includeMargin) {
  var style = typeof getComputedStyle !== "undefined" && getComputedStyle(el) || el.currentStyle;

  return  el.offsetHeight + (includeMargin && (parseInt(style["marginTop"]) + parseInt(style["marginBottom"])) || 0);
}

module.exports = outerHeight;
