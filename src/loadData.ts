import { getMetrics } from './metrics'
import entries from './entries.json'

import token from '../secret-token.json'
import { repoFragment } from './graphql'

// GitHub API Client
import { graphql } from '@octokit/graphql'
import type { Repository, Scalars } from '@octokit/graphql-schema'

export default async function loadData() {
  console.log('[loadData] entries:', entries)

  const ghAPI = graphql.defaults({
    headers: {
      authorization: 'token ' + token.value,
    },
  })

  const reposQuery = `#graphql
    {
      ${entries
        .map(
          (entry, idx) =>
            `repo_${idx}: repository(owner: "${entry.owner}", name: "${entry.repo}") {
            ...repoFragment
          }`
        )
        .join('\n')}
    }

    ${repoFragment}
  `

  const queryCheckLimit = `{
    viewer { login }
    rateLimit {
      limit
      cost
      remaining
      resetAt
    }
  }`

  console.log('query:', reposQuery)

  const response = await ghAPI<Record<string, Repository>>({
    query: reposQuery,
    // query: queryCheckLimit,
  })
  console.log('[loadData] response:', response)
  console.log('[loadData] response.createdAt:', typeof response.repo_1.createdAt)

  const data = [...Object.values(response)] //.map(getMetrics)

  return data
}
