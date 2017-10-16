/* eslint-env jest */
var on = require('../on')
var trigger = require('../trigger')

describe('on, trigger', function () {
  var div

  beforeEach(function () {
    div = document.createElement('div')
  })

  it('works with input onchange', function (next) {
    var input = document.createElement('input')

    on(input, 'change', function () {
      next()
    })

    trigger(input, 'change')
  })

  it('works with div onclick', function (next) {
    on(div, 'click', function () {
      next()
    })

    trigger(div, 'click')
  })
})
