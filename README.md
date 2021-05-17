# tz-tokens

Edit the CSV files in `data`, then run `yarn build`.

> yarn
> yarn build

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

Please keep the CSV file alphabetically ordered by token name (first column).

## Acknowledgments
