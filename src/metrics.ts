import { formatTimeAgo, getYear, kFormatNumber, spaceFormatNumber, capitalize } from './utils'
import type { RepoFragmentFragment as RepoFragment } from './graphql'
import octicons from '@primer/octicons'

export type Metric = {
  sortValue?: number
  html?: boolean
  value: string | number | undefined
}

export type ExtractorName = string
type Extractor = {
  name: ExtractorName // title
  icon?: string // octicon to show in the title
  shortDesc?: string
  fullDesc?: string // tooltip
  extract: (repo: RepoFragment) => Metric
}

export type FrameworkMetrics = { [name: ExtractorName]: Metric }

export const metrics: Extractor[] = [
  {
    name: 'repo',
    shortDesc: 'link',
    extract: repo => ({
      html: true,
      value: `
        <a href="${repo.url}">
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
        <a href="${repo.homepageUrl}">
          <img src="${repo.owner.avatarUrl}" style="height: 24px"/>
          <span>${capitalize(repo.name)}</span>
        </a>
      `,
    }),
  },
  {
    name: 'stars',
    shortDesc: 'count',
    icon: octicons.star.toSVG(),
    extract: repo => ({ value: spaceFormatNumber(repo.stargazerCount) }),
  },
  {
    name: 'forks',
    shortDesc: 'count',
    icon: octicons['repo-forked'].toSVG(),
    extract: repo => ({ value: spaceFormatNumber(repo.forkCount) }),
  },
  {
    name: 'issues',
    shortDesc: 'open',
    icon: octicons['issue-opened'].toSVG(),
    extract: repo => ({ value: repo.issues.totalCount }),
  },
  {
    name: 'PRs',
    shortDesc: 'open',
    icon: octicons['git-pull-request'].toSVG(),
    extract: repo => ({ value: repo.pullRequests.totalCount }),
  },
  {
    name: 'commits',
    shortDesc: 'main branch',
    icon: octicons['git-commit'].toSVG(),
    extract: repo => ({ value: repo.commits?.history?.totalCount }),
  },
  {
    name: 'version',
    shortDesc: 'latest',
    extract: repo => ({
      // value: repo.latestRelease?.tagName + ' = ' + formatTimeAgo(repo.latestRelease?.publishedAt),
      value: repo.latestRelease?.tagName,
    }),
  },
  {
    name: 'language',
    shortDesc: 'primary',
    extract: repo => {
      if (!repo.primaryLanguage?.name) return { value: null }
      return {
        html: true,
        value: `<span style="color: ${repo.primaryLanguage.color}">${octicons[
          'dot-fill'
        ].toSVG()}</span>${repo.primaryLanguage?.name}`,
      }
    },
  },
  {
    name: 'created',
    shortDesc: 'time ago',
    extract: repo => ({ value: formatTimeAgo(repo.createdAt) }),
  },
  {
    name: 'updated',
    shortDesc: 'time ago',
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
