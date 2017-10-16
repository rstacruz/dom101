/* eslint-env jest */
var map = require('../map')

describe('map', function () {
  it('works with arrays', function () {
    var values = map([7, 8, 9], function (val) { return '.' + val })
    expect(values).toEqual(['.7', '.8', '.9'])
  })

  it('works with array keys', function () {
    var keys = map([9, 9, 9], function (_, key) { return '.' + key })
    expect(keys).toEqual(['.0', '.1', '.2'])
  })

  it('works with objects', function () {
    var values = map({ a: 8, b: 9 }, function (val) { return '.' + val })
    expect(values).toEqual(['.8', '.9'])
  })

  it('works with object keys', function () {
    var keys = map({ a: 1, b: 2 }, function (_, key) { return '.' + key })
    expect(keys).toEqual(['.a', '.b'])
  })
})
