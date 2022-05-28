import { metricsSortable, type ExtractorName, type FrameworkMetrics } from '@/metrics'
import { computed, reactive } from 'vue'

export function includes<T extends U, U>(array: ReadonlyArray<T>, el: U): el is T {
  // https://fettblog.eu/typescript-array-includes/
  return array.includes(el as T)
}

export default function (data: FrameworkMetrics[]) {
  interface Sorter {
    name: ExtractorName
    direction: 1 | -1
  }
  const sorter: Sorter = reactive({ name: 'stars', direction: 1 })

  const dataSorted = computed(() => {
    const k = sorter.name
    const d = sorter.direction
    return [...data].sort((a, b) => {
      const v1 = a[k].sortValue
      const v2 = b[k].sortValue

      return v1 && v2 ? d * (v2 - v1) : 0
    })
  })

  function toggleSort(name: typeof sorter['name']) {
    if (sorter.name === name) {
      sorter.direction *= -1
      return
    }

    if (includes(metricsSortable, name)) {
      sorter.name = name
      sorter.direction = 1
    }

    // sorter.name = o.name
    // sorter.direction = o.direction || 1
  }

  function getSorterClass(name: typeof sorter['name']) {
    if (sorter.name !== name) return null

    return ['sorter', sorter.direction > 0 ? 'bottom' : 'top']
  }

  return {
    dataSorted,
    toggleSort,
    getSorterClass,
  }
}
