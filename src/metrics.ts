import { formatTimeAgo, kFormatNumber, spaceFormatNumber } from './utils'
import type { RepoFragmentFragment as RepoFragment } from './graphql'
import octicons from '@primer/octicons'

type RepoKey = Exclude<keyof RepoFragment, '__typename'>
type Handler = (repo: RepoFragment) => { value?: string | number }
type Metrics = { [K in RepoKey]: { alias: string; handler: Handler } }

export const metrics: Metrics = {
  nameWithOwner: {
    alias: 'framework',
    handler: repo => ({
      html: true,
      value: `
        <a href="${repo.homepageUrl}">
          <img src="${repo.owner.avatarUrl}" style="height: 30px"/>
        </a>
        <a href="${repo.url}">
          ${octicons['mark-github'].toSVG({ width: 24 })}
        </a>
      `,
    }),
  },
  stargazerCount: {
    alias: 'stars',
    handler: repo => ({ value: spaceFormatNumber(repo.stargazerCount) }),
  },
  forkCount: {
    alias: 'forks',
    handler: repo => ({ value: spaceFormatNumber(repo.forkCount) }),
  },
  createdAt: {
    alias: 'created',
    handler: repo => ({ value: formatTimeAgo(new Date(repo.createdAt)) }),
  },
  updatedAt: {
    alias: 'updated',
    handler: repo => ({ value: formatTimeAgo(new Date(repo.updatedAt)) }),
  },
}

function applyHandler<K extends RepoKey>(name: K, repo: RepoFragment) {
  return {
    key: name,
    originalValue: repo[name],
    value: repo[name],
    ...metrics[name].handler(repo),
  }
}

export function processData(obj: RepoFragment) {
  const subset: Record<string, unknown> = {}

  for (const k in metrics) {
    const kTyped = k as keyof Metrics
    subset[k] = applyHandler(kTyped, obj)
  }

  return subset as RepoFragment
}
