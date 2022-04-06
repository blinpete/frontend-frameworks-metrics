/** A set of crutches to unify repos metadata */

import type { RepoFragmentFragment } from '@/graphql'

export function fixLogos(repo: RepoFragmentFragment) {
  // repo.owner.avatarUrl = 'https://s2.googleusercontent.com/s2/favicons?domain=' + repo.homepageUrl
  if (repo.name === 'react') repo.owner.avatarUrl = repo.homepageUrl + '/favicon.ico'
  return repo
}

export function fixNames(repo: RepoFragmentFragment) {
  // repo.owner.avatarUrl = 'https://s2.googleusercontent.com/s2/favicons?domain=' + repo.homepageUrl
  if (repo.nameWithOwner === 'vuejs/vue') repo.name = 'Vue v2'
  if (repo.nameWithOwner === 'vuejs/core') repo.name = 'Vue v3'
  if (repo.nameWithOwner === 'elm/core') repo.name = 'Elm'

  return repo
}
