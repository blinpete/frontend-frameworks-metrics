export default /* GraphQL */ `
  fragment repoFragment on Repository {
    nameWithOwner
    stargazerCount
    forkCount
    updatedAt
  }
`
