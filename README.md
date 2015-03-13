# dom101

DOM manipulation utilities as single-files.<br>
*aka: Stop using jQuery.*

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
file ([example]) stand on their own and can be easily pasted into your project.

- **Semi-legacy support**: Minimum browser supported is IE8.

dom101 follows the conventions of [101].

<br>

## Reference

| jQuery                      | dom101                                 |
| ------                      | ------                                 |
| `$(el).addClass('...')`     | [addClass](#addclass)(el, '...')       |
| `$(el).hasClass('...')`     | [hasClass](#hasclass)(el, '...')       |
| `$(el).removeClass('...')`  | [removeClass](#removeclass)(el, '...') |
| `$(el).toggleClass('...')`  | [toggleClass](#toggleclass)(el, '...') |
| `$(el).remove()`            | [remove](#remove)(el)                  |
| `$(el).text()`              | [text](#text)(el)                      |
| `$(el).text('...')`         | [text](#text)(el, '...')               |
| `$(el).on('click', fn)`     | [on](#on)(el, 'click', fn)             |
| `$(fn)`                     | [ready](#ready)(fn)                    |
| `$(document).ready(fn)`     | [ready](#ready)(fn)                    |
| `$(el).prepend(child)`      | [prepend](#prepend)(el, child)         |
| `$(el).trigger('click')`    | [trigger](#trigger)(el, 'click')       |
| `$(el).closest('selector')` | [closest](#closest)(el, 'selector')    |
| `$(el).is('selector')`      | [matches](#matches)(el, 'selector')    |

### Non-DOM utilities

| jQuery                 | dom101                               |
| ------                 | ------                               |
| `$.each(list, fn)`     | [each](#each)(list, fn)              |
| `$.extend(...)`        | [extend](#extend)(...)               |
| `$.extend(true, ...)`  | [deepExtend](#deepextend)(...)       |
| `$.isPlainObject(obj)` | [isPlainObject](#isplainobject)(obj) |

### Aliases

Some aliases for DOM functions are also added for convenience.

| DOM                              | dom101                                     |
| ---                              | ------                                     |
| `document.querySelector(...)`    | [querySelector](#queryselector)(...)       |
| `document.querySelectorAll(...)` | [querySelectorAll](#queryselectorall)(...) |

### Not implemented

Some DOM helpers aren't implemented, because they're easy enough to do with plain DOM API:

| jQuery                              | DOM                                |
| ------                              | ---                                |
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
| `$el.prop('checked')`               | `el.checked`                       |
| `$el.prop('checked', true)`         | `el.checked = true`                |
| `$el.prop('disabled')`              | `el.disabled`                      |
| `$el.prop('disabled', true)`        | `el.disabled = true`               |

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

### closest
> `closest(el, selector)`

Looks for the closest ancestor of element `el` that matches `selector`.
Compare with [$.fn.closest](http://api.jquery.com/closest/).

```js
var closest = require('dom101/closest');

closest(input, 'label');
```

### deepExtend
> `deepExtend(dest, src1, [src2 ...])`

Extends object `dest` with properties from sources `src`.
Compare with [$.extend(true)](http://api.jquery.com/jquery.extend/).

Also consider [node-extend] for more complicated cases.
[node-extend]: http://npmjs.com/node-extend

```js
var deepExtend = require('dom101/deep-extend');
deepExtend({}, defaults, options);
```

### each
> `each(list, fn)`

Iterates through `list` (an array or an object). This is useful when dealing
with NodeLists like `document.querySelectorAll`.

```js
var each = require('dom101/each');
var qa = require('dom101/query-selector-all');

each(qa('.button'), function (el) {
  addClass('el', 'selected');
});
```

### extend
> `extend(dest, src1, [src2 ...])`

Extends object `dest` with properties from sources `src`.
Compare with [$.extend](http://api.jquery.com/jquery.extend/).

Also consider [node-extend] for more complicated cases.
[node-extend]: http://npmjs.com/node-extend

```js
var extend = require('dom101/extend');
extend({}, defaults, options);
```

### hasClass
> `hasClass(el, className)`

Checks if an element has a given class name.

```js
var hasClass = require('dom101/has-class');

el.className = 'selected active';
hasClass(el, 'active') //=> true
```

### isPlainObject
> `isPlainObject(obj)`

Checks if `obj` is an object created with `{}` or `new Object`.
Compare with [$.isPlainObject](http://api.jquery.com/jquery.isplainobject/).

```js
var isPlainObject = require('dom101/is-plain-object');

isPlainObject({}) //=> true
isPlainObject([]) //=> false
```

### matches
> `matches(el, selector)`

Checks if a given element `el` matches `selector`.
Compare with [$.fn.is](http://api.jquery.com/is/).

```js
var matches = require('dom101/matches');

matches(button, ':focus');
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
var each = require('dom101/each');
var qa = require('dom101/query-selector-all');

each(qa('.button'), function (el) {
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

### toggleClass
> `toggleClass(el, className, [value])`

Adds or removes a class name to an element. If `value` is provided,
this will add the class if it's `true` or remove if it's `false`.
Compare with `$.fn.toggleClass`.

```js
var toggleClass = require('dom101/toggle-class');

// toggles on or off:
toggleClass(el, 'active');

// with a value:
var isSelected = true;
toggleClass(el, 'selected', isSelected);
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

[jQuery]: http://jquery.com
[browserify]: http://browserify.org
[101]: https://www.npmjs.org/package/101
[youmightnotneedjquery.com]: http://youmightnotneedjquery.com/
[example]: add-class.js
[bonzo]: https://github.com/ded/bonzo
