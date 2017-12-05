# tunebox
Config loader for node.js applications

## Installation

```npm i tunebox```

## How to use?

Init tunebox:
```
const tunebox = require('tunebox')

tunebox.init({
  baseDir: __dirname,
  config: {
    development: 'path/to/config.dev.js',
    production: 'path/to/config.prod.js',
    default: 'path/to/config.dev.js'
  }
})
```

Access to config:
```
const config = require('tunebox').config
````

## How it works?

tunebox load config by process.env.NODE_ENV value
