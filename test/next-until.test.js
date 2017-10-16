/* eslint-env jest */
var nextUntil = require('../next-until')

describe('nextUntil()', function () {
  var ul, li1, li2, li3

  beforeEach(function () {
    ul = document.createElement('ul')

    li1 = document.createElement('li')
    li1.className = 'item one'

    li2 = document.createElement('li')
    li2.className = 'item two'

    li3 = document.createElement('li')
    li3.className = 'item three'

    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.appendChild(li3)
  })

  it('works', function () {
    var result = nextUntil(li1, '.three')

    expect(result.length).toEqual(1)
    expect(result[0].className).toEqual('item two')
  })

  it('runs off until the end', function () {
    var result = nextUntil(li1, '.nonexistent')

    expect(result.length).toEqual(2)
    expect(result[0].className).toEqual('item two')
    expect(result[1].className).toEqual('item three')
  })

  it('handles null', function () {
    var result = nextUntil(li1, null)

    expect(result.length).toEqual(2)
    expect(result[0].className).toEqual('item two')
    expect(result[1].className).toEqual('item three')
  })
})
