/* eslint-env jest */
var extend = require('../extend')

describe('extend', function () {
  it('works', function () {
    var out = extend({ a: 2 }, { b: 3 })
    expect(out.a).toEqual(2)
    expect(out.b).toEqual(3)
  })

  it('works with 3 args', function () {
    var out = extend({ a: 2 }, { b: 3 }, { c: 4 })
    expect(out.a).toEqual(2)
    expect(out.b).toEqual(3)
    expect(out.c).toEqual(4)
  })

  it('works in place', function () {
    var obj = { a: 2 }
    extend(obj, { b: 3 }, { c: 4 })
    expect(obj.a).toEqual(2)
    expect(obj.b).toEqual(3)
    expect(obj.c).toEqual(4)
  })
})
