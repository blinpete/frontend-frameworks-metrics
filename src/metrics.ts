import { formatTimeAgo, kFormatNumber, spaceFormatNumber } from './utils'
import type { RepoFragmentFragment as RepoFragment } from './graphql'
import octicons from '@primer/octicons'

export type Metric = {
  sortValue?: number
  html?: boolean
  value: string | number
}

export type ExtractorName = string
type Extractor = {
  name: ExtractorName
  extract: (repo: RepoFragment) => Metric
}

export type FrameworkMetrics = { [name: ExtractorName]: Metric }

export const metrics: Extractor[] = [
  {
    name: 'repo',
    extract: repo => ({
      html: true,
      value: `
        <a href="${repo.url}">
          ${octicons['mark-github'].toSVG({ width: 24 })}
        </a>
      `,
    }),
  },
  {
    name: 'framework',
    extract: repo => ({
      html: true,
      value: `
        <a href="${repo.homepageUrl}">
          <img src="${repo.owner.avatarUrl}" style="height: 30px"/>
          ${repo.name}
        </a>
      `,
    }),
  },
  {
    name: 'stars',
    extract: repo => ({ value: spaceFormatNumber(repo.stargazerCount) }),
  },
  {
    name: 'forks',
    extract: repo => ({ value: spaceFormatNumber(repo.forkCount) }),
  },
  {
    name: 'version',
    extract: repo => ({
      // value: repo.latestRelease?.tagName + ' = ' + formatTimeAgo(repo.latestRelease?.publishedAt),
      value: repo.latestRelease?.tagName,
    }),
  },
  {
    name: 'open issues',
    extract: repo => ({ value: repo.issues.totalCount }),
  },
  {
    name: 'open PRs',
    extract: repo => ({ value: repo.pullRequests.totalCount }),
  },
  {
    name: 'language',
    extract: repo => ({ value: repo.primaryLanguage?.name }),
  },
  {
    name: 'created',
    extract: repo => ({ value: formatTimeAgo(repo.createdAt) }),
  },
  {
    name: 'updated',
    extract: repo => ({ value: formatTimeAgo(repo.updatedAt) }),
  },
]

export function processData(obj: RepoFragment) {
  const subset: Record<string, unknown> = {}

  for (const m of metrics) {
    subset[m.name] = m.extract(obj)
  }

  return subset as FrameworkMetrics
}
