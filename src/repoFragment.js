export default `#graphql
fragment repoFragment on Repository {
  nameWithOwner
  stargazerCount
  forkCount
  createdAt
}
`
