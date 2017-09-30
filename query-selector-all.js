/**
 * querySelectorAll : querySelectorAll(query, [element])
 * Convenience function to access `document.querySelectorAll`. Unlike the
 * default version, this always returns an array.
 *
 * If a 2nd parameter `element` is given, it only searches for descendants of
 * that element.
 *
 *     var each = require('dom101/each');
 *     var qsa = require('dom101/query-selector-all');
 *
 *     qsa('.button').each(el => {
 *       addClass('el', 'selected');
 *     };
 */

function querySelectorAll (query, context) {
  return Array.prototype.slice.call(
    (context || document).querySelectorAll(query)
  );
}

module.exports = querySelectorAll;
