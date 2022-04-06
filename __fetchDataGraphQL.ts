import loadData from './src/loadData'
import fs from 'fs'
import { fixLogos, fixNames } from './src/__crutches'

async function cacheData() {
  let data = await loadData()

  // post-process
  data = data.map(fixLogos).map(fixNames)

  fs.writeFileSync('./src/reposData.json', JSON.stringify(data, null, 2))
}

cacheData()
