/* eslint-env jest */
var extend = require('../deep-extend')

describe('deep extend', function () {
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

  it('works in place', function () {
    var obj = {}
    extend(obj,
     { name: { first: 'john' } },
     { name: { last: 'doe' } })
    expect(obj.name.first).toEqual('john')
    expect(obj.name.last).toEqual('doe')
  })

  it('works with arrays', function () {
    var obj = {}
    extend(obj,
     { names: ['moe'] },
     { names: ['larry'] })
    expect(obj.names).toEqual(['larry'])
  })
})
