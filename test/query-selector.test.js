/* eslint-env jest */
var qs = require('../query-selector')

describe('querySelector', function () {
  var div

  beforeEach(function () {
    div = document.createElement('div')
    div.className = 'hello'
    document.body.appendChild(div)
  })

  afterEach(function () {
    document.body.removeChild(div)
  })

  it('works', function () {
    expect(qs('.hello')).toEqual(div)
  })
})
