/* eslint-env jest */
var matches = require('../matches')

describe('matches', function () {
  var div

  beforeEach(function () {
    div = document.createElement('div')
  })

  it('works', function () {
    div.className = 'hello'
    expect(matches(div, '.hello')).toEqual(true)
  })

  it('works by returning false', function () {
    expect(matches(div, '.xyzxyz')).toEqual(false)
  })
})
