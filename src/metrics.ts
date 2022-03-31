import { formatTimeAgo, kFormatNumber, spaceFormatNumber } from './utils'
import type { Repository } from '@octokit/graphql-schema'

// -------------
// @primer/octicons API
// octicons guide:
// https://primer.style/octicons/guidelines/usage
// -------------

import type { RepoFragmentFragment as RepoFragment } from './generated/githubSchema.graphql'

type MetricsEntry = {
  key: keyof RepoFragment
  alias: string
}

export const metrics: MetricsEntry[] = [
  // { key: 'homepageUrl', alias: 'logo' },
  // { key: 'size', alias: 'size' },

  // --------------------> counts
  { key: 'stargazerCount', alias: 'stars' },
  { key: 'forkCount', alias: 'forks' },
  // { key: 'open_issues_count', alias: 'issues' },
  // { key: 'subscribers_count', alias: 'watchers' },

  // --------------------> booleans: is
  // { key: "archived", alias: "" },
  // { key: "disabled", alias: "" },

  // { key: 'language', alias: 'language' },

  // --------------------> dates
  { key: 'createdAt', alias: 'created' },
  // { key: 'updated_at', alias: 'updated' },
  // { key: "pushed_at", alias: "" },

  // --------------------> booleans: has
  // "has_issues",
  // "has_projects",
  // "has_downloads",
  // "has_wiki",
  // "has_pages",
]

function handleValue(obj: Repository, key: keyof RepoFragment) {
  type Handler = {
    predicate: (key: string) => boolean
    render: (value: number | string) => number | string
  }

  // TODO: use type-safe Github API response
  // for now just using predicates based on semantics
  const handlers: Record<string, Handler> = {
    date: {
      predicate: key => key.endsWith('_at'),
      render: value => formatTimeAgo(new Date(value)),
    },

    k1000: {
      predicate: key => key.endsWith('_count'),
      // render: value => kFormatNumber(value)
      render: value => spaceFormatNumber(value),
    },
  }

  for (const [, h] of Object.entries(handlers)) {
    if (h.predicate(key)) return h.render(obj[key])
  }

  // fallback
  return obj[key]
}

export function getMetrics(obj: Repository) {
  const subset: Partial<RepoFragment> = {}

  for (const m of metrics) {
    subset[m.key] = handleValue(obj, m.key)
  }

  return subset as RepoFragment
}
