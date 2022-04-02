export default /* GraphQL */ `
  fragment repoFragment on Repository {
    name
    homepageUrl
    stargazerCount
    forkCount
    createdAt
    updatedAt
    url
    owner {
      avatarUrl
    }
    latestRelease {
      tagName
      publishedAt
    }
    issues(states: OPEN) {
      totalCount
    }
    pullRequests(states: OPEN) {
      totalCount
    }
    milestones(states: OPEN) {
      totalCount
    }

    # openGraphImageUrl # using owner.avatarUrl instead

    # languages(first: 5) {
    #   nodes {
    #     name
    #   }
    # }
    primaryLanguage {
      name
    }

    # object(expression:"master") {
    #   ... on Commit {
    #     history {
    #       totalCount
    #     }
    #   }
    # }

    # diskUsage
    # isArchived
    # pullRequests {
    #   totalCount
    # }
  }
`
