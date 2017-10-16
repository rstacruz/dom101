/* eslint-env jest */
var hasClass = require('../has-class')

describe('hasClass', function () {
  var div

  beforeEach(function () {
    div = document.createElement('div')
  })

  it('works', function () {
    div.className = 'hello'
    expect(hasClass(div, 'hello')).toEqual(true)
  })

  it('works for the start', function () {
    div.className = 'hello world'
    expect(hasClass(div, 'hello')).toEqual(true)
  })

  it('works for the end', function () {
    div.className = 'world hello'
    expect(hasClass(div, 'hello')).toEqual(true)
  })

  it('works for the middle', function () {
    div.className = 'world hello selected'
    expect(hasClass(div, 'hello')).toEqual(true)
  })

  it('doesn\'t search substrings', function () {
    div.className = 'world hello'
    expect(hasClass(div, 'hel')).toEqual(false)
  })
})
