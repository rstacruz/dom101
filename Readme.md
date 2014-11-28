# mindom

DOM manipulation utilities as single-files. **(Work in progress)**

```js
var addClass = require('mindom/add-class');

el = document.createElement('div');
addClass(el, 'active');
```

----

## Why?

If you're writing a frontend library, it's best to avoid a dependency on
[jQuery]. This means having to write your own DOM manipulation code, though.

To speed you along, I've packaged all that typical DOM manipulation code into
many single-use JS files.

- **Slim builds**: you can use [browserify] to make your final bundle and it
will only bundle the functions it needs, instead of bundling a monolithic
jQuery.

- **Copy-pastable**: if you don't want to include mindom as a dependency, each
file ([example]) stands on their own and can be easily pasted into your project.

mindom follows the conventions of [101].

----

## Reference

| jQuery                     | mindom                   |
| --------                   | --------                 |
| `$(el).addClass('...')`    | `addClass(el, '...')`    |
| `$(el).removeClass('...')` | `removeClass(el, '...')` |
| `$(el).hasClass('...')`    | `hasClass(el, '...')`    |
| `$(el).remove()`           | `remove(el)`             |
| `$(el).text()`             | `text(el)`               |
| `$(el).text('...')`        | `text(el, '...')`        |
| `$(el).on('click', fn)`    | `on(el, 'click', fn)`    |
| `$(fn)`                    | `ready(fn)`              |
| `$(document).ready(fn)`    | `ready(fn)`              |

These are to be implemented soon (contributions welcome):

| jQuery                   | mindom                 |
| --------                 | --------               |
| `$(el).off('click', fn)` | `off(el, 'click', fn)` |
| `$(el).trigger('click')` | `trigger(el, 'click')` |
| `$(el).before(html)`     | `before(el, 'html')`   |
| `$(el).after(html)`      | `after(el, 'html')`    |
| `$(el).children()`       | `children(el)`         |
| `$(el).filter('...')`    | `filter(el, '...')`    |

Some aren't implemented, because they're easy enough to do with plain DOM:

| jQuery                              | DOM                                |
| --------                            | --------                           |
| `$(el).attr('tabindex')`            | `el.getAttribute('tabindex')`      |
| `$(el).attr('tabindex', 3)`         | `el.setAttribute('tabindex', 3)`   |
| `$(el).css('border-radius', '3px')` | `el.style.borderRadius = '3px'`    |
| `$(el).html()`                      | `el.innerHTML`                     |
| `$(el).html('...')`                 | `el.innerHTML = '...'`             |
| `$(el).parent()`                    | `el.parentNode`                    |
| `$(el).clone()`                     | `el.cloneNode(true)`               |
| `$('...')`                          | `document.querySelectorAll('...')` |
| `$el.find('...')`                   | `el.querySelectorAll('...')`       |

----

## API Reference

<!-- begin api -->

### addClass
> `addClass(el, className)`

Adds a class name to an element. Compare with `$.fn.addClass`.

```js
var addClass = require('mindom/add-class');
addClass(el, 'active');
```

### hasClass
> `hasClass(el, className)`

Checks if an element has a given class name.

```js
var hasClass = require('mindom/has-class');

el.className = 'selected active';
hasClass(el, 'active') //=> true
```

### on
> `on(el, event, fn)`

Adds an event handler.

```js
var on = require('mindom/on');
on(el, 'click', function () { ... });
```

### ready
> `ready(fn)`

On DOM ready.

```js
var ready = require('mindom/ready');
ready(function () { ... });
```

### removeClass
> `removeClass(el, className)`

Removes a classname.

```js
var removeClass = require('mindom/remove-class');

el.className = 'selected active';
removeClass(el, 'active');
el.className; //=> "selected"
```

### remove
> `remove(el)`

Removes an element from the DOM.

```js
var remove = require('mindom/remove');

remove(el);
```

### text
> `text(el, [value])`

Sets or gets text. Compare with `$.fn.text`.

```js
var text = require('mindom/text');
text(el, 'Hello world');
```

<!-- end api -->

----

## Similar projects

 * [jQuery] (of course)
 * [youmightnotneedjquery.com] — actually takes a bunch of code from here
 * [101]

## Acknowledgement

## Thanks

(c) 2014 Rico Sta. Cruz MIT

[jQuery]: http://jquery.com
[browserify]: http://browserify.org
[101]: https://www.npmjs.org/package/101
[youmightnotneedjquery.com]: http://youmightnotneedjquery.com/
[example]: add-class.js
