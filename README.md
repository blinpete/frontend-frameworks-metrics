# A Living Collection of Frontend Frameworks
[![Deploy GitHub Pages workflow](https://github.com/blinpete/frontend-frameworks-metrics/actions/workflows/gh-pages-deploy.yml/badge.svg)](https://github.com/blinpete/frontend-frameworks-metrics/actions/workflows/gh-pages-deploy.yml)
[![last commit on ph-pages branch](https://badgen.net/github/last-commit/blinpete/frontend-frameworks-metrics/gh-pages?label=last%20deploy&labelColor=272d33&color=3bc147)](https://github.com/blinpete/frontend-frameworks-metrics/deployments/activity_log?environment=github-pages)
[![License](https://badgen.net/badge/license/MIT/blue)](https://github.com/blinpete/frontend-frameworks-metrics/blob/main/LICENSE)


A place where frontdevs can keep up to date with their marvelous frameworks. [Take a look](https://blinpete.github.io/frontend-frameworks-metrics/).


It uses [GitHub GraphQL API](https://docs.github.com/en/graphql) to fetch the following data:
- `logo`
- `website`
- `stars` count
- `forks` count
- `open issues` count
- `open PRs` count
- `commits` count (on default branch)
- `latest release` label and time
- `languages` dominants
- `createdAt` time
- `updatedAt` time


GitHub workflow fetches the fresh data every night (at 00:00 UTC) and deploys the app to GitHub Pages.


# Contributing

Pull requests are welcome. If you can't find your favourite framework in the list just edit [this file](https://github.com/blinpete/frontend-frameworks-metrics/blob/main/src/entries.json) and create a pull request.

If you encountered a bug or have a feature request please [open an issue](https://github.com/blinpete/frontend-frameworks-metrics/issues/new/choose).


