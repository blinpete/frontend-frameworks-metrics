// source:
// https://blog.webdevsimplified.com/2020-07/relative-time-format/

const formatter = new Intl.RelativeTimeFormat(undefined, {
  numeric: 'auto',
})

type Division = {
  amount: number
  name: Intl.RelativeTimeFormatUnit
}
const DIVISIONS: Division[] = [
  { amount: 60, name: 'seconds' },
  { amount: 60, name: 'minutes' },
  { amount: 24, name: 'hours' },
  { amount: 7, name: 'days' },
  { amount: 4.34524, name: 'weeks' },
  { amount: 12, name: 'months' },
  { amount: Number.POSITIVE_INFINITY, name: 'years' },
]

function __formatTimeAgo(date: number | string) {
  if (!date) return ''

  date = new Date(date).valueOf()

  let duration = (date - new Date().valueOf()) / 1000

  for (let i = 0; i <= DIVISIONS.length; i++) {
    const division = DIVISIONS[i]
    if (Math.abs(duration) < division.amount) {
      return formatter.format(Math.round(duration), division.name)
    }
    duration /= division.amount
  }

  return ''
}

export function formatTimeAgo(date: number | string, keepAgoWord = false) {
  const output = __formatTimeAgo(date)
  return keepAgoWord ? output : output.replace('ago', '')
}

// ---------- year
export function getYear(date: number | string) {
  return new Date(date).getFullYear()
}
