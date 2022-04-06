import entries from './entries.json'

import token from '../secret-token.json'
import { repoFragment, type RepoFragmentFragment } from './graphql'

// GitHub API Client
import { graphql } from '@octokit/graphql'

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

  const response = await ghAPI<Record<string, RepoFragmentFragment>>({
    query: reposQuery,
    // query: queryCheckLimit,
  })
  console.log('[loadData] response:', response)

  const data = [...Object.values(response)]
  return data
}
