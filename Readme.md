# mindom

Mini dom.

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

### remove
> `remove(el)`

Removes an element from the DOM.

```js
var remove = require('mindom/remove');

remove(el);
```


<!-- end api -->

:)
