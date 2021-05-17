const csv = require('csvtojson')
const fs = require('fs')

const filePath = './data/markets.csv'

function transform (x) {
  return {
    ...x,
    decimals: Number(x.decimals)
  }
}

async function main () {
  const json = await csv().fromFile(filePath)
  const data = json.map(transform)
  const writeable = JSON.stringify(data, null, 2)
  fs.writeFileSync('./dist/markets.json', writeable)
}

main ()
