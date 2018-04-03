# third-party-decode [![Build Status](https://travis-ci.org/paulirish/third-party-decode.svg?branch=master)](https://travis-ci.org/paulirish/third-party-decode) [![NPM third-party-decode package](https://img.shields.io/npm/v/third-party-decode.svg)](https://npmjs.org/package/third-party-decode)

## Why?

Because you want to decode URLs to figure out what 3rd party they are. The data comes from the [Chrome DevTools 3rd Party Badges](https://developers.google.com/web/updates/2017/05/devtools-release-notes#badges).

## Usage

```js
const decode3P = require('third-party-decode');

const entry = decode3P('http://cdn.krxd.net');
console.log(entry.name); // 'Krux Digital, Inc.'
console.log(entry.type); // 'analytics'
```

## Install

```
$ npm install third-party-decode
```


## API

### decode3P(url: string)

* Returns `null` if no third party entry found
* Otherwise returns `{{name: string, type: string}}`


## CLI

You can also run this from the command line. It will emit the JSON results to stdout.

```sh
node index.js "http://cdn.krxd.net"
# {
#   "name": "Krux Digital, Inc.",
#   "type": "analytics"
# }
```

## External
Visit https://third-party-decode.glitch.me/ to view the results in your browser.
You can also send a request to `https://third-party-decode.glitch.me/badge?url=https://cdn.krxd.net` which returns results in JSON format as follows:

```js
{
    "name": "Krux Digital, Inc.",
    "type": "analytics",
    "badge": "KD"
}
```

## License

MIT © [Paul Irish](https://github.com/paulirish)
