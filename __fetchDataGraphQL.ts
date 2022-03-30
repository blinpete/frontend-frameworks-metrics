// import nodeFetch from 'node-fetch'
// import { writeFileSync } from 'fs'

// import { getMetrics } from './src/metrics'

import entries from './src/entries.json'
import token from './secret-token.json'

// import repoFragment from "./src/repo.fragment.graphql"
import repoFragment from './src/repoFragment.js'

import { graphql } from '@octokit/graphql'
import { Repository, Scalars } from '@octokit/graphql-schema'

async function loadData() {
  const ghAPI = graphql.defaults({
    headers: {
      authorization: 'token ' + token.value,
    },
  })

  const query = `#graphql
    ${repoFragment}

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

  const response = await ghAPI<Record<string, Repository>>({
    query: query,
    // query: queryCheckLimit,
  })
  console.log('[loadData] response:', response)
  console.log('[loadData] response.createdAt:', typeof response.repo_1.createdAt)
}

loadData()
