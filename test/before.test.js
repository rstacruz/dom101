/* eslint-env jest */
var _before = require('../before')
var _after = require('../after')

describe('before/after', function () {
  var parent, reference, newNode

  beforeEach(function () {
    parent = document.createElement('div')
    reference = document.createElement('em')
    newNode = document.createElement('span')
    parent.appendChild(reference)
  })

  it('before() works', function () {
    _before(reference, newNode)
    expect(parent.innerHTML.toLowerCase()).toEqual('<span></span><em></em>')
  })

  it('before() works with strings', function () {
    _before(reference, '<b></b>')
    expect(parent.innerHTML.toLowerCase()).toEqual('<b></b><em></em>')
  })

  it('after() works at the end', function () {
    _after(reference, newNode)
    expect(parent.innerHTML.toLowerCase()).toEqual('<em></em><span></span>')
  })

  it('after() works in the middle', function () {
    parent.appendChild(document.createElement('i'))
    _after(reference, newNode)
    expect(parent.innerHTML.toLowerCase()).toEqual('<em></em><span></span><i></i>')
  })

  it('after() works with strings', function () {
    _after(reference, '<b></b>')
    expect(parent.innerHTML.toLowerCase()).toEqual('<em></em><b></b>')
  })
})
