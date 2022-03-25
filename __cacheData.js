import nodeFetch from 'node-fetch'
import { writeFileSync } from 'fs'

import { getMetrics } from './src/metrics.js'
import entries from './src/entries.json' assert {type: "json"}

async function loadData() {
  console.log('entries:', entries)

  const data = {}

  for (const entry of entries) {
    const response = await nodeFetch(entry.url)

    if (!response.ok) {
      console.log('[Error] fetching:', entry)
      continue
    }

    const metadata = await response.json()
    const metrics = getMetrics(metadata)
    data[entry.url] = metrics
  }


  const loadedKeys = [...Object.keys(data)]
  console.log('data keys:', loadedKeys)
  if (loadedKeys.length) writeFileSync('./src/data.json', JSON.stringify(data))
}

loadData()
