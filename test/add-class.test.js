/* eslint-env jest */
var n = require('./helpers').normalizeSpaces
var addClass = require('../add-class')

describe('addClass', function () {
  var div

  beforeEach(function () {
    div = document.createElement('div')
  })

  it('works', function () {
    addClass(div, 'hello')
    expect(n(div.className)).toEqual('hello')
  })

  it('handles null', function () {
    addClass(div)
    expect(n(div.className)).toEqual('')
  })

  it('handles arrays', function () {
    addClass(div, ['a', 'b'])
    expect(n(div.className)).toEqual('a b')
  })

  it('compounds', function () {
    addClass(div, 'hello')
    addClass(div, 'world')
    expect(n(div.className)).toEqual('hello world')
  })
})
