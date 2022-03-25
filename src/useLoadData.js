import keys from './keys'
import entries from './entries.json'

import __localData from './data.json'
async function mockedFetch(url) {
  console.log('[mockedFetch]', url)
  const mock = {
    ok: !!__localData[url],
    json: async () => __localData[url]
  }
  return mock
}

function getMetrics(obj) {
  const subset = {}
  for (const k of keys)
    subset[k] = obj[k]

  return subset
}

export default async function loadData() {
  console.log('[loadData] entries:', entries)

  const data = []
  for (const entry of entries) {
    // const response = await fetch(entry.url)
    const response = await mockedFetch(entry.url)

    if (!response.ok) {
      console.error('[Error] fetching:', entry)
      continue
    }

    const metadata = await response.json()
    const metrics = getMetrics(metadata)
    data.push(metrics)
  }

  return data
}
