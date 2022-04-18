export { formatTimeAgo, getYear } from './date'
export { kFormatNumber, spaceFormatNumber } from './number'

export function capitalize(str: string) {
  return str[0].toUpperCase() + str.slice(1)
}
