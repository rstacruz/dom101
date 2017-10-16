/* eslint-env jest */
var toggleClass = require('../toggle-class')
var n = require('./helpers').normalizeSpaces

describe('toggleClass', function () {
  var div

  beforeEach(function () {
    div = document.createElement('div')
  })

  it('works', function () {
    toggleClass(div, 'hello')
    expect(n(div.className)).toEqual('hello')
  })

  it('compounds', function () {
    toggleClass(div, 'hello')
    toggleClass(div, 'hello')
    expect(n(div.className)).toEqual('')
  })

  it('works with value = true', function () {
    toggleClass(div, 'hello', true)
    expect(n(div.className)).toEqual('hello')
  })

  it('works with value = true even if it already exists', function () {
    div.className = 'hello'
    toggleClass(div, 'hello', true)
    expect(n(div.className)).toEqual('hello')
  })

  it('works with value = false if it already exists', function () {
    div.className = 'hello'
    toggleClass(div, 'hello', false)
    expect(n(div.className)).toEqual('')
  })

  it('works with value = false even if it doesn\'t exist', function () {
    toggleClass(div, 'hello', false)
    expect(n(div.className)).toEqual('')
  })
})
