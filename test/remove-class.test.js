/* eslint-env jest */
var removeClass = require('../remove-class')
var n = require('./helpers').normalizeSpaces

describe('removeClass', function () {
  var div

  beforeEach(function () {
    div = document.createElement('div')
  })

  it('works at the end', function () {
    div.className = 'hello world'
    removeClass(div, 'world')
    expect(n(div.className)).toEqual('hello')
  })

  it('works at the start', function () {
    div.className = 'hello world'
    removeClass(div, 'hello')
    expect(n(div.className)).toEqual('world')
  })

  it('handles nulls', function () {
    div.className = 'hello world'
    removeClass(div, null)
    expect(n(div.className)).toEqual('hello world')
  })

  it('handles arrays', function () {
    div.className = 'hello there world'
    removeClass(div, ['hello', 'world'])
    expect(n(div.className)).toEqual('there')
  })

  it('works at the middle', function () {
    div.className = 'hello world'
    removeClass(div, 'there')
    expect(n(div.className)).toEqual('hello world')
  })

  it('works for single classes', function () {
    div.className = 'abc'
    removeClass(div, 'abc')
    expect(n(div.className)).toEqual('')
  })
})
