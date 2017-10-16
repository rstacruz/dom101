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

  it('compounds', function () {
    addClass(div, 'hello')
    addClass(div, 'world')
    expect(n(div.className)).toEqual('hello world')
  })
})
