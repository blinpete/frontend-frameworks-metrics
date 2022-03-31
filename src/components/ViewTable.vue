<script lang="ts" setup>
import { MetricsAliases as metrics } from '@/metrics'

defineProps<{ data: { [key: string]: any } }>()
</script>

<template lang="pug">
table
  thead
    tr.theader
      th(v-for="(value, key) in metrics" :class="key").key {{value}}
  tbody
    tr(v-for="item in data").entry
      td(v-for="(_, key) in metrics") {{item[key].value}}
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
</style>
