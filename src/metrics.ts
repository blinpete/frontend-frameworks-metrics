import { formatTimeAgo, kFormatNumber, spaceFormatNumber } from './utils'
import type { RepoFragmentFragment as RepoFragment } from './graphql'

// -------------
// @primer/octicons API
// octicons guide:
// https://primer.style/octicons/guidelines/usage
// -------------

type RepoKey = Exclude<keyof RepoFragment, '__typename'>
type Handler<K extends RepoKey> = (value: RepoFragment[K]) => { value?: string | number }
type Metrics = { [K in RepoKey]: { alias: string; handler: Handler<K> } }

export const metrics: Metrics = {
  nameWithOwner: {
    alias: 'repo',
    handler: () => ({}),
  },
  stargazerCount: {
    alias: 'stars',
    handler: (value: number) => ({ value: spaceFormatNumber(value) }),
  },
  forkCount: {
    alias: 'forks',
    handler: (value: number) => ({ value: spaceFormatNumber(value) }),
  },
  createdAt: {
    alias: 'created',
    handler: (value: string) => ({ value: formatTimeAgo(new Date(value)) }),
  },
  updatedAt: {
    alias: 'updated',
    handler: (value: string) => ({ value: formatTimeAgo(new Date(value)) }),
  },
}

function applyHandler<K extends keyof Metrics>(name: K, value: RepoFragment[K]) {
  return { key: name, originalValue: value, value, ...metrics[name].handler(value) }
}

export function processData(obj: RepoFragment) {
  const subset: Record<string, unknown> = {}

  for (const k in metrics) {
    const kTyped = k as keyof Metrics
    subset[k] = applyHandler(kTyped, obj[kTyped])
  }

  return subset as RepoFragment
}
