# surround-string

Adds a prefix and a suffix to a string — but only if the string isn’t empty.

## Installation

Requires [Node.js](https://nodejs.org/) 4.0.0 or above.

```bash
npm i surround-string
```

## API

The module exports a single function.

### Parameters

1. `before` (string): The prefix to add.
2. `str` (string)
3. `after` (string): The suffix to add.

### Return Value

* If `str` is empty, returns an empty string.
* Otherwise, returns `before + str + after`.

## Example

```javascript
const surround = require('surround-string')

class Person {
  constructor (title, name) {
    this.title = title
    this.name = name
  }

  toString () {
    return surround('', this.title, ' ') + this.name
  }
}

(new Person('Mr.', 'Darcy')).toString() // 'Mr. Darcy'
(new Person('', 'Jane')).toString() // 'Jane'

```

## Related

* [remove-prefix](https://github.com/lamansky/remove-prefix)
* [remove-suffix](https://github.com/lamansky/remove-suffix)
