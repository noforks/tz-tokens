const tokens = require('.')

const WRAP = tokens.find(x => x.ticker === 'WRAP')
console.log(WRAP)
// {
//   ticker: 'WRAP',
//   address: 'KT1FG63hhFtMEEEtmBSX2vuFmP87t9E7Ab4t',
//   decimals: 8
// }
