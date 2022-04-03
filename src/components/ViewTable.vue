<script lang="ts" setup>
import { metrics } from '@/metrics'
import type { FrameworkMetrics } from '@/metrics'

defineProps<{ data: FrameworkMetrics[] }>()
</script>

<template lang="pug">
table
  thead
    tr.theader
      th(v-for="m in metrics" :class="m.name").key
        span(v-if="m.html" v-html="m.html")
        span(v-else) {{m.name}}
  tbody
    tr(v-for="repo in data").entry
      td(v-for="m in metrics" :class="m.name")
        div(v-if="repo[m.name].html" v-html="repo[m.name].value").cell-wrapper
        template(v-else) {{repo[m.name].value}}
</template>

<style>
.cell-wrapper {
  display: flex;
  /* justify-content: center; */
}

.cell-wrapper a {
  display: flex;
  align-items: center;
}

.cell-wrapper img + span {
  margin-left: 5px;
}

/* Metric-specific styles */
.repo .cell-wrapper {
  justify-content: center;
}

.framework span {
  font-weight: bold;
}
</style>

<style scoped>
table {
  width: 100%;
}

thead {
  background-color: var(--gh-black);
  color: #fff;
}

th {
  padding: 10px 12px;
}

tbody tr {
  background-color: #fff;
}

tbody tr:hover {
  background-color: hsl(0, 0%, 95%);
}

tbody td {
  background-color: inherit;
  padding: 8px;
}
</style>
