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

    languages(first: 3, orderBy: { field: SIZE, direction: DESC }) {
      edges {
        size
        node {
          name
          color
        }
      }
      totalSize
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
