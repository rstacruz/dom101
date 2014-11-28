# mindom

DOM manipulation utilities as single-files. **(Work in progress)**

```js
var addClass = require('mindom/add-class');

el = document.createElement('div');
addClass(el, 'active');
```

<br>

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

- **Semi-legacy support**: Minimum browser supported is IE8.

mindom follows the conventions of [101].

<br>

## Reference

| jQuery                     | mindom                                 |
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
| `$(el).off('click', fn)`   | off(el, 'click', fn) *                 |
| `$(el).trigger('click')`   | trigger(el, 'click') *                 |
| `$(el).before(html)`       | before(el, 'html') *                   |
| `$(el).after(html)`        | after(el, 'html') *                    |
| `$(el).children()`         | children(el) *                         |
| `$(el).filter('...')`      | filter(el, '...') *                    |

(`*` = to be implemented soon. contributions welcome)

### Not implemented

Some DOM helpers aren't implemented, because they're easy enough to do with plain DOM API:

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
| `$el.blur()`                        | `el.blur()`                        |
| `$el.focus()`                       | `el.focus()`                       |
| `$el.append(child)`                 | `el.appendChild(child)`            |

<br>

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

on(el, 'click', function () {
  ...
});
```

### prepend
> `prepend(el, child)`

Prepends a `child` into a parent `el`. Compare with `$.fn.prepend`.

```js
var prepend = require('mindom/prepend');

prepend(el, child);
```

### ready
> `ready(fn)`

Executes `fn` when the DOM is ready.

```js
var ready = require('mindom/ready');

ready(function () {
  ...
});
```

### removeClass
> `removeClass(el, className)`

Removes a classname.

```js
var removeClass = require('mindom/remove-class');

el.className = 'selected active';
removeClass(el, 'active');

el.className
=> "selected"
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

text(el, 'Hello');

text(el)
=> "Hello"
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

(c) 2014 Rico Sta. Cruz MIT

[jQuery]: http://jquery.com
[browserify]: http://browserify.org
[101]: https://www.npmjs.org/package/101
[youmightnotneedjquery.com]: http://youmightnotneedjquery.com/
[example]: add-class.js
[bonzo]: https://github.com/ded/bonzo
