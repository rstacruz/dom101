require('./setup');

describe('addClass', function () {
  var addClass = require('../add-class');

  it('works', function () {
    addClass(div, 'hello');
    expect(div.className).eql(' hello');
  });

  it('compounds', function () {
    addClass(div, 'hello');
    addClass(div, 'world');
    expect(div.className).eql(' hello world');
  });
});

describe('hasClass', function () {
  var hasClass = require('../has-class');

  it('works', function () {
    div.className = 'hello';
    expect(hasClass(div, 'hello')).eq(true);
  });

  it('works for the start', function () {
    div.className = 'hello world';
    expect(hasClass(div, 'hello')).eq(true);
  });

  it('works for the end', function () {
    div.className = 'world hello';
    expect(hasClass(div, 'hello')).eq(true);
  });

  it('works for the middle', function () {
    div.className = 'world hello selected';
    expect(hasClass(div, 'hello')).eq(true);
  });

  it('doesn\'t search substrings', function () {
    div.className = 'world hello';
    expect(hasClass(div, 'hel')).eq(false);
  });
});
