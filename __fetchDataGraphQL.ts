import loadData from './src/loadData'
import fs from 'fs'

async function cacheData() {
  const data = await loadData()

  fs.writeFileSync('./src/reposData.json', JSON.stringify(data, null, 2))
}

cacheData()
