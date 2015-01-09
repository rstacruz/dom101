# dom101

DOM manipulation utilities as single-files.

```js
var addClass = require('dom101/add-class');

el = document.createElement('div');
addClass(el, 'active');
```

[![Status](https://travis-ci.org/rstacruz/dom101.svg?branch=master)](https://travis-ci.org/rstacruz/dom101)  

<br>

## Why?

If you're writing a frontend library, it's best to avoid a dependency on
[jQuery]. This means having to write your own DOM manipulation code, though.

To speed you along, I've packaged all that typical DOM manipulation code into
many single-use JS files.

- **Slim builds**: you can use [browserify] to make your final bundle and it
will only bundle the functions it needs, instead of bundling a monolithic
jQuery.

- **Copy-pastable**: if you don't want to include dom101 as a dependency, each
file ([example]) stands on their own and can be easily pasted into your project.

- **Semi-legacy support**: Minimum browser supported is IE8.

dom101 follows the conventions of [101].

<br>

## Reference

| jQuery                     | dom101                                 |
| --------                   | --------                               |
| `$(el).addClass('...')`    | [addClass](#addclass)(el, '...')       |
| `$(el).removeClass('...')` | [removeClass](#removeclass)(el, '...') |
| `$(el).hasClass('...')`    | [hasClass](#hasclass)(el, '...')       |
| `$(el).remove()`           | [remove](#remove)(el)                  |
| `$(el).text()`             | [text](#text)(el)                      |
| `$(el).text('...')`        | [text](#text)(el, '...')               |
| `$(el).on('click', fn)`    | [on](#on)(el, 'click', fn)             |
| `$(fn)`                    | [ready](#ready)(fn)                    |
| `$(document).ready(fn)`    | [ready](#ready)(fn)                    |
| `$(el).prepend(child)`     | [prepend](#prepend)(el, child)         |
| `$(el).trigger('click')`   | [trigger](#trigger)(el, 'click')       |
| `$(el).off('click', fn)`   | off(el, 'click', fn) *                 |
| `$(el).before(html)`       | before(el, 'html') *                   |
| `$(el).after(html)`        | after(el, 'html') *                    |

(`*` = to be implemented soon. contributions welcome)

### Aliases

Some aliases for DOM functions are also added for convenience.

| DOM                              | dom101                                     |
| ---                              | ------                                     |
| `document.querySelector(...)`    | [querySelector](#queryselector)(...)       |
| `document.querySelectorAll(...)` | [querySelectorAll](#queryselectorall)(...) |

### Not implemented

Some DOM helpers aren't implemented, because they're easy enough to do with plain DOM API:

| jQuery                              | DOM                                |
| --------                            | --------                           |
| `$('...')`                          | `document.querySelectorAll('...')` |
| `$(el).attr('tabindex')`            | `el.getAttribute('tabindex')`      |
| `$(el).attr('tabindex', 3)`         | `el.setAttribute('tabindex', 3)`   |
| `$(el).css('border-radius', '3px')` | `el.style.borderRadius = '3px'`    |
| `$(el).html()`                      | `el.innerHTML`                     |
| `$(el).html('...')`                 | `el.innerHTML = '...'`             |
| `$(el).parent()`                    | `el.parentNode`                    |
| `$(el).clone()`                     | `el.cloneNode(true)`               |
| `$(el).children()`                  | `el.children`                      |
| `$el.find('...')`                   | `el.querySelectorAll('...')`       |
| `$el.blur()`                        | `el.blur()`                        |
| `$el.focus()`                       | `el.focus()`                       |
| `$el.append(child)`                 | `el.appendChild(child)`            |

<br>

## Install

dom101 is available via [npm]. Perfect for use with [browserify].

    $ npm install --save dom101

[npm]: https://www.npmjs.org/package/dom101
[browserify]: https://browserify.org

[![npm version](http://img.shields.io/npm/v/dom101.svg?style=flat)](https://npmjs.org/package/dom101 "View this project on npm")

<br>

## API Reference

<!-- begin api -->

### addClass
> `addClass(el, className)`

Adds a class name to an element. Compare with `$.fn.addClass`.

```js
var addClass = require('dom101/add-class');

addClass(el, 'active');
```

### hasClass
> `hasClass(el, className)`

Checks if an element has a given class name.

```js
var hasClass = require('dom101/has-class');

el.className = 'selected active';
hasClass(el, 'active') //=> true
```

### on
> `on(el, event, fn)`

Adds an event handler.

```js
var on = require('dom101/on');

on(el, 'click', function () {
  ...
});
```

### prepend
> `prepend(el, child)`

Prepends a `child` into a parent `el`. Compare with `$.fn.prepend`.

```js
var prepend = require('dom101/prepend');

prepend(el, child);
```

### querySelectorAll
> `querySelectorAll(query)`

Convenience function to access `document.querySelectorAll`.

```js
var qa = require('dom101/query-selector-all');

qa('.button').forEach(function (el) {
  addClass('el', 'selected');
});
```

### querySelector
> `querySelector(query)`

Convenience function to access `document.querySelector`.

```js
var q = require('dom101/query-selector');
addClass(q('#instructions'), 'hidden');
```

### ready
> `ready(fn)`

Executes `fn` when the DOM is ready.

```js
var ready = require('dom101/ready');

ready(function () {
  ...
});
```

### removeClass
> `removeClass(el, className)`

Removes a classname.

```js
var removeClass = require('dom101/remove-class');

el.className = 'selected active';
removeClass(el, 'active');

el.className
=> "selected"
```

### remove
> `remove(el)`

Removes an element from the DOM.

```js
var remove = require('dom101/remove');

remove(el);
```

### scrollTop
> `scrollTop()`

Returns the scroll top value.

```js
var scrollTop = require('dom101/scroll-top');
alert(scrollTop());
```

### text
> `text(el, [value])`

Sets or gets text. Compare with `$.fn.text`.

```js
var text = require('dom101/text');

text(el, 'Hello');

text(el)
=> "Hello"
```

### trigger
> `trigger(el, event)`

Triggers an event `event`. Only works for native events.

```js
var trigger = require('dom101/trigger');

el = document.querySelector('#button');
trigger(el, 'click');
```

<!-- end api -->

<br>

## Similar projects

 * [jQuery] (of course)
 * [youmightnotneedjquery.com] — actually takes a bunch of code from here
 * [101]
 * [bonzo]

<br>

## Thanks

**dom101** © 2014+, Rico Sta. Cruz. Released under the [MIT] License.<br>
Authored and maintained by Rico Sta. Cruz with help from contributors ([list][contributors]).

> [ricostacruz.com](http://ricostacruz.com) &nbsp;&middot;&nbsp;
> GitHub [@rstacruz](https://github.com/rstacruz) &nbsp;&middot;&nbsp;
> Twitter [@rstacruz](https://twitter.com/rstacruz)

[MIT]: http://mit-license.org/
[contributors]: http://github.com/rstacruz/dom101/contributors
