# mindom

Mini dom.

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

Some aren't implemented, because they're easy enough:

| jQuery                              | DOM                              |
| --------                            | --------                         |
| `$(el).attr('tabindex')`            | `el.getAttribute('tabindex')`    |
| `$(el).attr('tabindex', 3)`         | `el.setAttribute('tabindex', 3)` |
| `$(el).css('border-radius', '3px')` | `el.style.borderRadius = '3px'`  |
| `$(el).html()`                      | `el.innerHTML`                   |
| `$(el).html('...')`                 | `el.innerHTML = '...'`           |
| `$(el).parent()`                    | `el.parentNode`                  |

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

 * jQuery (of course)
 * [youmightnotneedjquery.com](http://youmightnotneedjquery.com/) — actually takes a bunch of code from here
 * [101](https://www.npmjs.org/package/101)

## Acknowledgement

## Thanks

(c) 2014 Rico Sta. Cruz MIT
