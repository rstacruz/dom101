/* eslint-env jest */
var remove = require('../remove')

describe('remove', function () {
  var div
  var sub

  beforeEach(function () {
    div = document.createElement('div')
    sub = document.createElement('span')
    div.appendChild(sub)
  })

  it('appending works', function () {
    expect(sub.parentNode).toEqual(div)
  })

  it('works', function () {
    remove(sub)
    expect(sub.parentNode).toEqual(null)
  })

  it('works with null', function () {
    remove(null)
  })
})
