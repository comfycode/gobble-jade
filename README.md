# gobble-jade

Compile [jade](http://jade-lang.com/) templates with gobble.

## Installation

First, you need to have gobble installed - see the [gobble readme](https://github.com/gobblejs/gobble) for details. Then,

```bash
npm i -D gobble-jade
```

## Usage

**gobblefile.js**

```js
var gobble = require('gobble')
module.exports = gobble('templates').transform('jade'/*, options*/)
```

See the [jade options](http://jade-lang.com/api/) for details.

## License

MIT
