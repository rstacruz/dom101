/**
 * querySelectorAll : querySelectorAll(query)
 * Convenience function to access `document.querySelectorAll`.
 *
 *     var qa = require('dom101/query-selector-all');
 *
 *     qa('.button').forEach(function (el) {
 *       addClass('el', 'selected');
 *     });
 */

function querySelectorAll (query) {
  return document.querySelectorAll(query);
}

module.exports = querySelectorAll;
