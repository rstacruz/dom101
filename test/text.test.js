/* eslint-env jest */
var text = require('../text')

describe('text', function () {
  var div

  beforeEach(function () {
    div = document.createElement('div')
  })

  it('sets', function () {
    text(div, 'hello')
    expect(div.outerHTML).toEqual('<div>hello</div>')
  })

  it('sets and gets', function () {
    text(div, 'hello')
    expect(text(div)).toEqual('hello')
  })
})
