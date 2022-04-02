<script lang="ts" setup>
import { metrics } from '@/metrics'
import type { FrameworkMetrics } from '@/metrics'

defineProps<{ data: FrameworkMetrics[] }>()
</script>

<template lang="pug">
table
  thead
    tr.theader
      th(v-for="m in metrics" :class="m.name").key {{m.name}}
  tbody
    tr(v-for="repo in data").entry
      td(v-for="m in metrics")
        div(v-if="repo[m.name].html" v-html="repo[m.name].value").logo
        template(v-else) {{repo[m.name].value}}
</template>

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

.logo {
  /* border: 4px solid #000; */
  display: flex;
  justify-content: center;
}
.logo img {
  /* width: 50px; */
  height: auto;
  /* object-fit: cover; */
}
</style>
