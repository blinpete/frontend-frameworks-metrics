import gql from 'graphql-tag'

export default `#graphql
  fragment repoFragment on Repository {
    nameWithOwner
    stargazerCount
    forkCount
    updatedAt
  }
`
