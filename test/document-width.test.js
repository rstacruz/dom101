/* eslint-env jest */
var documentWidth = require('../document-width')

describe('documentWidth', function () {
  it('works', function () {
    // returns 0 in jsdom
    expect(typeof documentWidth()).toEqual('number')
  })
})
