/**
 * querySelector : querySelector(query)
 * Convenience function to rename `document.querySelector`.
 *
 *     var q = require('dom101/queryselector');
 *     addClass(q('#instructions'), 'hidden');
 */

function querySelector (query) {
  return document.querySelector(query);
}

module.exports = querySelector;
