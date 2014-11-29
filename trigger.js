/**
 * trigger : trigger(el, event, [options])
 * Triggers an event `event`. Only works for native events.
 *
 *     var trigger = require('mindom/trigger');
 *
 *     el = document.querySelector('#button');
 *     trigger(el, 'click');
 */

function trigger (el, event) {
  if (document.createEvent) {
    var ev = document.createEvent('HTMLEvents');
    ev.initEvent(event, true, false);
    el.dispatchEvent(ev);
  } else {
    el.fireEvent('on'+event);
  }
}

module.exports = trigger;
