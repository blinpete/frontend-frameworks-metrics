import reposData from './reposData.json'
import { processData } from './metrics'

export default async function () {
  console.log('[useData] reposData:', reposData)
  return reposData.map(processData)
}
