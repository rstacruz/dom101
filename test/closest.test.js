/* eslint-env jest */
var closest = require('../closest')

describe('closest', function () {
  var div, div1, div2, div3

  beforeEach(function () {
    div = document.createElement('DIV')

    // > div > div1 > .div2 > .div3
    div1 = document.createElement('DIV')
    div1.className = 'div1'

    div2 = document.createElement('DIV')
    div2.className = 'div2'

    div3 = document.createElement('DIV')
    div3.className = 'div3'

    div.appendChild(div1)
    div1.appendChild(div2)
    div2.appendChild(div3)
  })

  it('returns self', function () {
    expect(closest(div3, '.div3')).toEqual(div3)
  })

  it('returns immediate parent', function () {
    expect(closest(div3, '.div2')).toEqual(div2)
  })

  it('returns far parent', function () {
    expect(closest(div3, '.div1')).toEqual(div1)
  })

  it('returns nothing when nothing matches', function () {
    expect(closest(div3, '.xyzxyz')).toEqual(undefined)
  })
})
