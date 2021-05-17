# tz-tokens

Library of the Tezos token ecosystem.

## Use

Install with:

> yarn add tz-tokens

or

> npm i tz-tokens

Example:

```js
const tokens = require('tz-tokens')
const WRAP = tokens.find(x => x.ticker === 'WRAP')
console.log(WRAP)
// {
//   ticker: 'WRAP',
//   address: 'KT1FG63hhFtMEEEtmBSX2vuFmP87t9E7Ab4t',
//   decimals: 8
// }
```

## Contributing

> yarn

Edit the CSV files in `data`, then run `yarn build`.

> yarn build

Please keep the CSV file alphabetically ordered by token name (first column).

## Acknowledgments

Original token list from @ztepler9000 ipython notebook.
