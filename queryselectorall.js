/**
 * querySelectorAll : querySelectorAll(query)
 * Convenience function to rename `document.querySelectorAll`.
 *
 *     var qa = require('dom101/queryselectorall');
 *     qa('.button').forEach(function (el) {
 *       addClass('el', 'selected');
 *     });
 */

function querySelectorAll (query) {
  return document.querySelectorAll(query);
}

module.exports = querySelectorAll;
