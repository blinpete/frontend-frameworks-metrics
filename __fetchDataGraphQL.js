import nodeFetch from 'node-fetch'
import { writeFileSync } from 'fs'

import { getMetrics } from './src/metrics.js'

// import entries from './src/entries.json' assert {type: "json"}
import token from './secret-token.json' assert {type: "json"}

import { graphql } from '@octokit/graphql'


async function loadData() {

  const ghAPI = graphql.defaults({
    headers: {
      authorization: 'token ' + token.value,
    },
  })

  const entries = [
    {owner: 'vuejs', repo: 'vue'},
    {owner: 'facebook', repo: 'react'},
  ]

  const query = `
    fragment repoMetadata on Repository {
      nameWithOwner
      stargazerCount
      createdAt
    }

    {
      ${entries.map((entry,idx) =>
        `repo_${idx}: repository(owner: "${entry.owner}", name: "${entry.repo}") {
          ...repoMetadata
        }`
      ).join('\n')}
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

  const response = await ghAPI({
    query: query,
    // query: queryCheckLimit,
  })
  console.log('[loadData] response:', response)
  console.log('[loadData] response.createdAt:', typeof response.repo_1.createdAt)


  // const response = await nodeFetch('https://api.github.com/graphql', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Accept': 'application/json',
  //   },
  //   body: JSON.stringify({query: `{
  //     repository(owner: $owner, name: $name) {
  //       nameWithOwner
  //       stargazers {
  //         totalCount
  //       }
  //       watchers {
  //         totalCount
  //       }
  //     }
  //   }`})
  // })
  // console.log('[loadData] response:', await response.json())
}

loadData()
