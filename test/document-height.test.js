/* eslint-env jest */
var documentHeight = require('../document-height')

describe('documentHeight', function () {
  it('works', function () {
    // returns 0 in jsdom
    expect(typeof documentHeight()).toEqual('number')
  })
})
