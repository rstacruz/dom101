/**
 * text : text(el, [value])
 * Sets or gets text. Compare with `$.fn.text`.
 *
 *     var text = require('mindom/text');
 *     text(el, 'Hello world');
 */

module.exports = function (el, value) {
  if (arguments.length === 1) {
    if ('textContent' in el)
      return el.textContent;
    else
      return el.innerText;
  } else {
    if ('textContent' in el)
      el.textContent = value;
    else
      el.innerText = value;
  }
};
