var global = (function(){ return this; })();

if (typeof require === 'function') {
  require('mocha-jsdom')();
  global.mdom = require('../index');
  global.expect = require('chai').expect;
} else {
  window.expect = chai.expect;
  if (typeof window.mdom === 'undefined') {
    alert('build file not working.\ntry running "make test/build.js" first.');
  }
}

/*
 * helpers
 */

function n (string) {
  var klass = string.replace(/  +/g, ' ').trim().split(" ");
  klass = uniq(klass);
  return klass.join(" ");
}

function uniq (arr) {
  var obj = {};
  var list = [];

  for (var i = 0, len = arr.length; i < len; i++) {
    var item = arr[i];
    if (obj[item]) continue;
    obj[item] = true;
    list.push(item);
  }

  return list;
}

/*
 * beforeeach
 */

beforeEach(function () {
  global.div = document.createElement('div');
});

/*
 * tests
 */

describe('addClass', function () {
  var addClass = mdom.addClass;

  it('works', function () {
    addClass(div, 'hello');
    expect(n(div.className)).eql('hello');
  });

  it('compounds', function () {
    addClass(div, 'hello');
    addClass(div, 'world');
    expect(n(div.className)).eql('hello world');
  });
});

describe('toggleClass', function () {
  var toggleClass = mdom.toggleClass;

  it('works', function () {
    toggleClass(div, 'hello');
    expect(n(div.className)).eql('hello');
  });

  it('compounds', function () {
    toggleClass(div, 'hello');
    toggleClass(div, 'hello');
    expect(n(div.className)).eql('');
  });

  it('works with value = true', function () {
    toggleClass(div, 'hello', true);
    expect(n(div.className)).eql('hello');
  });

  it('works with value = true even if it already exists', function () {
    div.className = 'hello';
    toggleClass(div, 'hello', true);
    expect(n(div.className)).eql('hello');
  });

  it('works with value = false if it already exists', function () {
    div.className = 'hello';
    toggleClass(div, 'hello', false);
    expect(n(div.className)).eql('');
  });

  it('works with value = false even if it doesn\'t exist', function () {
    toggleClass(div, 'hello', false);
    expect(n(div.className)).eql('');
  });
});

describe('hasClass', function () {
  var hasClass = mdom.hasClass;

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
  var remove = mdom.remove;
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
  var text = mdom.text;

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
  var removeClass = mdom.removeClass;

  it('works at the end', function () {
    div.className = 'hello world';
    removeClass(div, 'world');
    expect(n(div.className)).eql('hello');
  });

  it('works at the start', function () {
    div.className = 'hello world';
    removeClass(div, 'hello');
    expect(n(div.className)).eql('world');
  });

  it('works at the middle', function () {
    div.className = 'hello world';
    removeClass(div, 'there');
    expect(n(div.className)).eql('hello world');
  });

  it('works for single classes', function () {
    div.className = 'abc';
    removeClass(div, 'abc');
    expect(n(div.className)).eql('');
  });
});

describe('prepend', function () {
  var prepend = mdom.prepend;

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
  var on = mdom.on;
  var trigger = mdom.trigger;

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

describe('querySelector', function () {
  var div;

  beforeEach(function () {
    div = document.createElement('div');
    div.className = 'hello';
    document.body.appendChild(div);
  });

  afterEach(function () {
    document.body.removeChild(div);
  });

  it('works', function () {
    expect(mdom.querySelector('.hello')).to.eql(div);
  });
});

describe('each', function () {
  it('works with arrays', function () {
    var values = '';
    mdom.each([7,8,9], function (val) { values += '.' + val; });
    expect(values).eql('.7.8.9');
  });

  it('works with array keys', function () {
    var keys = '';
    mdom.each([9,9,9], function (_, key) { keys += '.' + key; });
    expect(keys).eql('.0.1.2');
  });

  it('works with objects', function () {
    var values = '';
    mdom.each({a:8, b:9}, function (val) { values += '.' + val; });
    expect(values).eql('.8.9');
  });

  it('works with object keys', function () {
    var keys = '';
    mdom.each({a:1, b:2}, function (_, key) { keys += '.' + key; });
    expect(keys).eql('.a.b');
  });
});
