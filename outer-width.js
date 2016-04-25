/**
 * outerWidth : outerWidth(el, includeMargin)
 * Returns the outer width (width + padding [+margin]) of an element as an integer (IE8+) 
 *
 *     var outerWidth = require('dom101/outer-width');
 *
 *     outerWidth(el);
 */

function outerWidth (el, includeMargin) {
  var style = typeof getComputedStyle !== 'undefined' && getComputedStyle(el) || el.currentStyle;
  
  return el.offsetWidth + (includeMargin && (parseInt(style["marginleft"]) + parseInt(style["marginRight"])) || 0);
}

module.exports = outerWidth;
