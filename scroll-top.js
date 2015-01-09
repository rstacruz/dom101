
/**
 * scrollTop : scrollTop()
 * Returns the scroll top value.
 *
 *     var scrollTop = require('dom101/scroll-top');
 *     alert(scrollTop());
 */

var scrollTop =
  (typeof window.pageYOffset !== 'undefined') ?
    function () { return window.pageYOffset; } :
  (typeof document.documentElement.clientHeight !== 'undefined') ?
    function () { return document.documentElement.scrollTop; } :
    function () { return document.body.scrollTop; };

// Also see https://github.com/yields/scrolltop/blob/master/index.js
module.exports = scrollTop;
