
// organization.avatar_url
// owner.avatar_url

import { formatTimeAgo, kFormatNumber, spaceFormatNumber } from "./utils"

// contributors count
// open pull-requests count

// last release version
// last release time

// -------------
// @primer/octicons API
// octicons guide:
// https://primer.style/octicons/guidelines/usage
// -------------

export const metrics = [
  { key: "homepage", alias: "logo" },
  { key: "size", alias: "size" },

  // --------------------> counts
  { key: "stargazers_count", alias: "stars" },
  { key: "forks_count", alias: "forks" },
  { key: "open_issues_count", alias: "issues" },
  { key: "subscribers_count", alias: "watchers" },

  // --------------------> booleans: is
  // { key: "archived", alias: "" },
  // { key: "disabled", alias: "" },

  { key: "language", alias: "language" },

  // --------------------> dates
  { key: "created_at", alias: "created" },
  { key: "updated_at", alias: "updated" },
  // { key: "pushed_at", alias: "" },

  // --------------------> booleans: has
  // "has_issues",
  // "has_projects",
  // "has_downloads",
  // "has_wiki",
  // "has_pages",
]

function handleValue(obj, key) {

  // TODO: use type-safe Github API response
  // for now just using predicates based on semantics
  const handlers = {
    date: {
      predicate: key => key.endsWith('_at'),
      render: value => formatTimeAgo(new Date(value))
    },

    k1000: {
      predicate: key => key.endsWith('_count'),
      // render: value => kFormatNumber(value)
      render: value => spaceFormatNumber(value)
    }
  }

  for (const [,h] of Object.entries(handlers)) {
    if (h.predicate(key)) return h.render(obj[key])
  }

  // fallback
  return obj[key]
}

export function getMetrics(obj) {
  const subset = {}
  for (const m of metrics) {
    subset[m.key] = handleValue(obj, m.key)
  }

  return subset
}
