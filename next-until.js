var matches = require('./matches')

/**
 * nextUntil : nextUntil(el, selector)
 * Returns all elements next to element `el`, until it reaches `selector` or
 * the end of the sibling list of `el`.
 *
 *     nextUntil(li, 'li:last-child')
 */

function nextUntil (el, selector) {
  const nextEl = el.nextSibling
  return nextUntilTick(nextEl, selector, [])
}

function nextUntilTick (el, selector, acc) {
  if (!el) return acc

  var isMatch = matches(el, selector)
  if (isMatch) return acc

  var newAcc = [].concat(acc).concat([ el ])
  return nextUntilTick(el.nextSibling, selector, newAcc)
}

module.exports = nextUntil
