import { formatTimeAgo, getYear, kFormatNumber, spaceFormatNumber, capitalize } from './utils'
import type { RepoFragmentFragment as RepoFragment, LanguageEdge } from './graphql'
import octicons from '@primer/octicons'

export type Metric = {
  sortValue?: number
  html?: boolean
  value: string | number | undefined
}

export const metricsSortable = [
  'stars',
  'forks',
  'issues',
  'commits',
  'PRs',
  'created',
  'updated',
  // 'version',
] as const

export const metricsNonSortable = ['repo', 'framework', 'version', 'languages'] as const

type ExtractorNameSortable = typeof metricsSortable[number]
type ExtractorNameNonSortable = typeof metricsNonSortable[number]
export type ExtractorName = ExtractorNameNonSortable | ExtractorNameSortable

type RequireKeys<T, R extends keyof T> = T & { [K in R]-?: T[K] }

type ExtractorBase = {
  icon?: string // octicon to show in the title
  shortDesc: string
  fullDesc?: string // tooltip
}

interface ExtractorSortable extends ExtractorBase {
  name: ExtractorNameSortable
  extract: (repo: RepoFragment) => RequireKeys<Metric, 'sortValue'>
}

interface ExtractorNonsortable extends ExtractorBase {
  name: ExtractorNameNonSortable
  extract: (repo: RepoFragment) => Metric
}

type Extractor = ExtractorNonsortable | ExtractorSortable

export type FrameworkMetrics = Record<ExtractorName, Metric>

export const metrics: Extractor[] = [
  {
    name: 'repo',
    shortDesc: 'link',
    extract: repo => ({
      html: true,
      value: `
        <a href="${repo.url}" target="_blank">
          ${octicons['mark-github'].toSVG({ width: 18 })}
        </a>
      `,
    }),
  },
  {
    name: 'framework',
    shortDesc: 'logo name link',
    extract: repo => ({
      html: true,
      value: `
        <a href="${repo.homepageUrl}" target="_blank">
          <img src="${repo.owner.avatarUrl}" style="height: 24px"/>
          <span>${capitalize(repo.name)}</span>
        </a>
        `,
      // <span class="version">${repo.latestRelease?.tagName || ''}</span>
    }),
  },
  {
    name: 'stars',
    shortDesc: 'count',
    icon: octicons.star.toSVG(),
    extract: repo => ({
      value: spaceFormatNumber(repo.stargazerCount),
      sortValue: repo.stargazerCount,
    }),
  },
  {
    name: 'forks',
    shortDesc: 'count',
    icon: octicons['repo-forked'].toSVG(),
    extract: repo => ({
      value: spaceFormatNumber(repo.forkCount),
      sortValue: repo.forkCount,
    }),
  },
  {
    name: 'issues',
    shortDesc: 'open',
    icon: octicons['issue-opened'].toSVG(),
    extract: repo => ({
      value: spaceFormatNumber(repo.issues.totalCount),
      sortValue: repo.issues.totalCount,
    }),
  },
  {
    name: 'PRs',
    shortDesc: 'open',
    icon: octicons['git-pull-request'].toSVG(),
    extract: repo => ({
      value: repo.pullRequests.totalCount,
      sortValue: repo.pullRequests.totalCount,
    }),
  },
  {
    name: 'commits',
    shortDesc: 'main branch',
    icon: octicons['git-commit'].toSVG(),
    extract: repo => {
      if (!(repo.commits && 'history' in repo.commits))
        return {
          value: undefined,
          sortValue: 0,
        }

      return {
        value: spaceFormatNumber(repo.commits.history.totalCount),
        sortValue: repo.commits.history.totalCount,
      }
    },
  },
  {
    name: 'version',
    shortDesc: 'latest',
    extract: repo => {
      return {
        html: true,
        value: `
          <div class="tagName">${repo.latestRelease?.tagName || ''}</div>
          <div class="publishedAt">${formatTimeAgo(repo.latestRelease?.publishedAt)}</div>
        `,
      }
    },
  },
  {
    name: 'languages',
    shortDesc: 'dominants',
    extract: repo => {
      const fallback = { value: undefined }

      const { edges, totalSize } = repo?.languages || {}
      if (!edges || !totalSize || edges.some(e => e == null)) return fallback

      const primary = edges[0]
      if (!primary) return fallback

      // heuristic to pick major languages
      const isDominant = (le: LanguageEdge) => le.size / primary.size > 0.7

      const h = ({ size, node: { color, name } }: LanguageEdge) => `
      <div>
        <span style="color: ${color}">${octicons['dot-fill'].toSVG()}</span>
        <span>${name}</span>
        <span class="percent muted">${Math.round((size * 100) / totalSize)}%</span>
      </div>
      `

      return {
        html: true,
        value: (edges as LanguageEdge[]).filter(isDominant).map(h).join(''),
      }
    },
  },
  {
    name: 'created',
    shortDesc: 'time ago',
    extract: repo => ({
      value: formatTimeAgo(repo.createdAt),
      sortValue: new Date(repo.createdAt).getTime(),
    }),
  },
  {
    name: 'updated',
    shortDesc: 'time ago',
    extract: repo => ({
      value: formatTimeAgo(repo.updatedAt),
      sortValue: repo.updatedAt,
    }),
  },
]

export function processData(obj: RepoFragment) {
  const subset: Record<string, unknown> = {}

  for (const m of metrics) {
    subset[m.name] = m.extract(obj)
  }

  return subset as FrameworkMetrics
}
