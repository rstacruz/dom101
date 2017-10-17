/* eslint-env jest */
var addClass = require('../add-class')

describe('addClass', function () {
  var div

  beforeEach(function () {
    div = document.createElement('div')
  })

  it('works', function () {
    addClass(div, 'hello')
    expect(div.className).toEqual('hello')
  })

  it('handles null', function () {
    addClass(div)
    expect(div.className).toEqual('')
  })

  it('handles arrays', function () {
    addClass(div, ['a', 'b'])
    expect(div.className).toEqual('a b')
  })

  it('compounds', function () {
    addClass(div, 'hello')
    addClass(div, 'world')
    expect(div.className).toEqual('hello world')
  })

  it('spaces', function () {
    addClass(div, ' hello  world  ')
    expect(div.className).toEqual('hello world')
  })
})
