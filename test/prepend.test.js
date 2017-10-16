/* eslint-env jest */
var prepend = require('../prepend')

describe('prepend', function () {
  var div
  var child

  beforeEach(function () {
    div = document.createElement('div')
    child = document.createElement('div')
  })

  it('works for empty divs', function () {
    prepend(div, child)
    expect(div.firstChild).toEqual(child)
  })

  it('works for non-empty divs', function () {
    var first = document.createElement('div')
    div.appendChild(first)
    prepend(div, child)
    expect(div.firstChild).toEqual(child)
  })
})
