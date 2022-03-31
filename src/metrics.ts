import { formatTimeAgo, kFormatNumber, spaceFormatNumber } from './utils'
import type { RepoFragmentFragment as RepoFragment } from './graphql'

// -------------
// @primer/octicons API
// octicons guide:
// https://primer.style/octicons/guidelines/usage
// -------------

type RepoKey = Exclude<keyof RepoFragment, '__typename'>
type Handlers = {
  // [K in keyof RepoFragment]: (value: RepoFragment[K]) => RepoFieldView<K>
  [K in RepoKey]: (value: RepoFragment[K]) => { value?: string | number }
}
type Metrics = { [K in RepoKey]: string }

const handlers: Handlers = {
  nameWithOwner: () => ({}),
  stargazerCount: (value: number) => ({ value: spaceFormatNumber(value) }),
  forkCount: (value: number) => ({ value: spaceFormatNumber(value) }),
  updatedAt: (value: string) => ({ value: formatTimeAgo(new Date(value)) }),
}

function applyHandler<K extends RepoKey>(name: K, value: RepoFragment[K]) {
  return { key: name, originalValue: value, value, ...handlers[name](value) }
}

export const MetricsAliases: Metrics = {
  nameWithOwner: 'repo',
  stargazerCount: 'stars',
  forkCount: 'forks',
  updatedAt: 'updated',
}

export function processData(obj: RepoFragment) {
  const subset: Record<string, unknown> = {}

  for (const [k, v] of Object.entries(obj)) subset[k] = applyHandler(k as RepoKey, v)

  return subset as RepoFragment
}
