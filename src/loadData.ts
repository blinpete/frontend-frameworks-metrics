import entries from './entries.json'

import { repoFragment, type RepoFragmentFragment } from './graphql'

// GitHub API Client
import { graphql } from '@octokit/graphql'

import dotenv from 'dotenv'
dotenv.config()

export default async function loadData() {
  console.log('[loadData] entries:', entries)

  const TOKEN = process.env.TOKEN
  if (!TOKEN) throw new Error('TOKEN not found. Check secrets.GITHUB_TOKEN or local `.env`.')

  const ghAPI = graphql.defaults({
    headers: {
      authorization: 'token ' + TOKEN,
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
