import { metricsSortable, type ExtractorName, type FrameworkMetrics } from '@/metrics'
import { computed, reactive } from 'vue'

export default function (data: FrameworkMetrics[]) {
  interface Sorter {
    name: ExtractorName
    direction: 1 | -1
  }
  const sorter: Sorter = reactive({ name: 'stars', direction: 1 })

  const dataSorted = computed(() => {
    const k = sorter.name
    const d = sorter.direction
    return [...data].sort((a, b) => d * (b[k].sortValue - a[k].sortValue))
  })

  function toggleSort(name: typeof sorter['name']) {
    if (sorter.name === name) {
      sorter.direction *= -1
      return
    }

    if (metricsSortable.includes(name)) {
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
