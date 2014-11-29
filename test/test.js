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

describe('remove', function () {
  var remove = require('../remove');
  var sub;

  beforeEach(function () {
    sub = document.createElement('span');
    div.appendChild(sub);
  });

  it('appending works', function () {
    expect(sub.parentNode).eql(div);
  });

  it('works', function () {
    remove(sub);
    expect(sub.parentNode).be.null;
  });

  it('works with null', function () {
    remove(null);
  });
});

describe('text', function () {
  var text = require('../text');

  it('sets', function () {
    text(div, 'hello');
    expect(div.outerHTML).eql('<div>hello</div>');
  });

  it('sets and gets', function () {
    text(div, 'hello');
    expect(text(div)).eql('hello');
  });
});

describe('removeClass', function () {
  var removeClass = require('../remove-class');

  it('works at the end', function () {
    div.className = 'hello world';
    removeClass(div, 'world');
    expect(div.className).eql('hello  ');
  });

  it('works at the start', function () {
    div.className = 'hello world';
    removeClass(div, 'hello');
    expect(div.className).eql('  world');
  });

  it('works at the middle', function () {
    div.className = 'hello world';
    removeClass(div, 'there');
    expect(div.className).eql('hello world');
  });

  it('works for single classes', function () {
    div.className = 'abc';
    removeClass(div, 'abc');
    expect(div.className).eql(' ');
  });
});

describe('prepend', function () {
  var prepend = require('../prepend');

  beforeEach(function () {
    global.child = document.createElement('div');
  });

  it('works for empty divs', function () {
    prepend(div, child);
    expect(div.firstChild).eql(child);
  });

  it('works for non-empty divs', function () {
    var first = document.createElement('div');
    div.appendChild(first);
    prepend(div, child);
    expect(div.firstChild).eql(child);
  });
});

describe('on, trigger', function () {
  var on = require('../on');
  var trigger = require('../trigger');

  it('works with input onchange', function (next) {
    var input = document.createElement('input');

    on(input, 'change', function () {
      next();
    });

    trigger(input, 'change');
  });

  it('works with div onclick', function (next) {
    on(div, 'click', function () {
      next();
    });

    trigger(div, 'click');
  });
});
