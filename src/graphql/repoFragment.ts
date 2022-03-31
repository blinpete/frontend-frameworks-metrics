export default /* GraphQL */ `
  fragment repoFragment on Repository {
    nameWithOwner
    homepageUrl
    stargazerCount
    forkCount
    createdAt
    updatedAt
    url
    owner {
      avatarUrl
    }
  }
`
