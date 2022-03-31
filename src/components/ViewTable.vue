<script lang="ts" setup>
import { metrics } from '@/metrics'

defineProps<{ data: { [key: string]: any } }>()
</script>

<template lang="pug">
table
  thead
    tr.theader
      th(v-for="(m, key) in metrics" :class="key").key {{m.alias}}
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
