import { formatTimeAgo, kFormatNumber, spaceFormatNumber, capitalize } from './utils'
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
  html?: string
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
          ${octicons['mark-github'].toSVG({ width: 18 })}
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
          <img src="${repo.owner.avatarUrl}" style="height: 25px"/>
          <span>${capitalize(repo.name)}</span>
        </a>
      `,
    }),
  },
  {
    name: 'stars',
    html: `<span>${octicons.star.toSVG()} stars</span>`,
    extract: repo => ({ value: spaceFormatNumber(repo.stargazerCount) }),
  },
  {
    name: 'forks',
    html: `<span>${octicons['repo-forked'].toSVG()} forks</span>`,
    extract: repo => ({ value: spaceFormatNumber(repo.forkCount) }),
  },
  {
    name: 'open issues',
    html: `<span>${octicons['issue-opened'].toSVG()} issues</span>`,
    extract: repo => ({ value: repo.issues.totalCount }),
  },
  {
    name: 'open PRs',
    html: `<span>${octicons['git-pull-request'].toSVG()} open PRs</span>`,
    extract: repo => ({ value: repo.pullRequests.totalCount }),
  },
  {
    name: 'version',
    extract: repo => ({
      // value: repo.latestRelease?.tagName + ' = ' + formatTimeAgo(repo.latestRelease?.publishedAt),
      value: repo.latestRelease?.tagName,
    }),
  },
  {
    name: 'language',
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
