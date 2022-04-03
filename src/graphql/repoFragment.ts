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

    # collaborators {
    #   totalCount
    # }

    # description
    # descriptionHTML

    # openGraphImageUrl # using owner.avatarUrl instead

    # languages(first: 5) {
    #   nodes {
    #     name
    #   }
    # }
    primaryLanguage {
      name
      color
    }

    commits: object(expression: "HEAD") {
      ... on Commit {
        history {
          totalCount
        }
      }
    }

    # ----------------- sizing
    diskUsage

    # isArchived
    # pullRequests {
    #   totalCount
    # }
  }
`
