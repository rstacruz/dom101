require('mocha-jsdom')();

global.expect = require('chai').expect;

beforeEach(function () {
  global.div = document.createElement('div');
});

